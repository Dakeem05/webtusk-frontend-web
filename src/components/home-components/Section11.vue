<script setup>
    import Tick from '../Icons/Tick copy.vue'
</script>

<template>
  <section class="bg-[#f4f4f4] xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem]   py-[6rem]">
    <section class="max-w-7xl gap-[3rem] flex flex-col lg:flex-row mx-auto">
        <div class=" block lg:hidden rounded-lg object-contain">
        <img class=" rounded-lg h-[30rem] mx-auto object-contain" src="../../assets/Images/promise.webp" alt="">
        </div>
        <div class="lg:w-1/2 flex flex-col md:flex-row lg:flex-col xl:pt-[3rem]">
            <aside>
                <header class="font-madeForDisplayHeavy hidden md:block sm:text-2xl lg:text-4xl">
                    <h1>We’ll build your business a </h1>
                    <h1>beautiful website in 7 days</h1>
                </header>
                <header class="font-madeForDisplayHeavy block md:hidden sm:text-2xl lg:text-4xl">
                    <h1>We’ll build your business a beautiful </h1>
                    <h1>website in 7 days</h1>
                </header>
                <!-- <h1 class="font-madeForDisplayBold block md:hidden sm:text-2xl lg:text-4xl">We’ll build your business a beautiful website in 7 days</h1> -->
                <div class="sm:text-lg lg:text-xl gap-[3vw] md:gap-0  flex lg:gap-4 mt-[2rem]">
                    <span class=" gap-4">
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick/></p>
                            <p>Built-for-you website</p>
                        </article>
                        <article class="flex gap-2 my-3">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick/></p>
                            <p>Fast, secure hosting</p>
                        </article>
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick/></p>
                            <p>Custom request</p>
                        </article>
                        
                    </span>
                    <span class=" gap-4">
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick/></p>
                            <p>Connect any domain</p>
                        </article>
                         <article class="flex gap-2 my-3">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick/></p>
                            <p>Dedicated Team   </p>
                        </article>
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick/></p>
                            <p>Satisfaction guaranteed</p>
                        </article>
                    </span>
                </div>
            </aside>
            <div class="lg:hidden border-black border-r-[0.3rem] mx-[2rem]"></div>
            <hr class="bg-black md:hidden lg:block lg:h-[0.3rem] my-[2rem]">
            <aside class="">
                <header class="font-madeForDisplayHeavy sm:text-lg lg:text-2xl">
                    <h1>End all the frustrations of getting a website</h1>
                </header>
                <div class="gap-[3vw] md:gap-0 sm:text-lg lg:text-xl flex lg:gap-4 mt-[2rem]">
                    <span class=" gap-4">
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No DIY confusion</p>
                        </article>
                        <article class="flex gap-2 my-3">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No time wasting</p>
                        </article>
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No hidden fees</p>
                        </article>
                        <article class="flex gap-2 mt-3">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No terrible service</p>
                        </article>
                        
                    </span>
                    <span class=" gap-4">
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No weeks of effort</p>
                        </article>
                         <article class="flex gap-2 my-3">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No risk </p>
                        </article>
                        <article class="flex gap-2">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No big agency fees</p>
                        </article>
                        <article class="flex gap-2 mt-3">
                            <p class="sm:text-sm lg:text-base lg:pt-0 sm:pt-1"><Tick :fill="['white']"/></p>
                            <p>No giving up</p>
                        </article>
                    </span>
                </div>
            </aside>

        </div>
        <div class="hidden  lg:block w-1/2 rounded-lg">
        <img class=" rounded-lg lg:h-[40rem] object-contain mid:h-full" src="../../assets/Images/promise.webp" alt=""></div>
    </section>
  </section>
</template>

<style>

</style>