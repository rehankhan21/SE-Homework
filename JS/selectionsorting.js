let array = [-1, 220, 10, 35, 5]


for (let i = 0; i < array.length - 1; i++) {

    for (let j = i + 1; j < array.length; j++) {

        let tmp = 0;
        if(array[i] > array[j]) {
            tmp = array[i];;
            array[i] = array[j];
            array[j] = tmp;
            
        }
    }
    console.log(array[i])
}

console.log(array)