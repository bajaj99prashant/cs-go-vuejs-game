<template>
  <div class="home">
    <div class="bg-overlay">
      <div class="content">
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <button @click="validate">Submit</button>
        <div v-if="show"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      show: false,
      username: null,
      password: null
    }
  },
  methods: {
    validate() {
      if(this.username == 'terrorist'){
        this.$router.push({ name: 'Terrorist' })
      }
      else if(this.username == 'soldier'){
        this.$router.push({ name: 'Soldier' })
      }
    }
  }
};
</script>
