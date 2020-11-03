<template>
<div>
    <div>
        Dialog
    </div>
    <h1>示例1</h1>
    <Button @click="toggle">切换</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <div>nihao 1</div>
            <div>nihao 2</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
</div>
</template>

    </Dialog>
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
        const f1 = () => {
            console.log(1);
        };
        const f2 = () => {
            console.log(2);
        };
        return {
            x,
            toggle,
            f1,
            f2
        };
    }
};
</script>
