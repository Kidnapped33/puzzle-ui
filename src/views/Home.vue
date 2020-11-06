<template>
<div>
    <div class="topnavAndBanner">
        <Topnav />
        <div class="banner">
            <h1>拼图 UI</h1>
            <h2>一个实用的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com/Kidnapped33" target="_blank"> GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg>
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于 TypeScript</h3>
                <p>源代码采用 TypeScript 书写</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
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
$lightgreen: rgb(113, 100, 81);
$border-radius: 4px;
$color: rgb(113, 100, 81);

.topnavAndBanner {
    background-color: rgb(250, 238, 214);
    // background: linear-gradient(145deg,
    //         rgba(227, 255, 253, 1) 0%,
    //         rgba(183, 233, 230, 1) 100%);
    // background: linear-gradient(145deg,
    //         rgba(197, 220, 192, 1) 0%,
    //         rgba(45, 97, 59, 1) 100%);

    // background: linear-gradient(101deg,
    //         rgba(113, 135, 185, 1) 57%,
    //         rgba(74, 95, 160, 1) 93%,
    //         rgba(85, 104, 169, 1) 98%,
    //         rgba(53, 72, 151, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
    margin: 64px auto;
    padding: 0 16px;

    @media (min-width: 800px) {
        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width: 1200px) {
        width: 1200px;

        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 380px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text;
            }
        }
    }
}

.banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: rgb(113, 100, 81);
            color: white;
            display: inline-block;
            border-radius: $border-radius;
            padding: 8px 24px;

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>
