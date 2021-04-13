// Rehan Khan
// 4/13/2021

// 1.
maxOfTwoNumbers = (a, b) => {

    if(a > b)
    return a;
    else
    return b;
}

// 2.
maxOfThree = (a, b, c) => {

    if(a > b && a > c)
    return a;
    else if (b > c)
    return b;
    else
    return c;
}

// 3.
isCharAVowel = (a) => {

    if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')
    return true;
    else
    return false;
}

// 4.
sumArray = (arr) => {

    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

multiplyArray = (arr) => {

    let total = 1;

    for(let i = 0; i < arr.length; i++) {
        total *= arr[i];
    }

    return total;
}

// 5.
totalParam1 = () => {

    return arguments.length;
}

// 6.
reverseStr = (a) => {

    let newStr = "";
    for(let i = (a.length-1); i >= 0; i--) {

        newStr += a[i];
        console.log(newStr)
    }

    return newStr;
}

// 7.
findLongestWord = (arr) => {

    let longest = 0;
    for(let i = 0; i < arr.length; i++) {
        
        if(longest < arr[i].length)
            longest = arr[i].length;
        }

    return longest;
}

// 8.
filterWords = (arr, filter) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {

        if(arr[i].length > filter)
        newArr.push(arr[i])
    }

    return newArr;
}

