function binarySearch(nums) {

    //let nums = [1, 3, 6, 2, 8, 3, 20]
    let tmp = 0;
    let data = 20;

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] > nums[j]) {
                tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }

    console.log(nums);


    function search(arr, left, right, x) {
        
        if (right >= left) {
           let mid = Math.floor((left + right) / 2);


            if (x == arr[mid]) {

                return  x + " is at index " + mid;
            }

            if (x < arr[mid]) {

                return search(arr, left, mid - 1, x)
            }
            else {

                return search(arr, mid + 1, right, x)
            }
        }

        return -1;
    }

    let size = nums.length - 1;
    console.log(search(nums, 0, size, data));

}


let nums = [1, 3, 6, 2, 8, 3, 20]
binarySearch(nums);