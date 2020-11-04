<template>
    <div>tabs
        <component :is="defaults[0]"/>
        <component :is="defaults[1]"/>
    </div>
</template>
<script lang="ts">
    import Tab from './Tab.vue';

    export default {
        setup(props, context) {
            const defaults = context.slots.default();
            defaults.forEach((tag) => {
                    if (defaults[0].type !== Tab) {
                        throw new Error('Tab 的子标签必须是 Tab');
                    }
                }
            );
            return {defaults};
        }
    }

</script>