<template>
<div>Tabs 示例</div>
<Demo :component="Tab1Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tab1Demo from "./Tabs1.demo.vue";

import {
    ref
} from "vue";
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Tab1Demo
        };
    }
};
</script>
