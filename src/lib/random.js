process.on('message', (data) => {
    const randomNumber = (num) => {
        const arr = [];

        for (let i = 0; i <= num * 1e6; i++) {
            arr.push(Math.floor(Math.random() * 11));
        }
        return arr;
    };

    process.send(randomNumber(data));
});
