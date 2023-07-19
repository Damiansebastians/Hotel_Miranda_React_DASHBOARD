export function delaySlice(data, time: number = 200) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(data);
      } catch (e) {
        reject(e)
      }
    }, time);
  });
}
