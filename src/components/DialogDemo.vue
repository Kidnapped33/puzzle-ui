<template>
<div>
    <div>
        Dialog
    </div>
    <h1>示例1</h1>
    <Button @click="toggle">切换</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <div>修改1</div>
            <div>修改2</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
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
import {
    openDialog
} from "../lib/openDialog.ts";

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
            return false;
        };
        const f2 = () => {
            return false;
        };
        const showDialog = () => {
            openDialog({
                title: "标题",
                content: "你好",
                ok() {
                    console.log("ok");
                },
                cancel() {
                    console.log("cancel");
                }
            });
        };
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog
        };
    }
};
</script>
