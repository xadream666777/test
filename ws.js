/*
 * @FilePath: /test/ws.js
 * @Description:
 */
// const WebSocket = require("ws");
// const server = new WebSocket.Server({ port: 8888 });
// server.on("connection", (socket) => {
//     console.log("receive a connection");
//     socket.on("message", (data) => {
//         console.log(data.toString());
//         socket.send(`${data} ni hao`, (err) => {
//             if (err) {
//                 console.log(`[SERVER] error: ${err}`);
//             }
//         });
//         setTimeout(() => {
//             socket.send(`What's your name?`, (err) => {
//                 if (err) {
//                     console.log(`[SERVER] error: ${err}`);
//                 }
//             });
//         }, 1000);
//     })
//     socket.on('close', () => {
//         // 处理连接断开的逻辑
//         console.log('有用户离开了聊天室');
//     });
// })

const WebSocket = require('ws');

const ws = new WebSocket('wss://api.sportxxx278gwf4.com/yewuws2/push');
const ws2 = new WebSocket('wss://api.sportxxx278gwf4.com/yewuws2/push');

ws.on('open', function open() {
    ws.send(JSON.stringify({
        cmd: "C8",
        cufm: "LM",
        list: [{ mid: 2740897, hpid: "*", level: 3 }],
        marketLevel: 0,
        requestId: "3eabe55defb9ceee9c1d95e696ce25086fa33fdd",
    }));

});
ws.on('message', function message(data) {
    console.log('received:', JSON.parse(data));
});

ws2.on('open', function open() {
    ws.send(JSON.stringify({
        cmd: "C8",
        cufm: "LM",
        list: [{ mid: 2703670, hpid: "*", level: 3 }],
        marketLevel: 0,
        requestId: "3eabe55defb9ceee9c1d95e696ce25086fa33fdd",
    }));

});
ws2.on('message', function message(data) {
    console.log('received:', JSON.parse(data));
});