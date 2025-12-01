function checkIfIsPalindrome(string){
    let reversed = string.split("").reverse().join("");

    if(string === reversed){
        return "It is palindrome";
    }else{
        return "It is not palindrome";
    }
}

console.log(checkIfIsPalindrome("racecar"));
