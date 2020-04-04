<template>
    <div id="app">
        <router-link to="/home"></router-link>
        <router-view/>

    </div>
</template>

<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>