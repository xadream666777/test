const middleware = []
let mw1 = async function (ctx, next) {
    console.log("next前，第一个中间件")
    await next()
    console.log("next后，第一个中间件")
    new Promise(next).then(res=>{
      console.log("next后，第一个中间件")
    })
}
let mw2 = async function (ctx, next) {
    console.log("next前，第二个中间件")
    await next()
    console.log("next后，第二个中间件")
}
let mw3 = async function (ctx, next) {
    console.log("第三个中间件，没有next了")
}

function use(mw) {
  middleware.push(mw);
}

function compose(middleware) {
  return (ctx, next) => {
    return dispatch(0);
    function dispatch(i) {
      const fn = middleware[i];
      if (!fn) return;
      return fn(ctx, dispatch.bind(null, i+1));
    }
  }
}

use(mw1);
use(mw2);
use(mw3);

const fn = compose(middleware);

fn();


// let p = new Promise(resolve=>{
//     console.log("next前，第一个中间件")

//     Promise.resolve(new Promise(
      
//     ))
//     .then(()=>{
//         console.log("next后，第一个中间件")
//     })
// })

let p = Promise.resolve(()=>{
  console.log(1);
})
console.log(p);