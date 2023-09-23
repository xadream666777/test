/*
 * @FilePath: /test/error.js
 * @Description: 
 */
function fn1() {
    try {
        // fn2()
        throw Error('fn1', 'fn1-rror')
    } catch (e) {
        console.log('fn1', e)
    }
}

function fn2() {
    // throw new Error('fn2')
    const fn3 = () => {
        try {
            throw new Error('fn3')
        } catch (e) {
            // console.log('fn3', e)
            return 123
        }
    }

    const res = fn3()
    console.log('f3-res', res)
}

try {
    // fn1()
} catch (e) {
    console.log('catch', e)
}

console.log(WebSocket)

// const net = require('net')
// const server = net.createServer(socket => {
//     socket.on('data', data => {
//         console.log(data.toString())
//     })
//     socket.on('error', err => {
//         console.log(err)
//     })
// })
// server.listen('wss://api.sportxxx278gwf4.com/yewuws2/push', (r) => {
//     console.log(r)
// })