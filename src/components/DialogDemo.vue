<template>
  <div>
    <div>
      Dialog
    </div>
    <h1>示例1</h1>
    <Button @click="toggle">切换</Button>
    <Dialog :visible="x"></Dialog>
  </div>
</template lang="ts">

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
    ref
} from "vue";

export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        return {
            x,
            toggle
        };
    }
};
</script>
