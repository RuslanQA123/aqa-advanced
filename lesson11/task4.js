class TodoService {
    async getTodo() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        return response.json();
    }
}

class UserService {
    async getUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        return response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

async function fetchDataWithClasses() {
    try {
        const results = await Promise.all([
            todoService.getTodo(),
            userService.getUser()
        ]);
        console.log("Promise.all results (класи):", results);

        const raceResult = await Promise.race([
            todoService.getTodo(),
            userService.getUser()
        ]);
        console.log("Promise.race result (класи):", raceResult);
    } catch (error) {
        console.error("Помилка у запитах:", error);
    }
}

fetchDataWithClasses();