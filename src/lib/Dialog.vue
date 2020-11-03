<template>
<div>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header></header>
        <main>
            <p>第一行字</p>
            <p>第二行字</p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</div>
</template>

<script>
import Button from "./Button.vue";
export default {
    components: {
        Button
    }
};
</script>
