<template>
<div>
    <Topnav />
    <div class="content">
        <aside>
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
export default {
    components: {
        Topnav
    }
};
</script>

<style lang="scss" scoped>
aside {
    background: #e4dddd;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;

    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }
}
</style>
