<template>
<button class="puzzle-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="puzzle-loadingIndicator"></span>
    <slot />
</button>
</template>

<script lang="ts">
import {
    computed
} from "vue";
export default {
    props: {
        theme: {
            type: String,
            default: "button"
        },
        size: {
            type: String,
            default: "normal"
        },
        level: {
            type: String,
            default: "normal"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {
            theme,
            size,
            level
        } = props;
        const classes = computed(() => {
            return {
                [`puzzle-theme-${theme}`]: theme,
                [`puzzle-size-${size}`]: size,
                [`puzzle-level-${level}`]: level
            };
        });
        return {
            classes
        };
    }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: rgb(126, 223, 62);
$radius: 4px;
$red: red;
$grey: grey;

.puzzle-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $green;
        border-color: $green;
    }

    &:focus {
        outline: none;
    }

    //解决在Firefox下，类型为button的元素使用outline: none没用的问题
    &::-moz-focus-inner {
        border: 0;
    }

    &.puzzle-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $green;

        &:hover,
        &:focus {
            color: lighten($green, 20%);
        }
    }

    &.puzzle-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    &.puzzle-theme-shrink {
        border: 1px solid rgb(211, 207, 207);
        color: $green;

        &:hover,
        &:focus {
            color: black;
            border-radius: 40% / 70%;
            transition: border-radius 2s;
            background-color: $green;
        }
    }

    &.puzzle-theme-stretch {
        border-radius: 40% / 70%;
        background-color: $green;

        &:hover,
        &:focus {
            color: $green;
            background-color: white;
            border-color: transparent;
            transition: border 1.5s;
        }
    }

    &.puzzle-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.puzzle-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.puzzle-theme-button {
        &.puzzle-level-main {
            background: $green;
            border-color: $green;

            &:hover,
            &:focus {
                color: white;
                background: darken($green, 10%);
                border-color: darken($green, 10%);
            }
        }

        &.puzzle-level-danger {
            background: $red;
            border-color: $red;
            font-weight: 700;
            color: white;

            &:hover,
            &:focus {
                color: black;
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }

    &.puzzle-theme-link {
        &.puzzle-level-danger {
            color: $red;
            font-weight: 700;

            &:hover,
            &:focus {
                color: darken($red, 80%);
                background: $red;
            }
        }
    }

    &.puzzle-theme-text {
        &.puzzle-level-main {
            color: $green;

            &:hover,
            &:focus {
                color: darken($green, 10%);
            }
        }

        &.puzzle-level-danger {
            color: $red;
            font-weight: 700;

            &:hover,
            &:focus {
                color: white;
                background: $red;
            }
        }
    }

    &.puzzle-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $grey;
            }
        }
    }

    &.puzzle-theme-link,
    &.puzzle-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }

    >.puzzle-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $green $green $green transparent;
        border-style: solid;
        border-width: 2px;
        animation: puzzle-spin 1s infinite linear;
    }
}

@keyframes puzzle-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
