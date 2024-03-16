// 二分查找
function binarySearch(nums, target) {
    if(nums.length == 0)return 0;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
let a = binarySearch([1,2,3,4], 2);
console.log(a);
function lengthOfLIS(nums) {
    let dp = [];
    for (let num of nums) {
        let idx = binarySearch(dp, num);
        if (idx === dp.length) {
            dp.push(num);
        } else {
            dp[idx] = num;
        }
    }
    return dp.length;
}

// 示例
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // 输出: 4，最长递增子序列为 [2, 3, 7, 101]
