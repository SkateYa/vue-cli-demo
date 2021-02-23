<template>
  <div class="about">
    <div v-for="item in list" :key="item.id">
      <router-link :to="`/name/${item.path}`">{{item.name}}</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          name:'a页面',
          id:1,
          path:'a'
        },
        {
          name:'b页面',
          id:2,
          path:'b'
        },
        {
          name:'c页面',
          id:3,
          path:'c'
        }
      ]
    }
  }
}
</script>
