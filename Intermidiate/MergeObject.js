function mergeObjects() {
    const car = {
        brand: "Mercedes",
        model: "C-Class",
    };

    const person = {
        name: "Peter",
        age: "27",
    };

    const merged = { ...car, ...person };

    console.log(merged);
}

mergeObjects();