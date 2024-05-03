<script setup>
    import NavBar from '../components/common-components/NavBar.vue';
    import Footer from '../components/common-components/FooterPart2.vue';
    import Hero from '../components/home-components/Hero2.vue';
    import ArrowRight from '../components/Icons/ArrowRight.vue'
    import Section1 from '../components/home-components/Section9.vue';
    import Section2 from '../components/home-components/Section8.vue';
    // import Section3 from '../components/home-components/Section7.vue';
    import Section4 from '../components/home-components/Section5.vue';
    // import Section5 from '../components/home-components/Section6.vue';
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
        <!-- <section-5></section-5> -->
        <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
        
        <!-- section 4 component for home page -->
        <!-- <div class="absolute w-full left-0 h-[27rem]  bg-[#1238bf]"></div> -->
        <aside class=" relative  text-white bg-black w-full py-[4rem] sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] xl:p-[4rem] shadow-xl flex mb-[3rem] flex-col">
            <div class="w-full lg:w-8/12 ">
                <h1 class="xs:text-base text-sm md:text-lg font-montserrat lg:text-2xl font-bold">The only website technology platform that instantly deploy your BackOffice in a single system. Remove the frustration and unending subscriptions, streamline your business at scale.</h1>
                <h1 class="mt-3 md:text-base font-madeForDisplayHeavy lg:text-2xl font-light">What all your subscription tools promise— <span class="font-madeForDisplayVariable italic"> We delivers</span> </h1>
            </div>
            <div class=" w-full lg:w-1/4">
                  <router-link class="text-black hover:text-black bg-white py-2 mt-[3rem] hover:bg-slate-200 flex px-[2rem] w-fit " to="/pricing">
                <span class="flex font-bold font-madeForDisplayHeavy gap-2 sm:text-2xl">
                    <article class="">Get Started</article>
                    <article class="pt-0.5"><arrow-right/></article>
                </span>
            </router-link>
            </div>
        </aside>
    </section>
    </div>
    <div class="mt-[6rem] ">
        <Footer/>
    </div>
  </section>
</template>

<style>

</style>