function isAdult(age) {
    if (age >= 18) {
        console.log(`Adult person`);
        return true;
    }

    else {
        console.log(`Person is not adult`);
        return false;
    }
}

isAdult(15)
isAdult(25)
