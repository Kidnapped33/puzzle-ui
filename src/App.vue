<template>
<div>
    导航栏|
    <router-link to="/">首页</router-link>
    |
    <router-link to="/doc">导航页</router-link>
</div>

<hr />
<router-view />
</template>

<script lang="ts">
export default {
    name: "App"
};
</script>
