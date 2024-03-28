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
 
type rfn = typeof fn;
type num = ReturnType<typeof fn>;


// 命名空间
namespace spacea {
  let fn = 1;
  export const aa = 2 ;
  export namespace spaceb{
    export const bb = 3;
  }

  class A {
    name:'A'
    sayA(){}
  }
  class C {
    name:'C'
    sayC(){}
  }
  class B{}
  [A,C].forEach(item=>{
    let res= Object.getOwnPropertyNames(item.prototype)
    console.log(res);
  })

  Mixins(B, [A, C])
  function Mixins(curCls: any, itemCls: any[]) {
      itemCls.forEach(item => {
          Object.getOwnPropertyNames(item.prototype).forEach(name => {
              curCls.prototype[name] = item.prototype[name]
          })
      })
  }

  interface Name {
    name: string
  }
  interface Age {
      age: number
  }
  interface Sex {
      sex: number
  }
  
  let people1: Name = { name: "小满" }
  let people2: Age = { age: 20 }
  let people3: Sex = { sex: 1 }
  
  const people = Object.assign(people1,people2,people3)
  // people

  // type aaA = void | number | never


}

namespace B{
  interface Person {
    name: string;
    age: number;
  }

  interface Person {
      gender: string;
  }

  const person: Person = {
      name: "John",
      age: 30,
      gender: "male"
  };

  
  // type User = {
  //   name: string;
  //   age: number;
  // };

  // type Admin = {
  //     name: string;
  //     role: string;
  // };

  // type UserAdmin = User & Admin;

  // const userAdmin: UserAdmin = {
  //     name: "John",
  //     age: 30,
  //     role: "admin"
  // };

  class a{
    a1(){}
  }
  class b extends a{
    b1(){}
  }
  class c extends b{
    c1(){}
  }
  let ins = new c()

  namespace x{
    interface c extends a,b{}
    
    class d implements a,b{
      a1
      b1(){}
      constructor(){
        Object.assign(d.prototype,new a(),new b())
        // this.a = new a()
        // this.b = new b()
      }
    }
    let dd = new d()
    dd.a1()
  }

  

}