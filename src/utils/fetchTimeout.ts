// eslint-disable-next-line
export default async function (url: string, options?: any, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]);
}
