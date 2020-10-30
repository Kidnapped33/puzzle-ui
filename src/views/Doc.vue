<template>
<div>
    <Topnav />
    <div class="content">
        <aside v-if="asideVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <routerlin to="/doc/switch">Switch 组件</routerlin>
                </li>
                <li>
                    <routerlin to="/doc/button">Button 组件</routerlin>
                </li>
                <li>
                    <routerlin to="/doc/dialog">Dialog 组件</routerlin>
                </li>
                <li>
                    <routerlin to="/doc/tabs">Tabs 组件</routerlin>
                </li>
            </ol>
        </aside>
        <main>主内容</main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
    inject,
    Ref
} from "vue";
export default {
    components: {
        Topnav
    },
    setup() {
        const asideVisible = inject < Ref < boolean >> ("asideVisible");
        return {
            asideVisible
        };
    }
};
</script>

<style lang="scss" scoped>
aside {
    background: #e4dddd;
    width: 150px;
    padding: 16px;

    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }

    @media (max-width: 500px) {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
    }
}
</style>
