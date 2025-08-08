const person = {
    firstName: "Руслан",
    lastName: "Корнієнко",
    age: 27
};

person.email = "ruslan.kornienko@example.com";

delete person.age;

console.log(person);