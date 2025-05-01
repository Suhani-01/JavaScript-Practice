let num = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("123");
    }, 10000)
    console.log("hELLO i AM OUTSIDE the ProMise");
    resolve();
});
