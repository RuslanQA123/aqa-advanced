// function declaration


function areaUpright(width, height) {
    const area = width * height;
    return area
}

console.log(`The area of upright is`,areaUpright(5, 10));

// function expression

const secondAreaUpright = function(width, height) {
    const area = width * height;
    return area
}

console.log(`The area of upright is`,secondAreaUpright(5, 10));

// Arrow function

const threeAreaUpright = (width, height) => {
    const area = width * height;
    return area
}

console.log(`The area of upright is`,threeAreaUpright(5, 10));
