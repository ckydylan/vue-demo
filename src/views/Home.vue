<template>
    <div id="home">
        <p class="title">订单管理</p>
        <div>
            <div class="left">
                <LeftMenu/>
            </div>
            <div class="right">
                <router-view/>
            </div>
        </div>
        <div class="footer">footer</div>
    </div>
</template>


<script>
    import LeftMenu from "./LeftMenu";

    export default {
        components: {
            LeftMenu
        }
    }
</script>

<style>


    .title {
        width: 100%;
        height: 40px;
        background: #6e6d6d;
        color: #ffffff;
        font-size: 20px;
        padding-left: 20px;
        line-height: 40px;
        text-align: center;
    }

    .left {
        width: 13%;
        float: left;
        height: 750px;
        background: #545c64;
    }

    .right {
        width: 75%;
        float: left;
        margin-left: 30px;
    }

    .footer {
        width: 100%;
        height: 40px;
        background: #6e6d6d;
        color: #ffffff;
        font-size: 20px;
        padding-left: 20px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        bottom: 0;
    }


</style>