<script setup>

    import Carousel from "../carousel/Carousel2.vue";
    import web1 from '../../assets/images/blankpic.jpg';
    import web2 from '../../assets/images/blankpic.jpg';
    import web3 from '../../assets/images/blankpic.jpg';
    import web4 from '../../assets/images/blankpic.jpg';
    import web5 from '../../assets/images/blankpic.jpg';
    import Tick from '../Icons/Tick.vue'
    import ArrowRight from '../Icons/ArrowRight.vue'
    const slides = [
     web1, web2, web3, web4, web5
    ]

</script>

<template>
  <section class="bg-black  text-white w-screen">
    <div class="max-w-7xl mx-auto  flex ">
        <div class="lg:w-1/2 pt-[4rem] pb-[3rem]">
            <span class="font-airblack text-[6.5rem]">
                <h1><slot name="h1"></slot></h1>
                <h1 class="-mt-[20px]"> <slot name="h2"></slot></h1>
                <h1 class="-mt-[20px]"> <slot name="h3"></slot></h1>
                <h1 class="-mt-[20px]"><slot name="h4"></slot></h1>
                <h1 class="-mt-[20px]"><slot name="h5"></slot></h1>
            </span>
            <article class="w-9/12 mb-[1rem] text-xl">Discover why smart entrepreneurs choose us for their business - from a perfect website to advanvced business tools and everything in between. </article>
            <div class="flex gap-[2rem]">
                <aside >
                    <span class="flex gap-3 mb-2">
                        <article><Tick/></article>
                        <article class="text-xl font-airbold ">Website done for you.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                    <span class="flex gap-3">
                        <article><Tick/></article>
                        <article class="text-xl font-airbold ">For every business.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                </aside>
                <aside >
                    <span class="flex gap-3 mb-2">
                        <article><Tick/></article>
                        <article class="text-xl font-airbold ">Edit with Ease.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                    <span class="flex gap-3">
                        <article><Tick/></article>
                        <article class="text-xl font-airbold ">Deliver with Expertise.</article>
                        <!-- <picture><img src="../../assets/Images/tick.svg" alt=""></picture> -->
                    </span>
                </aside>
            </div>
            <router-link class="text-black bg-white py-1 mt-[3rem] flex px-[3rem] w-fit rounded-lg" to="/pricing">
                <span class="flex font-bold font-airbold gap-2 text-3xl">
                    <article class="pt-1">Get Started</article>
                    <article><arrow-right/></article>
                </span>
            </router-link>
        </div>
        <div class="mt-14 lg:mt-0 w-full lg:w-1/2">
            <carousel :slides="slides" :class="['h-[20rem] sm:h-[25rem] lg:h-[44rem]']" :interval="5000" controls indicators></carousel>
        </div>
    </div>
  </section>
</template>

<style>

</style>