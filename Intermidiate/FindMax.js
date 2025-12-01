// With my own algorithum
function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        else{
            max = max;
        }
    }

    return max;
}
console.log(findMax([1, 6, 4, 3, 3, 8]));

// With built-in function
function findMaxWithBuilt(arr){
    let max = Math.max(...arr);

    return max;
}

console.log(findMaxWithBuilt([1, 6, 4, 3, 3, 8]));
