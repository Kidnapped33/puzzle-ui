<template>
<div>
    <div>button</div>
    <h1>示例1</h1>
    <div>
        <Button>我是按钮</Button>
        <Button theme="button">我是按钮</Button>
        <Button theme="link">我是按钮</Button>
        <Button theme="text">我是按钮</Button>
    </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log("hello");
        };
        return {
            onClick
        };
    }
};
</script>
