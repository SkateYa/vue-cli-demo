<template>
  <div class="home">info页面的id为{{ id }},名称为{{ name }}</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      id: "",
      name: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    console.log(this.$route.params);
  },
  // components: {
  //   HelloWorld
  // }
};
</script>
