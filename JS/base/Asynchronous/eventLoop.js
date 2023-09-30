async function callAsyn() {
    setTimeout(() => {
        console.log('setTimeOut');
    }, 0);

    await fetch('http://localhost:3000/testEventLoop')
        .then((resolve) => {
            return resolve.json();
        })
        .then((json) => {
            console.log(json);
            return json;
        });

    // console.log(result)
    //  let result = 1

    console.log('line 1');
    setTimeout(() => {
        console.log('setTimeOut1');
    }, 0);
    console.log('line 2');
    console.log('line 3');
}

callAsyn();
