<template>
<h1>Tabs 示例</h1>
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
