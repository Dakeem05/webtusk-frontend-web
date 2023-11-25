<script setup>
    import ArrowRight from '../Icons/ArrowRight.vue'
</script>

<template>
  <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
    <h1 class="xxs:text-2xl text-lg md:text-3xl lg:text-5xl font-madeForDisplayHeavy">One Subscription, infinite possibilities</h1>
    <p class="lg:text-2xl sm:text-xl xxs:text-lg my-[1rem] max-w-3xl">Get your business website built for you in 7 days with secure and reliable hosting, all while igniting your digital potential with limitless possibilities.</p>
    <router-link class=" bg-[#D0F224] py-2 hover:text-black flex px-[3rem] w-fit " to="/pricing">
        <span class="flex font-bold font-madeForDisplayHeavy gap-2  xxs:text-lg xs:text-xl">
            <article >Get Started</article>
            <article class="xxs:block sm:text-base text-sm hidden pt-1 sm:pt-0.5"><arrow-right /></article>
        </span>
    </router-link>
  </section>
</template>

<style>

</style>