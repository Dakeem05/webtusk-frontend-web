<script setup>
    import CarretRight from "../Icons/RightArrow.vue";
    import ArrowRight from '../Icons/ArrowRight.vue'
</script>

<template>
<div class="bg-black text-white py-[6rem]">
<section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
    <header class="text-start ">
        <h1 class="text-start xxs:text-lg font-madeForDisplayHeavy sm:text-2xl md:text-3xl w-[70%] lg:text-7xl">Explore all the products and tools!
</h1>
        <p class="md:text-2xl mt-[1rem] text-sm xxs:text-base md:w-9/12 mb-[6rem]">Whether you're a creative entrepreneur, a service provider, a freelancer, or a seasoned expert in your field, our platform is designed to elevate your online presence, streamline your operations, and amplify your impact.</p>
    </header>
    <aside class="flex flex-col lg:flex-row gap-[4rem]">
        
        <div ref="sectionToAnimate3" class=" lg:w-[60%] relative filter h-[45rem]">
            <div class=" md:gap-[6rem]  md:flex-row w-[90%]  mt-[2rem]">
                 <h1 class="font-bold ml-[2rem] font-madeForDisplayHeavy mx-auto xxs:text-xl xs:text-2xl md:text-3xl">Website Creation</h1>
                <aside class="mt-[2.5rem] mb-[3rem]  ml-[2rem] md:mt-0">
                    <article class="md:text-lg text-sm xxs:text-base my-5">Build stunning website with our intuitive website builder, offering a wide range of templates and customization options. Showcase your brand and captivate your audience with ease.</article>
                </aside>
                <div class="absolute bottom-0 w-[90%] mt-4">
                    <img class="h-[21rem] md:h-[30rem] object-fill shadow-3xl  w-[100%]" src="../../assets/Images/blankpic.jpg" alt="">
                </div>
            </div>
        </div>
        <div ref="sectionToAnimate3" class=" lg:w-[40%] filter  h-[45rem]">
             <div class="pl-[2rem] md:flex-row md:gap-[6rem] ml-auto w-[90%] mt-[2rem] ">
                  <h1 class="font-bold font-madeForDisplayHeavy xxs:text-xl xs:text-2xl md:text-3xl">E-commerce</h1>
                <aside class="mt-[2.5rem] mb-[3rem] md:mt-0">
                    <article class="md:text-lg text-sm xxs:text-base my-5">Sell products, services, courses, and more through our secure and user-friendly e-commerce features. Maximize your revenue potential with a seamless online shopping experience.</article>
                </aside>
                <div class="absolute bottom-0 mt-4">
                    <img class="h-[21rem] md:h-[25rem] object-fill shadow-3xl w-full" src="../../assets/Images/blankpic.jpg" alt="">
                </div>
            </div> 
        </div>
    </aside>
         <div ref="sectionToAnimate3" class="mt-[4rem] py-[4rem] w-full filter  h-fit">
             <div class="mx-auto w-[90%] ">
                      <h1 class="font-bold font-madeForDisplayHeavy flex-col flex lg:flex-row xxs:text-xl xs:text-2xl md:text-3xl">Bookings and Contacts</h1>
            <aside class="mt-[2.5rem] mb-[5rem] md:mt-0">
                <article class="md:text-xl text-sm xxs:text-base my-5">Our platform ensures secure booking and payment processing, providing both you and your clients with peace of mind during transactions while helping to build lasting relationships with your customers. Strengthen loyalty and keep your customers engaged for the long term.</article>
                <router-link to="/pricing" class="w-fit md:text-lg  bg-[#D0F224] gap-[1rem] px-[1rem] sm:px-5 py-3 font-airbold font-bold flex hover:bg-[#687334] transition-colors duration-200 ease-in-out hover:text-black text-black">
                    <span class="xs:text-lg text-sm xxs:text-base  lg:text-xl  font-madeForDisplayHeavy font-bold">
                    Launch my website
                    </span>
                    <span class="sm:pt-[0.5rem]  lg:pt-[0.2rem]">
                    <arrow-right />
                    </span>
                </router-link>
            </aside>

            <div class="mt-4">
                <img class="h-[31rem] md:h-[36rem] object-fill shadow-3xl  w-full" src="../../assets/Images/blankpic.jpg" alt="">
            </div>
            </div> 
        </div>
  </section>
</div>
  
</template>

<style scoped>
      .filter{
    background: rgba(255, 255, 255, 0.13);
    /* border-radius: 1px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
 }
</style>