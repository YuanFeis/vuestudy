<template>
    <div>
     <h1>{{mes}}</h1>
     <br>
     <button @click="getnews()">得到新闻</button>
        <button @click="cleannews()">清除数据</button>

     <ul>
         <li v-for="(item,key) in list">
          {{item.title}}

         </li>
     </ul>
    </div>

</template>
<script>

export default {
    data(){
        return{
            mes : "新闻页面",
            list:[],

        }
    },methods:{
        getnews(){
            var api ='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            this.$http.get(api).then(response =>{
                console.log(response)
                this.list = response.body.result;
                // this.news = response.body;
                },response =>{
                console.log();
                }

            )
        },cleannews(){
            this.list=''
        }
    },mounted() {
        this.getnews()
    }
}
</script>
<style>

</style>
