// 动态规划
function lengthOfLIS(nums) {
    if (!nums.length) return 0;

    let dp = new Array(nums.length).fill(1);
    let maxLen = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}

// 示例       1 1 1   2   2  3  4    4
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // 输出: 4，最长递增子序列为 [2, 3, 7, 101]


// function new1(fn){
//     let obj = {}
//     obj.__proto__ = fn.prototype

//     fn.bind(obj)
//     return obj;
// // }
// class Stu{
//     name = 1
//     say(){}
// }
// let stu = new Stu()
// for(let k in stu){
//     console.log(k);
// }
let fn = ()=>{
    console.log(arguments);
}
fn(1,2,3)