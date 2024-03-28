class A {
  say(){

  }
}
class C {}

// 1
interface BC extends A, C {}
class B implements BC {
  // 实现 A 和 C 的成员
  say(){

  }
}

// 2
class D implements A,C{
  say(){

  }
}