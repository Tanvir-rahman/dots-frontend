<template>
<el-container direction="vertical">
  <Navbar />
  <el-main>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </el-main>
</el-container>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'Main',
  components: { Navbar }
}
</script>

<style scoped>

</style>
