<script setup>
    import ArrowRight from '../Icons/ArrowRight.vue'
</script>

<template>
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

</template>