function countNumber(arr, num){
    let times = arr.filter(x => x === num).length;

    return times;
}

console.log(countNumber([1, 3, 5, 3, 7, 3], 3)); // 3
