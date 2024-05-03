<script setup>
    import NavBar from '../components/common-components/NavBar.vue';
    import Footer from '../components/common-components/FooterPart2.vue';
    import Hero from '../components/home-components/Hero2.vue';
    import Section1 from '../components/home-components/Section9.vue';
    import Section2 from '../components/home-components/Section8.vue';
    import Section3 from '../components/home-components/ection7.vue';
    import Section4 from '../components/home-components/Section5.vue';
    import Section5 from '../components/home-components/Section6.vue';
    import Section6 from '../components/platform-components/Section7.vue';

      import { ref } from "vue";

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
  <section :class="[{' opacity-50 lg:opacity-100' : isopen === true, 'opacity-100' : isclose === false }]">
    <div>
        <Hero>
            <template #h1>
                Power your
            </template>
            <template #h2>
                business with
            </template>
            <template #h3>
                our solutions
            </template>
        </Hero>
    </div>
    <div class="">
        <section-1></section-1>
    </div>
    <!-- <div class="mt-[6rem]">
        <section-2></section-2>
    </div> -->
    <div class="mt-[6rem]">
        <section-6>
            <template #h1>
                        <p>Explore Our Web Builder Features</p>
                    </template>
                    <template #b>
                        <p>We're dedicated to empowering entrepreneurs like you to thrive in the digital world. Our comprehensive suite of features is designed to help you build scale and succeed with ease. Whether you're just starting or aiming for exponential growth. We are here to support every step of your journey</p>
                    </template>
        </section-6>
    </div>
    <div class="mt-[6rem]">
        <section-4></section-4>
    </div>
    <div class="mt-[6rem]">
        <section-5></section-5>
    </div>
    <div class="mt-[6rem] ">
        <Footer/>
    </div>
  </section>
</template>

<style>

</style>