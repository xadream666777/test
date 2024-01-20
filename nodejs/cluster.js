const cluster = require('cluster');
const os = require('os');

console.log(os.type()); // Darwin
console.log(os.arch()); // arm64
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.totalmem());



/*
cluster
EventEmitter {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  isWorker: false,
  isMaster: true,
  isPrimary: true,
  Worker: [Function: Worker],
  workers: {},
  settings: {},
  SCHED_NONE: 1,
  SCHED_RR: 2,
  schedulingPolicy: 2,
  setupPrimary: [Function (anonymous)],
  setupMaster: [Function (anonymous)],
  fork: [Function (anonymous)],
  disconnect: [Function (anonymous)],
  [Symbol(kCapture)]: false
}


os.type() 获取操作系统类型，如 "Windows_NT"、"Linux" Darwin
os.cpus() 获取 CPU 信息
os.freemem() 获取可用内存
os.totalmem() 获取总内存
*/