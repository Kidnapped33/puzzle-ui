<template>
<div>
    导航栏|
    <router-link to="/">Ashine</router-link>
    |
    <router-link to="/xxx">Ashine2</router-link>
</div>

<hr />
<router-view />
</template>

<script>
export default {
    name: "App"
};
</script>
