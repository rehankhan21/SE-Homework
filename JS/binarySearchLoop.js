function binarySearch(nums, data) {
    
    let tmp = 0;

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] > nums[j]) {
                tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2);


        if(data == nums[mid]) {
            return data + " is at index " + mid;
        }
        else if (data < nums[mid]){
            right = mid - 1;
        }
        else {
            left  = mid + 1;
        }

    }

    return "number not found in " + nums;

}


