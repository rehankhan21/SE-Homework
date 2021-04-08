let array = [-1, 220, 10, 35, 5]


for (let i = 0; i < array.length - 1; i++) {

    for (let j = 0; j < array.length - i - 1; j++) {


        let tmp = 0;
        if(array[j] > array[j + 1]) {
            tmp = array[j];;
            array[j] = array[j + 1];
            array[j + 1] = tmp;
            
        }
    }
}

console.log(array)