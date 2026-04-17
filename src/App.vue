<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './layouts/Navbar.vue'
import Sidebar from './layouts/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>