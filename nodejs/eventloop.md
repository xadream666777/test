
## 微任务  
1. next tick queue: process.nextTick
2. other queue:     then queueMicrotask

## 宏任务  
1. timer queue: setTimeout setInterval
2. poll queue : IO事件
3. check queue: setImmediate
4. close queue: close 事件


## 执行顺序
1. global 主程任务
2. nextTick
3. promise.then
4. timer queue
5. poll queue
6. check queue
7. close queue

## setTimeout
setTimeout 最低1ms执行，然后塞到times阶段
setImmediate 然后塞到check阶段
同步代码执行完毕，进入Event Loop
先进入times阶段，检查当前时间过去了1毫秒没有，如果过了1毫秒，满足setTimeout条件，执行回调，如果没过1毫秒，跳过
跳过空的阶段，进入check阶段，执行setImmediate回调
> 这里的关键在于这1ms，如果同步代码执行时间较长，进入Event Loop的时候1毫秒已经过了，setTimeout先执行，如果1毫秒还没到，就先执行了setImmediate


```js
async function async1() {
    console.log('async1 start') // 2
    await async2()               // Promise.resolve(async2).then(console.log('async1 end'))
    console.log('async1 end') // 9
}

async function async2() {
    console.log('async2') // 3
}

console.log('script start') // 1

setTimeout(function () {
    console.log('setTimeout0') // 11
}, 0)

setTimeout(function () {
    console.log('setTimeout2') // 13
}, 300)

setImmediate(() => console.log('setImmediate')); // 12

process.nextTick(() => console.log('nextTick1')); // 7

async1();

process.nextTick(() => console.log('nextTick2')); // 8

new Promise(function (resolve) {
    console.log('promise1') // 4
    resolve();
    console.log('promise2') // 5
}).then(function () {
    console.log('promise3') // 10
})

console.log('script end') // 6
```