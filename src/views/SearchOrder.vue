<template>
    <div class="search">
        品牌：<input type="text" ref="name1">&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary"
                                                                          @click="search">
        查询
    </button>
        <hr style="background-color:#4192ff;height: 1px;border: none;"/>

        <div>
            <table class="table  table-striped">
                <thead>
                <tr>
                    <th>品牌</th>
                    <th>订单日期</th>
                    <th>订单价格</th>
                    <th>购买数量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody :key="item.id" v-for="(item) in orders">
                <tr>
                    <td>{{item.name}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.price}}元</td>
                    <td>
                        <button type="button" class="btn btn-default" @click="sub(item.id)">-</button>
                        <a v-text="item.num"></a>
                        <button type="button" class="btn btn-default" @click="add(item.id)">+</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-info" @click="remove(item.id)">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="all_money">订单总额：{{countAllMoney}}元</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchOrder",
        data() {
            return {
                orders: [],
                searchOrder: [],
                oldOrder: [],
                flag: true
            }
        },
        methods: {
            add(id) {
                let index = this.orders.findIndex(item => {
                    return item.id === id;
                })
                this.orders[index].num++;
                let data = {
                              "id": id,
                              "name": this.orders[index].name,
                              "time": this.orders[index].time,
                              "price": this.orders[index].price,
                              "num": this.orders[index].num
                            };
                this.$axios.post("http://localhost:8080/message/update", data
                ).then(ret => {
                    console.log(ret.data)
                })
            },
            sub(id) {
                let index = this.orders.findIndex(item => {
                    return item.id === id;
                })

                if (this.orders[index].num > 0) this.orders[index].num--;
                let data = {
                    "id": id,
                    "name": this.orders[index].name,
                    "time": this.orders[index].time,
                    "price": this.orders[index].price,
                    "num": this.orders[index].num
                };
                this.$axios.post("http://localhost:8080/message/update", data
                ).then(ret => {
                    console.log(ret.data)
                })
            },
            remove(id) {
                let index = this.orders.findIndex(item => {
                    return item.id === id;
                })
                this.orders.splice(index, 1);
                this.oldOrder = this.orders;
                this.$axios.delete("http://localhost:8080/orders/delete/"+id)
                    .then(ret =>{
                        console.log(ret.data)
                    })


            },
            search() {//什么都不输出时查询为所有
                let temp = true;
                if (this.flag) {
                    this.$axios.get("http://localhost:8080/orders/findAll")
                        .then(ret => {
                            this.orders = ret.data;
                        })
                    this.flag = false;
                }

                let name = this.$refs.name1.value;
                if (name.length === 0) {
                    this.orders = this.oldOrder;
                } else {
                    this.searchOrder = [];
                    for (let i in this.orders) {
                        let n = this.orders[i].name;
                        if (name === n) {
                            this.searchOrder.push(this.orders[i]);
                        }else {
                            if (temp){
                                this.insertDefault();
                                temp=false;
                            }
                        }
                    }
                    this.orders = this.searchOrder;
                }
            },
            insertDefault() {
                this.$message.error('对不起，查询失败');
            }
        },
        computed: {
            countAllMoney() {
                let allMoney = 0;
                for (let i in this.orders) {
                    let num = this.orders[i].num;
                    let price = this.orders[i].price;
                    allMoney += num * price;
                }
                return allMoney;
            }
        }
    }
</script>

<style scoped>
    .search {
        text-align: center;
    }
</style>