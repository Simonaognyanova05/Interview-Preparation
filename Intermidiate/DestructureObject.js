function destructureObject(){
    const user = {
        name: "Peter",
        age: 28,
    };

    const {name, age} = user;

    console.log(name, age);
}

destructureObject();