export const shortenString = (title: string, length: number) =>
  title.length >= length ? title.slice(0, length) + "..." : title;
