# Flutter入门与实战

## 学习路线

### dart:

dart官网：https://dart.dev/guides

dart知识点总结：https://juejin.cn/post/6905929089379500039

### flutter:

flutter官网：https://docs.flutter.dev/

flutter中文网：https://flutter.cn/docs/get-started/install

web开发指南：https://flutter.cn/docs/get-started/flutter-for/web-devs#performing-basic-layout-operations



## 环境安装

官方文档提供了win和mac的环境安装，下面我提供mac一种更方便的安装方式，无需配置环境变量。

1. 安装homebrew。

   > /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
   >
   > 终端输入此命令，然后输入1即可下载。

2. 安装Flutter SDK

   > brew install --cask flutter

3. 安装安卓SDK

   > brew install --cask android-sdk

4. `flutter doctor -v` 检查依赖安装情况

   > 安装成功后，会输出各个依赖的版本和存放地址等信息。当我们需要去编辑器配置SDK路径时，可以通过此命令去查找

### 编辑器

编辑器使用`Android Studio`和`Vscode`都可，都需要先安装`dart`和`flutter`插件。

`Android Studio`: https://flutter.cn/docs/tools/android-studio

`Vscode`: https://flutter.cn/docs/tools/vs-code

DevTools: https://flutter.cn/docs/tools/devtools/overview

> 重点看下Flutter inspector、网络视图



## 布局约束

官方文档 https://docs.flutter.dev/ui/layout/constraints

中文文档 https://flutter.cn/docs/ui/layout/constraints

flutter中的布局和HTML是不太一样的，先看文档中的几个例子：

1. 样例1中，只是在根节点下设置`Container` 的颜色，但是却充满了整个屏幕，要知道在HTML中添加一个div是不会自动设置宽高的。但是样例2设置了宽高，依旧却没有生效。

2. 样例3、4外面套个Center或Align能正确设置`Container` 的大小。

flutter中布局约束分为2类：**严格约束 (Tight)**与**宽松约束 (loose)**，或者叫紧约束和松约束。

> 严格约束给你了一种获得确切大小的选择。换句话来说就是，它的最大/最小宽度是一致的，高度也一样。也就是传递了严格约束，你的大小就被固定了，即使你设置了也是按严格约束来显示

> 宽松 约束的最小宽度/高度为 0

了解了这两个概念，再看上面的例子：

1. 样例1和2中的`Container` 在根节点下，他受到的是紧约束，宽高必须变得和屏幕一样大，所以就算你设置了宽高也是和屏幕一样大小。

2. Center和Align这两个`Widget` 可以将接收的紧约束转为松约束传递给下级。样例3的Center和样例1、2中的`Container` 同样受到紧约束：宽高必须为屏幕尺寸，但Center却告诉子级：你的宽高可以更小，但是不能超过屏幕尺寸。这样就渲染了实际宽高的`Container` 。

   

   ```dart
   Center(
     child: Container(
       color: red,
       child: Container(color: green, width: 30, height: 30),
     ),
   )
   ```

   分析下样例7代码：假设屏幕宽高为 375 × 667，Center接收的紧约束 (375 × 667 ) ，传递给`red Container`  松约束(0-375 × 0-667 )，`red Container`将此松约束传递给`green Container`,到此约束传完了，开始绘制尺寸了，`green Container`需要30 × 30，告诉`red Container`后，因为`red Container`没有固定尺寸，所以变成和子级一样大小，也是 30 × 30。由于绿色的 `Container` 完全覆盖了红色 `Container`，所以你看不见它了。

### 布局规则

> 首先，上层 widget 向下层 widget 传递约束条件(constrainets)；
> 然后，下层 widget 向上层 widget 传递大小信息(size)。
> 最后，上层 widget 决定下层 widget 的位置。

这是样例8的代码，根据布局规则将代码绘制成了流程图

```dart
Center(
  child: Container(
    padding: const EdgeInsets.all(20),
    color: red,
    child: Container(color: green, width: 30, height: 30),
  ),
)
```

<img src="https://assets-image.oceasfe.com/public/upload/image/20231215/aa7322109b3811eeaa7125019cb587d9.png">

`red Container`因为有20padding，所以在向下传递约束时宽高就得分别减去40。

如何验证或者获取当前`Widget`的布局约束？ 当需要获取的位置使用`LayoutBuilder`

```dart
Center(
  child: Container(
    padding: const EdgeInsets.all(20),
    color: red,
    child: LayoutBuilder(builder: (BuildContext context, BoxConstraints constraints){
      print(constraints); // BoxConstraints(0.0<=w<=335.0, 0.0<=h<=627.0)
      return Container(color: green, width: 30, height: 30);
    },),
  ),
)
```

### 自定义约束：

根据flutter中的布局规则，布局约束都是自上而下传递的，如果需要自定义布局约束，可以使用`BoxConstraints`

```dart
Container(
  color: green,
  constraints: const BoxConstraints(minWidth: 100,minHeight: 100,maxWidth:200,maxHeight:200),
)
  
ConstrainedBox(
  constraints: const BoxConstraints(minWidth: 100,minHeight: 100,maxWidth:200,maxHeight:200),
  child: Widget(),
)

```





























## key

## getx

