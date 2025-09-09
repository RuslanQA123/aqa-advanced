function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json());
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json());
}

Promise.all([getTodo(), getUser()])
    .then(results => {
        console.log("Promise.all results:", results);
    })
    .catch(error => {
        console.error("Помилка у Promise.all:", error);
    });

Promise.race([getTodo(), getUser()])
    .then(result => {
        console.log("Promise.race result:", result);
    })
    .catch(error => {
        console.error("Помилка у Promise.race:", error);
    });