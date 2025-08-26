export const postData = async (url: string, mutation: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query : mutation }),
  });
  const json = await response.json();
  return json.data;
}