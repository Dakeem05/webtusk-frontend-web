<script setup>
   import { ref } from "vue";
   import NavBar from '../components/common-components/NavBar.vue';

    const isopen = ref(false);

  const isclose = ref(false);

  const isNavBarOpen = (value) => {
    isopen.value = value
    isclose.value = false
  }

  const isNavBarClose = (value) => {
    isclose.value = value
    isopen.value = false
  }
</script>

<template>
 <aside>
        <nav-bar @openBar="isNavBarOpen" @closeBar='isNavBarClose'/>
    </aside>
  <section :class="[{' opacity-50 lg:opacity-100' : isopen === true, 'opacity-100' : isclose === false }]" class="w-screen h-[100vh] ">
    <aside class="c xs:text-2xl text-lg md:text-5xl flex flex-col gap-3">

      <span class="text-[red]">

      404
      </span>
      <span>
      page not found 😒

      </span>
      <span>
        Go back to the <router-link to="/" class="text-[#0d550dbd]">home page</router-link>  dhuur 🙄😏

      </span>
    </aside>
  </section>
</template>

<style  scoped>
  .c{
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>