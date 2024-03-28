// ts的泛型工具
interface User{
  name:String,
  age:number
}

let u:User = {
  name: 'a',
  age: 0
}

/****************************************************** */
// 将一个类型的所有属性变为可选
type x = Partial<User>
// 原理 全部转为可选
type myPartial<T> = {
  [P in keyof T]? : T[P]
}

// 支持联合类型
// T  K必须是T的子类型
type myPartial2<T,K extends keyof T> = {
  // p遍历K
  [P in K]?:T[P]
}



/****************************************************** */

type userrequired = Required<User>
type myRequired<T> = {
  [P in keyof T]-? : T[P]
}



/****************************************************** */

type picku = Pick<User,'age'>
type myPick<T,K extends keyof T> = {
  [P in K]:T[P]
}



/****************************************************** */
// Exclude 是一个类型操作符，用于从一个类型的属性集合中排除指定的属性
// type excludeU = Exclude<User,'name'>
// let ex:excludeU = {
//   'age': 1,
//   name: '1'
// }

type ex = Exclude<'a' | 'b', 'a'>
// type Exclude<T, U> = T extends U ? never : T;


/****************************************************** */
// 用于创建一个新类型，该新类型从原始类型中排除指定的属性
type omitu = Omit<User,'age'>


type myOmit<T,K> = Pick<T,Exclude<keyof T,K>>



//record 约束对象的key和value
 
type Key = "c" | "x" | "k";
 
type Value = '唱' | '跳'  | 'rap' | '篮球'
 
let obj:Record<Key,Value> = {
    'c':'唱',
    "x":'跳',
    "k":'rap'
}

const fn = () => [1,2,3,'sad'];
 
type num = ReturnType<typeof fn>;