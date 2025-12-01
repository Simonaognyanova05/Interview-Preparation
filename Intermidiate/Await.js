function wait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Done")
        }, 1000);
    })
};

async function run() {
    const result = await wait();

    console.log(result);
}

run();