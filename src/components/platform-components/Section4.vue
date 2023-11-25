<script setup>
 import Carousel from "..//carousel/Carousel.vue";
   import web1 from '../../assets/images/blankpic.jpg';
  import web2 from '../../assets/images/blankpic.jpg';
  import web3 from '../../assets/images/blankpic.jpg';
  import web4 from '../../assets/images/blankpic.jpg';
  import web5 from '../../assets/images/blankpic.jpg';
   const slides = [
    web1, web2, web3, web4, web5
  ]
</script>

<template>
  <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
    <span class="font-madeForDisplayBold text-center lg:text-4xl sm:text-2xl xxs:text-xl">
        <h1><slot name="h1"></slot></h1>
        <h1><slot name="h2"></slot></h1>
    </span>
    <article class="md:text-xl xxs:text-lg text-center my-[1rem]"><slot name="b"></slot></article>
      <div class="mt-[2rem] shadow-3xl rounded-2xl">
          <carousel :slides="slides" :class="['h-[20rem] xs:h-[30rem] md:h-[40rem]']" :interval="5000" controls indicators></carousel>
        </div>

    <section class="flex flex-col lg:flex-row mt-[2.5rem] lg:ml-[3rem] lg:gap-[3rem]">
        <aside class="lg:w-1/2">
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">Stunning Templates: </h1>
                <p class="w-10/12 mt-1 text-lg">Choose from an array of professionally designed templates tailored to various industries and styles.</p>
            </span>
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">Intuitive Drag-and-Drop:  </h1>
                <p class="w-10/12 mt-1 text-lg">Effortlessly arrange elements, add content, and build pages without any coding skills.</p>
            </span>
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">Responsive Design: </h1>
                <p class="w-10/12 mt-1 text-lg">Ensure your website looks impeccable and functions seamlessly on desktop, tablet, and mobile devices.</p>
            </span>
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">Personalized Branding: </h1>
                <p class="w-10/12 mt-1 text-lg">Customize colors, fonts, images, and layout to align perfectly with your brand identity.</p>
            </span>
        </aside>
        <aside class="lg:w-1/2">
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">Multi-Media Integration:</h1>
                <p class="w-10/12 mt-1 text-lg">Embed videos, images, and interactive elements to create a dynamic and engaging user experience.</p>
            </span>
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">E-Commerce Integration: </h1>
                <p class="w-10/12 mt-1 text-lg">Seamlessly incorporate an online store into your website and showcase your products to the world.</p>
            </span>
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">SEO Optimization:</h1>
                <p class="w-10/12 mt-1 text-lg">Enhance your website's visibility with built-in tools to improve search engine rankings.</p>
            </span>
            <span class="">
                <h1 class="md:text-3xl xxs:text-2xl mid:text-3xl mt-5 font-madeForDisplayBold">Scalability:  </h1>
                <p class="w-10/12 mt-1 text-lg">Grow your website as your business expands by easily adding new pages and features.</p>
            </span>
        </aside>
    </section>
  </section>
</template>


<style>

</style>