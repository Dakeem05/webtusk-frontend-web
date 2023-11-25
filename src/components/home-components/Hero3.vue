<script setup>

    import Carousel from "../carousel/Carousel.vue";
    import web1 from '../../assets/Images/1.webp';
    import web2 from '../../assets/Images/2.webp';
    import web3 from '../../assets/Images/3.webp';
    import web4 from '../../assets/Images/4.webp';
    import web5 from '../../assets/Images/5.webp';
    import Tick from '../Icons/Tick.vue'
    import ArrowRight from '../Icons/ArrowRight.vue'
    const slides = [
     web1, web2, web3, web4, web5
    ]

</script>

<template>
  <section class="bg-black xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] text-white w-screen">
    <div class="max-w-7xl mx-auto pt-[4rem] pb-[3rem] flex flex-col">
        <div class="pt-[2rem] mx-auto justify-center text-center">
            <span class="font-madeForDisplayHeavy text-2xl xxs:text-4xl md:text-[3rem]">
                <h1><slot name="h1"></slot></h1>
                <h1 class="-mt-[5px]"> <slot name="h2"></slot></h1>
                <h1 class="-mt-[5px]"> <slot name="h3"></slot></h1>
                <h1 class="-mt-[5px]"><slot name="h4"></slot></h1>
                <h1 class="-mt-[5px]"><slot name="h5"></slot></h1>
            </span>
            <article class="text-xl xxs:text-2xl  mx-auto max-w-4xl mt-[1rem]"><slot name="b1"></slot></article>
            <div class="flex  mt-[1rem] justify-center gap-[1vw] md:gap-[2rem]">
                <aside class="flex flex-col lg:flex-row lg:gap-[2rem]">
                    <span class="flex gap-3 mb-2">
                        <article><Tick class="xs:pt-1 text-xs xs:text-base"/></article>
                        <article class="sm:text-base pt-1 mid:pt-0 xxs:text-xs xs:text-sm xl:text-xl font-madeForDisplayBold font-bold ">Website done for you.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                    <span class="flex gap-3">
                        <article><Tick class="xs:pt-1 text-xs xs:text-base"/></article>
                        <article class="sm:text-base pt-1 mid:pt-0 xxs:text-xs xs:text-sm xl:text-xl font-madeForDisplayBold font-bold ">For every business.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                </aside>
                <aside class="flex flex-col lg:flex-row lg:gap-[2rem]">
                    <span class="flex gap-3 mb-2">
                        <article><Tick class="xs:pt-1 text-xs xs:text-base"/></article>
                        <article class="sm:text-base pt-1 mid:pt-0 xxs:text-xs xs:text-sm xl:text-xl font-madeForDisplayBold font-bold ">Edit with Ease.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                    <span class="flex gap-3 mb-[1rem]">
                        <article><Tick class="xs:pt-1 text-xs xs:text-base"/></article>
                        <article class="sm:text-base pt-1 mid:pt-0 xxs:text-xs xs:text-sm xl:text-xl font-madeForDisplayBold font-bold ">Deliver with Expertise.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                </aside>
            </div>
            <router-link class="text-black hover:text-black mx-auto my-[2rem] bg-white py-4 mt-[1rem] flex px-[1rem] sm:px-[3rem] w-fit" to="/pricing">
                <span class="flex font-bold  font-madeForDisplayHeavy gap-2 xxs:text-base text-sm sm:text-xl">
                    <article>Launch my website</article>
                    <article class="pt-0.5"><arrow-right/></article>
                </span>
            </router-link>
        </div>
        <div class="mt-[0.5rem] w-full py-[4rem] filter">
            <!-- <carousel :slides="slides" :class="['h-[20rem] sm:h-[25rem] lg:h-[32rem]']" :interval="5000" controls indicators></carousel> -->
             <img src="../../assets/Images/homebanner.png" class="object-cover w-[90%] mx-auto rounded-lg" alt="Hero">
        </div>
    </div>
  </section>
</template>

<style scoped>
      .filter{
    background: rgba(255, 255, 255, 0.13);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
 }
</style>