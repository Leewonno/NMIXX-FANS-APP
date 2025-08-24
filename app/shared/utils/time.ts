export const timeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime(); // 밀리초 차이
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays >= 1) {
    return `${diffDays}일 전`;
  } else if (diffHours >= 1) {
    return `${diffHours}시간 전`;
  } else if (diffMinutes >= 1) {
    return `${diffMinutes}분 전`;
  } else {
    return '방금 전';
  }
};