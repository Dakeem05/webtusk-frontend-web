<script setup>
    import ArrowRight from '../Icons/ArrowRight.vue'
</script>

<template>
  <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
    <!-- <header class="text-center xxs:text-lg hidden lg:block font-madeForDisplayBold sm:text-2xl md:text-3xl lg:text-4xl">
        <h1>Transcend websites, revolutionize business tools, </h1>
        <h1>and orchestrate your entrepreneurial symphony like never before!</h1>
    </header> -->
    <header class="text-center">
        <h1 class=" xxs:text-lg  font-madeForDisplayHeavy sm:text-2xl md:text-3xl lg:text-5xl">Trust and safety features for your protection</h1>
        <h1 class=" xxs:text-lg w-[80%] mt-2 mx-auto lg:text-2xl">Your website is completely designed, built and managed by our professional team. Unlike most website services, you don't have to do a thing!</h1>
    </header>
    <section class="flex flex-col lg:flex-row gap-[4rem] mt-[4rem]">
        <picture class="lg:w-1/2">
            <img class="rounded-[1.6rem] lg:h-[45rem] object-contain mx-auto mid:h-[40rem]" src="../../assets/Images/trust.webp" alt="">
        </picture>
        <div class="lg:w-1/2 xl:pt-[2rem]">
            <aside class="">
                <div class="flex gap-3 mt-[2rem]">
                    <picture class="w-1/12">
                        <img class="max-w-[3rem]" src="../../assets/Images/secure.svg" alt="secure">
                    </picture>
                    <span class="w-full">
                        <h3 class="text-2xl xxs:text-3xl mb-3  font-madeForDisplayBold">Secure Platform</h3>
                        <article class="sm:text-xl xxs:text-base text-sm lg:w-9/12">Craft an all-encompassing website witn advanced features, giving life to your unique vision.</article>
                    </span>
                </div>
                <div class="flex gap-3 mt-[2rem]">
                    <picture class="w-1/12">
                        <img class="max-w-[3rem]" src="../../assets/Images/framework.svg" alt="secure">
                    </picture>
                    <span class="w-full">
                        <h3 class="text-2xl xxs:text-3xl mb-3 font-madeForDisplayBold">Robust Framework</h3>
                        <article class="sm:text-xl xxs:text-base text-sm lg:w-9/12">Acquire a high-performance base, meticulously designed for boundless expansion and tranquility.</article>
                    </span>
                </div>
                <div class="flex gap-3 mt-[2rem]">
                    <picture class="w-1/12">
                        <img class="max-w-[3rem]" src="../../assets/Images/growth.svg" alt="secure">
                    </picture>
                    <span class="w-full">
                        <h3 class="text-2xl xxs:text-3xl mb-3 font-madeForDisplayBold">Crafted For Growth</h3>
                        <article class="sm:text-xl xxs:text-base text-sm lg:w-9/12">Transform and grow effortlessly using integrated marketing and business tools, all within your grasp.</article>
                    </span>
                </div>
                <router-link class="text-white bg-black hover:bg-slate-800 hover:text-white py-2 mt-[2rem] flex px-[1rem] w-fit" to="/pricing">
                    <span class="flex font-bold font-madeForDisplayHeavy gap-2 text-lg ">
                        <article>Get Started</article>
                        <article class="pt-0.5"><arrow-right :fill="['white']"/></article>
                    </span>
                </router-link>
            </aside>
        </div>
    </section>
  </section>
</template>

<style>

</style>