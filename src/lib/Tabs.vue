<template>
<div class="puzzle-tabs">
    <div class="puzzle-tabs-nav">
        <div class="puzzle-tabs-nav-item" v-for="(t, index) in titles" :ref="
          el => {
            if (el) navItems[index] = el;
          }
        " @click="select(t)" :class="{ selected: t === selected }" :key="index">
            {{ t }}
        </div>
        <div class="puzzle-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="puzzle-tabs-content">
        <component class="puzzle-tabs-content-item" :class="{ selected: c.props.title === selected }" v-for="(c, index) in defaults" :is="c" :key="index" />
    </div>
</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {
    computed,
    ref,
    onMounted
} from "vue";

export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        const navItems = ref < HTMLDivElement[] > ([]);
        const indicator = ref < HTMLDivElement > (null);
        onMounted(() => {
            const divs = navItems.value;
            const result = divs.filter(div => div.classList.contains("selected"))[0];
            console.log(result);
            const {
                width
            } = result.getBoundingClientRect();
            indicator.value.style.width = width + "px";
        });
        //setup 的第二个参数得到类型
        const defaults = context.slots.default();
        defaults.forEach(tag => {
            if (tag.type !== Tab) {
                throw new Error("Tab 的子标签必须是 Tab");
            }
        });
        const current = computed(() => {
            return defaults.find(tag => {
                return tag.props.title === props.selected;
            });
        });
        //获取 titles 导航1/2
        const titles = defaults.map(tag => {
            return tag.props.title;
        });
        const select = (title: string) => {
            context.emit("update:selected", title);
        };
        return {
            defaults,
            titles,
            current,
            select,
            navItems,
            indicator
        };
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
        position: relative;

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

        &-indicator {
            position: absolute;
            height: 3px;
            background: $green;
            left: 0;
            bottom: -1px;
            width: 100px;
        }
    }

    &-content {
        padding: 8px 0;

        &-item {
            display: none;

            &.selected {
                display: block;
            }
        }
    }
}
</style>
