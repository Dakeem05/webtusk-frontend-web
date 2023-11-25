<script setup>
    import CarretRight from "../Icons/RightArrow.vue";
    import ArrowRight from '../Icons/ArrowRight.vue'
</script>

<template>
  <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
    <div ref="sectionToAnimate3" class=" w-full md:flex-row md:gap-[6rem] mt-[4rem]">
                <h1 class="font-bold font-madeForDisplayHeavy flex-col flex lg:flex-row xxs:text-xl xs:text-2xl md:text-3xl">Streamline your back office</h1>
            <div class="mt-4">
                <img class="h-[31rem] md:h-[36rem] object-fill shadow-3xl rounded-2xl w-full" src="../../assets/Images/blankpic.jpg" alt="">
            </div>
            <aside class="mt-[2.5rem] md:mt-0">
                <article class="md:text-xl text-sm xxs:text-base my-5">Streamline your operations with our intuitive admin dashboard. Gain full control and easily manage your data, users, and settings in one centralized hub.Access real-time insights and make informed decisions with our user-friendly interface. Simplify your administrative tasks and enhance eciency with our powerful admin dashboard.</article>
                <section class="flex gap-[1rem]">
                    <div class="flex ">
                        <article class="pt-1.5">
                            <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                        </article>
                        <article class="font-bold font-madeForDisplayBold text-xs xs:text-sm xl:text-xl pt-1.5 md:pt-0 md:text-xl">Dashboard</article>
                    </div>
                    <div class="flex ">
                        <article class="pt-1.5">
                            <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                        </article>
                        <article class="font-bold font-madeForDisplayBold text-xs xs:text-sm xl:text-xl pt-1.5 md:pt-0 md:text-xl">Communication</article>
                    </div>
                    <div class="flex mb-[1rem] ">
                        <article class="pt-1.5">
                            <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                        </article>
                        <article class="font-bold font-madeForDisplayBold text-xs xs:text-sm xl:text-xl pt-1.5 md:pt-0 md:text-xl">Analytics  </article>
                    </div>
                </section>
                <router-link to="/pricing" class="w-fit md:text-lg  bg-[#D0F224] gap-[1rem] px-[1rem] sm:px-5 py-3 font-airbold font-bold flex hover:bg-[#687334] transition-colors duration-200 ease-in-out hover:text-white text-white">
                    <span class="xs:text-lg text-sm xxs:text-base  lg:text-xl  font-madeForDisplayHeavy font-bold">
                    Launch my website
                    </span>
                    <span class="sm:pt-[0.5rem]  lg:pt-[0.2rem]">
                    <arrow-right :fill="['white']"/>
                    </span>
                </router-link>
            </aside>
        </div>
  </section>
</template>

<style>

</style>