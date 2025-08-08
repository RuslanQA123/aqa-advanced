const users = [
    { name: "Олег", email: "oleg@example.com", age: 25 },
    { name: "Марія", email: "maria@example.com", age: 30 },
    { name: "Іван", email: "ivan@example.com", age: 22 }
];

for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}