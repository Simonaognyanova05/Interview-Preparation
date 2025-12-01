function findEvenNumber(arr){
    let newArr = arr.filter(x => x % 2 == 0);

    return newArr.join(", ");
}

console.log(findEvenNumber([1, 2, 3, 4]));
