<template>
  <div class="bg-black p-5 text-white">
    <div class="grid grid-cols-2 text-center">
      <div class="text-xs">Created By Thanasap Leelapisuth</div>
      <div>
        <router-link to="/" class="hover:bg-gray-900 px-3 py-2 rounded-md mx-10"
          >Profile</router-link
        >
        <router-link
          to="/contact"
          class="hover:bg-gray-900 px-3 py-2 rounded-md mx-10"
          >Contact</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
