# Puzzle UI for Vue 3

这是一个基于 Vue3 / TypeScript / Scss 开发的UI库，涵盖了 Button、Switch ... 等常见 UI 组件。

此组件库支持使用 Vue2 及 Vue3 写法。

预览地址：http://ashine33.gitee.io/puzzle-ui/

## 安装

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
