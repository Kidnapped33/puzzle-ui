<template>
    <div>
        <div v-for="(t,index)in titles" :key="index">{{t}}</div>
        <component v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
</template>
<script lang="ts">
    import Tab from './Tab.vue';

    export default {
        setup(props, context) {
            //setup 的第二个参数得到类型
            const defaults = context.slots.default();
            defaults.forEach((tag) => {
                if (defaults[0].type !== Tab) {
                    throw new Error('Tab 的子标签必须是 Tab');
                }
            });
            //获取 titles 导航1/2
            const titles = defaults.map((tag) => {return tag.props.title;});
            return {defaults, titles};
        }
    };

</script>