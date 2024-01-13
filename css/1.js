// 假设你已经有了 02:00:00 的时间戳，单位是毫秒
// const timestamp02 = 1704783600018;

// 将毫秒转换为秒
const timestamp02InSeconds = 1704783600018;

// 获取 [00:00:01, 02:00:00] 的时间范围
const startTimestamp = timestamp02InSeconds - 2 * 3600 * 1000 + 1000;
console.log(startTimestamp);
const endTimestamp = timestamp02InSeconds;

console.log("Time Range:", new Date(startTimestamp), "to", new Date(endTimestamp));
