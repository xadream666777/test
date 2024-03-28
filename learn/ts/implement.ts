interface Printable {
  print(): void;
}


// 表示该类承诺实现了这些接口所定义的成员（属性和方法）
class MyClass implements Printable {
  print(): void {
    console.log("Printing...");
  }
}

// interface BC extends A, C {}
// class D implements A,C{}