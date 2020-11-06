<template>
<div>
    <h1>常规使用</h1>
    <div>
        <Button theme="text">开始</Button>
        <Button theme="link">开始</Button>
        <Button>开始</Button>
        <Button theme="shrink">开始</Button>
        <Button theme="stretch">开始</Button>
    </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: {
        Button
    }
};
</script>
