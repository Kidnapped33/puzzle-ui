# Puzzle UI for Vue 3

这是一个基于 Vue3 / TypeScript / Scss 开发的UI库，涵盖了 Button、Switch ... 等常见 UI 组件。

此组件库支持使用 Vue2 及 Vue3 写法。

预览地址：http://ashine33.gitee.io/puzzle-ui/

## 开发者
陈晓珊 （Ashine）

## 注意事项
 Puzzle UI 是个人学习过程中造出来的UI库，如果你在使用过程中发现问题，非常感谢你提出宝贵意见。
#### PS：目前项目属于开发中，暂不建议在生产项目中使用。

## 安装 Puzzle UI 

在项目中，使用终端执行以下命令

```
npm install puzzle-ui
```
或
```
yarn add puzzle-ui
```
## 引入
```
import {Button, Tab, Tabs, Switch, Dialog, openDialog} from "puzzle-ui"
import "puzzle-ui/dist/lib/puzzle.css"

```

## 示例
```
<template>
  <Button>按钮</Button>
</template>
<script>
  import {Button, Tabs, Tab, Switch, Dialog. openDialog} from "puzzle-ui";
  export default {
    components: {Button, Tabs, Tab, Switch, Dialog. openDialog}
  }
</script>
```
