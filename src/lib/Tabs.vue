<template>
    <div class="puzzle-tabs">
        <div class="puzzle-tabs-nav">
            <div class="puzzle-tabs-nav-item"
                 v-for="(t,index) in titles" :key="index">{{t}}
            </div>
        </div>
        <div class="puzzle-tabs-content">
            <component class="puzzle-tabs-content-item"
                       v-for="(c,index) in defaults" :is="c" :key="index"/>
        </div>
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
<style lang="scss">
    $green: rgb(126, 223, 62);
    $color: #333;
    $border-color: #d9d9d9;
    .puzzle-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;

            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $green;
                }
            }
        }

        &-content {
            padding: 8px 0;
        }
    }
</style>