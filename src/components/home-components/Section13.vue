<script setup>
 import Carousel from "../carousel/Carousel.vue";
 import X from "../Icons/X.vue";
   import web1 from '../../assets/Images/blankpic.jpg';
  import web2 from '../../assets/Images/blankpic.jpg';
  import web3 from '../../assets/Images/blankpic.jpg';
  import web4 from '../../assets/Images/blankpic.jpg';
  import web5 from '../../assets/Images/blankpic.jpg';
   const slides = [
    web1, web2, web3, web4, web5
  ]
//   function toggleMute() {
//     alert('Good Lord')
// var video= document.getElementById("myVideo")

// if(video.muted){
// 	video.muted = false;
// } else {
// 	video.muted = true;
// }

// }
</script>

<template>
  <section class="text-black xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] text-center  bg-[#f4f4f4] py-[5rem]">
      <section class=" mx-auto max-w-7xl">
        <header>
          <h1 class="lg:text-6xl md:text-4xl sm:text-2xl text-lg xxs:text-xl md:w-[80%] mx-auto font-madeForDisplayBold">DIY website builders hand you the toolbox, but don’t show you how to use the tools</h1>
        </header>

        <div class="flex flex-col lg:flex-row font-madeForDisplayBold mt-[5rem] sm:gap-5 xx:text-xl text-lg sm:text-2xl justify-center lg:gap-12">
          <span class="flex gap-1 md:gap-3">
            <p class="text-[red]"><X/></p>
            <p>Poor customer support </p>
          </span>
          <span class="flex gap-1 md:gap-3">
            <p class="text-[red]"><X/></p>
            <p>Made for people with web design skills! </p>
          </span>
        </div>

        <div class="justify-items-center grid-cols-6  mt-[6rem] grid-rows-1 grid">
          <div class="lg:h-[8rem] xxs:h-[3rem] h-[1.5rem] sm:h-[6rem] lg:w-[8rem] rounded-full"><img class="w-full h-full object-contain" src="../../assets/Images/squarespace.svg" alt=""></div>
          <div class="lg:h-[8rem] xxs:h-[3rem] h-[1.5rem] sm:h-[6rem] lg:w-[8rem] rounded-full"><img class="w-full h-full object-contain" src="../../assets/Images/godaddy.svg" alt=""></div>
          <div class="lg:h-[8rem] xxs:h-[3rem] h-[1.5rem] sm:h-[6rem] lg:w-[8rem] rounded-full"><img class="w-full h-full object-contain" src="../../assets/Images/woocommerce.svg" alt=""></div>
          <div class="lg:h-[8rem] xxs:h-[3rem] h-[1.5rem] sm:h-[6rem] lg:w-[8rem] rounded-full"><img class="w-full h-full object-contain" src="../../assets/Images/shopify.svg" alt=""></div>
          <div class="lg:h-[8rem] xxs:h-[3rem] h-[1.5rem] sm:h-[6rem] lg:w-[8rem] rounded-full"><img class="w-full h-full object-contain" src="../../assets/Images/wordpress.svg" alt=""></div>
          <div class="lg:h-[8rem] xxs:h-[3rem] h-[1.5rem] sm:h-[6rem] lg:w-[8rem] rounded-full"><img class="w-full h-full object-contain" src="../../assets/Images/wix.svg" alt=""></div>
        </div>

        <div class="max-w-2xl lg:w-full w-[70%] my-[3rem] mx-auto"><img class="w-full h-full object-contain" src="../../assets/Images/most.svg" alt=""></div>
      </section>
  </section>

</template>


<style scoped>
  
</style>