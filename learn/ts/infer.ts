// infer
// 推导泛型参数  只能出现在extends语句中


// 获取promise 返回值

interface User2{
  name:String
}

type Result = Promise<User2>;

let a:Result = new Promise((resolve)=>{
  let u:User2 = {
    name:'u'
  }
  resolve(u);
})

type PromiseRes<T> = T extends Promise<infer R> ? R : never;

type r = PromiseRes<Result>

let obj1 = {
  name:'1',
  e:2,
  age:2
}
let ar = [1,2,3,'A']  //(string | number)[]
let tyar = typeof ar;
// 输出对象类型
type aAA = typeof obj1;

// (string | number)[]
type bb = typeof ar;
// typeof User2


type pkey<T> = T extends {name:infer N,age:infer A}?[N,A]:never;

type rr = pkey<typeof obj1> // type rr = [number, number]



// 协变
type pkey1<T> = T extends {name:infer N,age:infer N}?N:T;
// type rr1 = string | number
type rr1 = pkey1<typeof obj1>


type Arr = ['a','b','c']
type aaaa = Arr[1]
 
type First<T extends any[]> =  T extends infer First ? First : []
 
type a = First<Arr>


