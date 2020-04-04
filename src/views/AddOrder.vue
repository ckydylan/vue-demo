<template>
    <div>
        <a style="font-size: 30px;color: #000000">新增订单</a><br/>
        <p class="word">品牌</p>
        <input class="col-md-12" type="text" placeholder="例如：笔记本，手机" ref="name">
        <p class="word">价格</p>
        <input class="col-md-12" type="text" placeholder="例如：50" ref="price">
        <p class="word">数量</p>
        <input class="col-md-12" type="text" placeholder="例如：3" ref="num">
        <button type="button" class="btn btn-primary" style="margin-top: 30px" @click="addOrder">
            提交
        </button>
    </div>
</template>

<script>
    export default {
        name: "AddOrder",
        methods:{
            getTime() {//获得时间
                let date = new Date();
                let yy = date.getFullYear();
                let mm = date.getMonth() + 1;
                let dd = date.getDate();
                let hh = date.getHours();
                let mf = date.getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
                let ss = date.getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                return yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
            },
            addOrder() {
                let name = this.$refs.name.value;
                let price = parseInt(this.$refs.price.value);
                let num = this.$refs.num.value;
                if (name.length<1 || price.length<1 || num .length<1){
                    this.insertDefault();
                    return;
                }

                let data = {
                    "name": name,
                    "time": this.getTime(),
                    "price": price,
                    "num": num
                };

                this.$axios.post("http://localhost:8080/orders/insert", data
                ).then(ret => {
                    if (ret.data === 1){
                        this.insertSuccess();

                    }
                })
            },
            insertSuccess() {
                this.$message({
                    message: '恭喜你，添加成功',
                    type: 'success'
                });
            },
            insertDefault() {
                this.$message.error('对不起，添加失败');
            }
        }
    }
</script>

<style scoped>

</style>