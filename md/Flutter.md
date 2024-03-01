# Flutter

## 安装
brew install --cask flutter

brew install --cask android-sdk

flutter doctor -v

brew services start mysql

## StatefulBuilder
```js
StatefulBuilder(
    builder: (BuildContext context, StateSetter setState) {
      return Checkbox(value: hideHotModal, onChanged: (value){
         setState((){
          hideHotModal=!hideHotModal;
         }); 
        });
},
),
```

### GetView

```js
 class AwesomeController extends GetxController {
   final String title = 'My Awesome View';
 }

  // 一定要记住传递你用来注册控制器的`Type`!
 class AwesomeView extends GetView<AwesomeController> {
   @override
   Widget build(BuildContext context) {
     return Container(
       padding: EdgeInsets.all(20),
       child: Text( controller.title ), // 只需调用 "controller.something"。
     );
   }
 }
 
```





# dart

```da
int.parse
.floor()
~/
DateTime.now()
mapEntry
```

## MapEntry

> 在 Dart 中，`Map.fromEntries` 是一个方便创建 `Map` 对象的方法，它接受一个包含 `MapEntry` 对象的可迭代对象，并将其转换为 `Map`。
>
> `MapEntry` 类表示一个键值对，用于创建一个 `Map` 中的一项。该类有两个属性：`key` 和 `value`，分别表示键和对应的值。
>
> 在你的代码片段中，`List.generate` 生成了包含 `MapEntry` 对象的列表。对于每个循环迭代，都会创建一个 `MapEntry` 对象，其中键是 `i.toString().padLeft(2, '0')`，值是 `codeArr.contains(i)`。然后，`Map.fromEntries` 将这个列表转换为一个 `Map` 对象，其中包含了所有生成的键值对。
>
> 简而言之，`Map.fromEntries` 将一组 `MapEntry` 对象转化为一个 `Map` 对象，这在构建 `Map` 时非常方便。

```dar
var res = Map.fromEntries(List.generate(50, (i) {
var key = i.toString().padLeft(2, '0');
	return MapEntry(key, codeArr.contains(i));
}));
```











```js
光标：option/alt
选中所有：command + shift + L
光标一次向下：command + alt + 上/下

先定一个地方 shift + alt 再点一个地方，每行都有光标

*** command/ctrl + alt + 上/下 设置光标

*** 如果已经有一个选区，我们可以使用快捷键 ⌥+⇧+I/shift+alt+i 来在选区的所有行尾添加光标

选中当前行： command + shift + >
888 智能选择： shift + win + >     ^+⇧+→：扩大选中范围

 
*** 折叠代码：Cmd + K -> Release -> Cmd + L
```

//





Vue 数据响应式更新



## Flutter局部刷新

setState会刷新整个页面**flutter刷新机制**，在只需要刷新部分组件**flutter刷新机制**的时候可以用StatefulBuilder

先给需要局部刷新的组件创建一个StateSetter

需要刷新的组件用StatefulBuilder包裹**flutter刷新机制**，绑定_stateSetter

diff : key globalKey



GetBuilder + update(id)  局部刷新
