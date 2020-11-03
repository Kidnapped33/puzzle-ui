<template>
<button class="puzzle-swith" @click="toggle" :class="{ 'puzzle-checked': value }">
    <span></span>
</button>
</template>

<script lang="ts">
import {
    ref
} from "vue";
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        // const checked = ref(false);
        const toggle = () => {
            context.emit("update:value", !props.value);
        };
        return {
            toggle
        };
    }
};
</script>

<style lang="scss">
$h: 22px;

.puzzle-swith {
    height: $h;
    width: $h * 2;
    border: none;
    background: gray;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;

    >span {
        position: absolute;
        height: $h;
        width: $h;
        background: white;
        left: 0px;
        top: 0px;
        border-radius: $h/2;
        transition: left 250ms;
    }

    &.puzzle-checked {
        background: rgb(128, 214, 70);

        >span {
            position: absolute;
            left: $h;
        }
    }

    &:focus {
        outline: none;
    }
}
</style>
