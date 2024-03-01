# mysql



## 安装

> https://cloud.tencent.com/developer/article/1868895

1. brew install mysql
2. mysql.server start    brew service start mysql 二选一启动
3. mysql_secure_installation  设置密码
4. mysql -uroot -p



nest连mysql

> https://www.lpya.cn/detail/33

## 事务

- 脏读
- 不可重复读
- 可重复读
- 串行化

## 不可重复读

不可重复读指在事务中多次读取的数据出现不一致的情况，我们希望读取的数据在本事务中是一致的。

- 事务 A 在执行过程中更新数据，事务 B 同时读取的数据没有脏数据。
- 但当事务 A 提交了事务后，事务 B 再读取时得到了最新的数据，这种情况为不可重复读。
- 所以要保证事务过程中的数据重复操作是一致的，不受其他事务影响，即避免不可重复读的产生。

为了演示效果将隔离级别设置为低级别 `read committed`。

1. 事务 A 执行以下代码，但没有提交

```mysql
set session transaction isolation level READ COMMITTED;
BEGIN;
UPDATE stu SET sname = 'xx' WHERE id=1;
```

2. 事务B不会读到脏数据

```mysql
BEGIN;
SELECT * FROM stu;
```

3. 事务A提交  commit

4. 此时事务 B 可以读取到事务 A 提交的数据，这就是不能重复读取到同一个数据，即事务 B 读取结果受事务 A 影响。

### 幻读

1. 事务A查询2条

```mysql
begin;
SELECT * FROM commodity; // 2条
```

2. 事务 B 执行添加

```mysql
begin;
insert into commodity (id,price,count) values(3,22,20);
commit;
```

3. 事务A执行更新，却更新了3条数据，出现幻觉

```mysql
UPDATE commodity SET count=count+1;
```

4. 切换隔离级别为 **SERIALIZABLE** 后，在事务 A 没有提交时，事务 B 是不能插入数据的（表现形式为等待)

```mysql
set session transaction isolation level SERIALIZABLE;

select @@global.transaction_isolation,@@transaction_isolation;
```

### 区别

**幻读：一个事务读取了另一个事务插入的新纪录。** **不可重复读：在同一个事务中，多次读取同一数据返回的结果有所不同**。

**不可重复读是读异常，但幻读则是写异常**。

不可重复读是读异常的意思是，如果你不多select几次，你是发现不了你曾经select过的数据行已经被其他人update过了。**避免不可重复读主要靠一致性快照**。

幻读是写异常的意思是，如果不自己insert一下，你是发现不了其他人已经偷偷insert过相同的数据了。**解决幻读主要靠间隙锁**。



# nest.js

## 内置验证

> pnpm add class-transformer class-validator

在main.ts中加入 ` app.useGlobalPipes(new ValidationPipe());`



## swagger

> https://docs.nestjs.com/openapi/introduction



## module

> https://docs.nestjs.com/modules#providers-and-exports

providers:将由 Nest 注入器实例化的可选提供程序列表, 并且至少可以在该模块中共享。

export   该模块提供的提供者子集的可选列表  并且应该在导入该模块的其他模块中可用。

import * 导出提供者的导入模块的可选列表 本模块必需。

### 模块之间引用

user模块引用auth模块

exports: [AuthService]

Imports:[AuthModule]