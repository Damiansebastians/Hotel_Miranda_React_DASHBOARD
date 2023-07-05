
export function delaySlice(data, time = 200) {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, time);
        });
    }