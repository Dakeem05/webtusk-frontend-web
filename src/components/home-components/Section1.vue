<script setup>
</script>

<template>
  <section class=" max-w-7xl mx-auto relative">
    <div class="bg-black xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] sm:px-[3rem]  pt-[6rem] text-white pb-[5rem] xl:px-[4rem]  flex left-0 mt-[3.5rem]">
        <div class="max-w-7xl relative gap-[6vw] xs:gap-[3rem] lg:gap-[10rem] flex">
            
        <div class="lg:w-5/12 gap-[2rem] flex flex-col">
            <span class="">
                <h1 class="lg:text-2xl font-bold sm:text-lg md:text-xl font-madeForDisplayBold "><slot name="h1"></slot></h1>
                <article class="font-light text-xs  xxs:text-sm sm:text-base lg:text-xl mt-5"><slot name="b1"></slot></article>
            </span>
            <span class="">
                <h1 class="lg:text-2xl font-bold sm:text-lg md:text-xl font-madeForDisplayBold "><slot name="h2"></slot></h1>
                <article class="font-light  text-xs xxs:text-sm sm:text-base lg:text-xl mt-5"><slot name="b2"></slot></article>
            </span>
        </div>
        <div  class="lg:w-5/12 gap-[2rem] flex flex-col">
            <span class="">
                <h1 class="lg:text-2xl font-bold sm:text-lg md:text-xl font-madeForDisplayBold "><slot name="h3"></slot></h1>
                <article class="font-light text-xs  xxs:text-sm sm:text-base lg:text-xl mt-5"><slot name="b3"></slot></article>
            </span>
            <span class="">
                <h1 class="lg:text-2xl font-bold sm:text-lg md:text-xl font-madeForDisplayBold "><slot name="h4"></slot></h1>
                <article class="font-light text-xs  xxs:text-sm sm:text-base lg:text-xl mt-5"><slot name="b4"></slot></article>
            </span>
        </div>
        
        </div>
    </div>
  </section>
</template>

<style>

</style>