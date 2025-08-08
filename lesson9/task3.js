const car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

const car2 = {
    brand: "Honda",
    model: "Civic",
    owner: "Іван Іванов"
};

const car3 = { ...car1, ...car2 };

console.log(car3);