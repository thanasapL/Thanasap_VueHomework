<template>
  <div>
    <div class="bg-white lg:mx-40 mx-16">
      <div class="text-center relative text-white">
        <img
          :src="img"
          class="filter brightness-50 w-full h-full object-top object-cover"
        />
        <div
          class="
            absolute
            transform
            flex flex-col
            items-center
            w-full
            top-1/2
            -translate-y-1/2
            h-auto
          "
        >
          <h2 class="font-bold text-2xl">Contact</h2>
        </div>
      </div>
      <div v-for="contact in contact" :key="contact.index" class="p-5">
        <i :class="contact.icon"></i> {{ contact.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      img: 'https://wallpaperaccess.com/full/5331828.jpg',
      contact: [
        { icon: 'fab fa-github mr-2 text-xl', text: 'github.com/thanasapL' },
        {
          icon: 'fas fa-envelope-square mr-2 text-xl',
          text: 'thanasap.lee@outlook.com',
        },
        { icon: 'fas fa-phone-square-alt mr-2 text-xl', text: '094-895-9895' },
        {
          icon: 'fab fa-linkedin mr-2 text-xl',
          text: 'www.linkedin.com/in/chian-l',
        },
      ],
    };
  },
};
</script>
