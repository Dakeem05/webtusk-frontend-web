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
        <h1 class=" xxs:text-lg  font-madeForDisplayHeavy sm:text-2xl md:text-3xl lg:text-5xl">Done for you business website!</h1>
        <h1 class=" xxs:text-lg w-[80%] mt-2 mx-auto lg:text-2xl">Everything you need to run a working website. whether launching a startup, small business, propelling a thriving venture, or expanding a medium-sized business, our core solutions redefine your digital identity</h1>
    </header>
    <section class="flex flex-col lg:flex-row gap-[3rem] mt-[2rem]">
        <picture class="lg:w-1/2">
            <img class="rounded-[1.6rem] lg:h-[45rem] object-contain mx-auto mid:h-[40rem]" src="../../assets/Images/trust.webp" alt="">
        </picture>
        <div class="lg:w-1/2 xl:pt-[1.5rem]">
            <aside class="">
                <div class="flex gap-3 mt-[1rem]">
                    <picture class="w-1/12">
                        <img class="max-w-[3rem]" src="../../assets/Images/secure.svg" alt="secure">
                    </picture>
                    <span class="w-full">
                        <h3 class="text-2xl xxs:text-2xl  font-madeForDisplayHeavy mb-2">Reduce costs</h3>
                        <article class="sm:text-lg xxs:text-base text-sm lg:w-10/12">Get the power to do more without the additional cost of developers, managing infrastructure, or additional plug-ins.</article>
                    </span>
                </div>
                <div class="flex gap-3 mt-[2rem]">
                    <picture class="w-1/12">
                        <img class="max-w-[3rem]" src="../../assets/Images/framework.svg" alt="secure">
                    </picture>
                    <span class="w-full">
                        <h3 class="text-2xl xxs:text-2xl font-madeForDisplayHeavy mb-2">Done for in 7 days</h3>
                        <article class="sm:text-lg xxs:text-base text-sm lg:w-10/12">We build your website and launch it. You can add more functionality and features anytime with no additional fees. We are not a do-it-yourself website builder</article>
                    </span>
                </div>
                <div class="flex gap-3 mt-[2rem]">
                    <picture class="w-1/12">
                        <img class="max-w-[3rem]" src="../../assets/Images/growth.svg" alt="secure">
                    </picture>
                    <span class="w-full">
                        <h3 class="text-2xl xxs:text-2xl font-madeForDisplayHeavy mb-2">Lightning-fast website</h3>
                        <article class="sm:text-lg xxs:text-base text-sm lg:w-10/12">We understand that a fast website is crucial for providing excellent user experiences and delivering information efficiently.</article>
                    </span>
                </div>
                <div class="flex gap-3 mt-[2rem]">
                    <picture class="w-1/12">
                        <img class="max-w-[3rem]" src="../../assets/Images/growth.svg" alt="secure">
                    </picture>
                    <span class="w-full">
                        <h3 class="text-2xl xxs:text-2xl font-madeForDisplayHeavy mb-2">Design to fit your needs</h3>
                        <article class="sm:text-lg xxs:text-base text-sm lg:w-10/12">We have tailored our platform to match your distinct business requirements. Our website solutions are crafted to cater to your specific needs.</article>
                    </span>
                </div>
            </aside>
        </div>
    </section>

    <aside class="bg-black lg:flex px-[5rem] py-[3rem] mt-[4rem] text-white">
        <h1 class="xl:text-5xl md:text-3xl xs:text-xl font-madeForDisplayBold">Get a website made for you</h1>
         <router-link class="text-black hover:text-black lg:ml-auto mt-3 lg:mt-0 bg-[#d0f224] py-2 flex px-[2rem] w-fit" to="/pricing">
                    <span class="flex font-bold font-madeForDisplayHeavy gap-2 text-lg ">
                        <article>Start building</article>
                        <article class="pt-0.5"><arrow-right /></article>
                    </span>
        </router-link>
    </aside>
  </section>
</template>

<style>

</style>