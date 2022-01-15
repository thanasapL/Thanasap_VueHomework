<template>
  <!-- No responsive -->
  <Navbar />
  <router-view class="bg-gray-500 h-full"></router-view>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>
