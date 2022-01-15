<template>
  <div class="grid grid-cols-2 p-2 bg-gray-900">
            <router-link to="/" class="text-center text-gray-300 hover:bg-gray-700 hover:text-white mx-5 px-3 py-2 rounded-md text-xl font-medium" >Profile</router-link>

            <router-link to="/contact" class="text-center text-gray-300 hover:bg-gray-700 hover:text-white  mx-5 px-3 py-2 rounded-md text-xl font-medium">Contact</router-link>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
