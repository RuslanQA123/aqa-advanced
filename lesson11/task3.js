async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
}

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
}

async function fetchData() {
    try {
        const results = await Promise.all([getTodo(), getUser()]);
        console.log("Promise.all results:", results);

        const raceResult = await Promise.race([getTodo(), getUser()]);
        console.log("Promise.race result:", raceResult);
    } catch (error) {
        console.error("Помилка у запитах:", error);
    }
}

fetchData();