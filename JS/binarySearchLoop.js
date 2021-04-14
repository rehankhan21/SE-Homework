function binarySearch(nums) {

    //let nums = [1, 3, 6, 2, 8, 3, 20]
    let tmp = 0;
    let data = 1;

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

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2);


        if(data == nums[mid]) {
            //console.log(data + " is at index " + mid);
            return data + " is at index " + mid;
        }
        else if (data < nums[mid]){
            right = mid - 1;
        }
        else {
            left  = mid + 1;
        }

        // if(right == left) {
        //     console.log("number not found")
        // }
    }

    // let size = nums.length - 1;
    // console.log(search(nums, 0, size, data));

}


// let nums = [1, 3, 6, 2, 8, 3, 20]
// binarySearch(nums);