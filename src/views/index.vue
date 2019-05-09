<template>
    <div class='wrapper'>
        <div class="">计数器：{{ number }}</div>
        <div class="btn-box">
            <button class="btn" @click="handleAddBtnClick">+</button>
            <button class="btn" @click="handleMinusBtnClick">-</button>
        </div>
        <div class="btn-box">
            <button class="btn" @click="handleRemoveListenerBtnClick">取消打印监听</button>
        </div>
    </div>
</template>

<script>
    import { add , minus } from '../actions/counter'
	export default {
        data(){
        	return{
        		number : this.$store.getState().counter.count ,
                consoleHandler : null
            }
        },
        methods : {
        	//计数器加一
			handleAddBtnClick(){
                this.$store.dispatch(add())
            },
            //计数器减一
			handleMinusBtnClick(){
				this.$store.dispatch(minus())
            },
            //取消打印事件监听
			handleRemoveListenerBtnClick(){
                this.consoleHandler();
            }
        },
        mounted () {
        	//数据更新事件
            this.$store.subscribe(()=>{
				this.number = this.$store.getState().counter.count;
			})
            //打印事件
            this.consoleHandler = this.$store.subscribe(()=>{
            	console.log('我的值发生了更改~')
            })
		}
	}
</script>

<style scoped>
    .wrapper{
        padding: 30px 15px;
        text-align: center;
    }
    .btn-box{
        margin-top: 20px;
    }
    .btn{
        display: inline-block;
        font-size: 20px;
        min-width: 50px;
        text-align: center;
        margin: 0 10px;
    }
</style>
