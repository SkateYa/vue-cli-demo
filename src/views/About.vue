<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item in list" :key="item.id">
      <router-link :to="`/home?id=${item.id}&name=${item.name}`">{{item.name}}</router-link>
    </div>

     <div>
      <router-link :to="`/info/99/苹果`">动态路由</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          name:'apple',
          id:1
        },
        {
          name:'orange',
          id:2
        },
        {
          name:'pear',
          id:3
        }
      ]
    }
  }
}
</script>
