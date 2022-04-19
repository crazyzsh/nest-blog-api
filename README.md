

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 1. params、query、body三者使用场景

### 1.1 body

多数运用于post、put请求

```js
axios.post('/giraffe', {
  key1: 'value1',
  key2: 'value2'
})
```

示例：

```js
app.get('/giraffe', (req, res) => {
 console.log(req.body.key1) //value1
 console.log(req.body.key2) //value2
})
```



### 1.2 params

多用于带参数的请求

```
GET  http://localhost:3000/giraffe/1
```

示例：

```js
app.get('/giraffe/:number', (req, res) => {
  console.log(req.params.number)
 })
```



### 1.3 query

多用于get请求（普通携带参数）

```
GET  http://localhost:3000/animals?page=10
```

示例：

```js
 app.get('/animals', ()=>{
   console.log(req.query.page) // 10
  })
```



# 基本使用

1. `nest g mo 模块名 `：创建模块名。此时将在src目录下创建一个以模块名为名称的文件夹，同时在文件夹下生成一个`模块名.module.ts`文件。

2. `nest g co 控制器名`：创建控制器。此时将在src目录下后续路由都是以“控制器名称为前缀”，后续的路由就可以以模块化的方式进行书写了，即在`controller.ts`文件中进行书写

ps：上述两步只有在模块名和控制器名**相同**时才会才会将`TS`文件放置于**同一个文件夹下**，否则将以模块名或者控制器名分别创建文件夹。

