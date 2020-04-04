<template>
    <el-row class="tac">
        <el-col>
            <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <router-link to="/home/search">
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">订单查询</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/home/add">
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">新增订单</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/home/users">
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                </router-link>

                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">暂无设置</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "LeftMenu",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>