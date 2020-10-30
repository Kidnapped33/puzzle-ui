<template>
<div>
    <button @click="toggle" :class="{ checked: checked }"><span></span></button>
</div>
</template>

<script lang="ts">
import {
    ref
} from "vue";
export default {
    setup() {
        const checked = ref(false);
        const toggle = () => {
            checked.value = !checked.value;
        };
        return {
            checked,
            toggle
        };
    }
};
</script>

<style lang="scss" scoped>
$h: 22px;

button {
    height: $h;
    width: $h * 2;
    border: none;
    background: gray;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
}

span {
    position: absolute;
    height: $h;
    width: $h;
    background: white;
    left: 0px;
    top: 0px;
    border-radius: $h/2;
    // transition: all 1s linear;
    transition: left 250ms;
}

button.checked {
    background: rgb(36, 173, 243);
}

button.checked>span {
    position: absolute;
    left: $h;
}

button:focus {
    outline: none;
}
</style>
