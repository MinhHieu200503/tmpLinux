fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => data.json())
    .then((data) => {
        document.getElementById('container').innerHTML = JSON.stringify(data);
    });
