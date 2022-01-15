<template>
  <div>
    <div class="bg-white lg:mx-40 mx-16">
      <img
        :src="profile.img"
        class="lg:h-1/2 h-80 w-full filter object-cover object-top mx-auto"
      />
      <p class="mt-3 mx-5 p-3 bg-gray-900 rounded text-white w-24">
        My Profile
      </p>
      <div class="flex flex-wrap py-5">
        <div class="w-1/2 px-5 border-r-2">
          <p class="font-bold">
            {{ profile.firstName }} {{ profile.lastName }}
          </p>
          <p class="text-xs">{{ profile.age }} years old</p>
          <p class="font-bold text-lg mt-5">Education:</p>
          <hr class="w-2/3" />
          <div v-for="edu in profile.education" :key="edu.id">
            <p class="mt-5">
              <span class="font-semibold">{{ edu.title }}</span> -
              {{ edu.name }} since
              <span class="font-semibold">{{ edu.year }}</span>
            </p>
          </div>
        </div>
        <div class="w-1/2 px-5">
          <span class="font-bold text-lg">Skills:</span>
          <hr class="w-2/3" />
          <div v-for="me in profile.skill" :key="me.id" class="mt-3">
            <ul>
              <li>
                <span class="font-bold"
                  ><i class="fas fa-circle text-xs mr-2"></i
                  >{{ me.title }}</span
                >
                <ul v-for="list in me.list" :key="list.id">
                  <li class="ml-5 text-sm">
                    <i class="far fa-circle text-xs mr-2"></i>{{ list.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      profile: {
        firstName: 'Thanasap',
        lastName: 'Leelapisuth',
        age: 21,
        skill: [
          {
            id: 1,
            title: 'Front End',
            list: [
              { id: 1, name: 'HTML, CSS, Basic jQuery' },
              { id: 2, name: 'Framework: Vue.js, Tailwind CSS' },
            ],
          },
          {
            id: 2,
            title: 'Database',
            list: [
              {
                id: 1,
                name: 'MySQL',
              },
              { id: 2, name: 'Oracle' },
            ],
          },
          {
            id: 3,
            title: 'Design',
            list: [{ id: 1, name: 'Figma' }],
          },
          { id: 4, title: 'Basic Github' },
        ],
        education: [
          {
            id: 1,
            title: 'High-School',
            name: 'Assumption College Thonburi',
            year: '2016-2018',
          },
          {
            id: 2,
            title: 'Bachelor Degree',
            name: 'School of Information Technology, KMUTT',
            year: '2019 until now',
          },
        ],
        img: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/117915197_3807885902561800_990192486094164964_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFlQBDE-Gk8rxCibdwmnsQES9gxFap6ky1L2DEVqnqTLdPhSXPz36nDsZCREUjcaBvjvmws-Alf-zoYQCDDSPsX&_nc_ohc=9JA03GgyBf8AX810hsN&_nc_ht=scontent.fbkk28-1.fna&oh=00_AT91tMqLEFA3Yx_fiDu__maL1nsiNVonPygxc_9QYizu5w&oe=62092A1B',
      },
    };
  },
};
</script>
