let nums = [];

let nums1 = [1,3,5, 4,6,7,3]

for (let i = 0; i <= 10; i++) {

    nums.push(i * 2);
}

for (let i = 0; i <= nums.length - 1; i++) {

    console.log(nums[i]);
}

console.log(nums1.sort().reverse());

