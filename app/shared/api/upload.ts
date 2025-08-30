import { API_URL } from "@env";
import { postData } from "./post";
import { launchImageLibrary } from "react-native-image-picker";

const getBlob = async (fileUri: string) => {
  const resp = await fetch(fileUri);
  const imageBody = await resp.blob();
  return imageBody;
};

export const uploadToS3 = async () => {
  const result = await launchImageLibrary({ mediaType: 'photo' });
  if (!result.assets?.length) return;

  const asset = result.assets[0];
  const fileName: string = `${asset.fileName ?? ''}`;
  const fileType = asset.type ?? 'application/octet-stream';
  const fileUri: string = asset.uri ?? '';

  const mutation = `
      mutation {
        generatePresignedUrl(filename: "${fileName}", contentType:"${fileType}") {
          uploadUrl
          fileUrl
        }
      }
    `
  try {
    const data = await postData(API_URL, mutation);
    if (data.generatePresignedUrl) {

      // 서버에서 생성된 Presigned URL
      // todo : uploadUrl을 쓸 때는 업로드가 되지 않는데, fileUrl을 쓰면 작동함 왜 그런지 확인해야함
      const { uploadUrl, fileUrl } = data.generatePresignedUrl;

      // S3 업로드
      const blob = await getBlob(fileUri);
      const res = await fetch(fileUrl, {
        method: 'PUT',
        body: blob,
        headers: {
          'Content-Type': fileType,
        },
      });
      return fileUrl;
    }
    return null;
  }
  catch (err) {
    console.error(err);
  }
};