<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <b>{{ food }}</b>
    <button @click="handleClick">返回上一页</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    next()
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('您确定要离开么')
    if (leave) next()
    else next(false) // 阻止跳转
  },
  methods: {
    handleClick () {
      this.$router.back()
    }
  }
}
</script>
