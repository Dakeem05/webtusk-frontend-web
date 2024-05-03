<script setup>
 import Carousel from "..//carousel/Carousel.vue";
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
  <section class=" xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] text-center text-white bg-black pt-[5rem]">
    <section class=" max-w-7xl glass p-[3rem] mx-auto ">
    <header class="lg:flex justify-between">
      <span class="text-start lg:w-[70%]">
        <p class="font-madeForDisplayBold">WHY CHOOSE WEBTUSK</p>
        <h1 class="sm:text-4xl xxs:text-xl text-lg pt-[0.7rem] font-madeForDisplayBold lg:w-3/4">It's the easy way to get your business online and scale</h1>
      </span>
      <span class="lg:ml-auto gap-[1rem] mt-[2rem] lg:mt-0 flex lg:w-[50%]">
        <div class=" h-[8rem] w-[8rem] rounded-full"><img class="w-full h-full object-contain" src="../../assets/Images/30daymoneyback.svg" alt=""></div>
        <h1 class="font-madeForDisplayBold text-xl text-start pt-[2rem] lg:pt-[1rem] xl:w-[60%]">Zero risk to get started. Not satisfied? Just email us and get a for a full refund.</h1>
      </span>
    </header>
      <div class="mt-[6rem] text-start grid gap-[1rem] md:grid-cols-2 xl:grid-cols-4">
        <aside>
          <div class="h-[5rem] w-[5rem]"><img class="w-full h-full object-contain" src="../../assets/Images/doneforyou.svg" alt=""></div>
          <h1 class="my-[1rem] text-2xl font-madeForDisplayBold">Done for you </h1>
          <p class="text-lg">We handle everything for your website – content, writing, SEO, design, and technical setup. No DIY builders here!</p>
        </aside>
        <aside>
          <div class="h-[5rem] w-[5rem]"><img class="w-full h-full object-contain" src="../../assets/Images/dropprice.svg" alt=""></div>
          <h1 class="my-[1rem] text-2xl font-madeForDisplayBold">100% affordable </h1>
          <p class="text-lg">Get your website up and running for just $199. After that, pay only $9/month for secure hosting and ongoing expert support.</p>
        </aside>
        <aside>
          <div class="h-[5rem] w-[5rem]"><img class="w-full h-full object-contain" src="../../assets/Images/care.svg" alt=""></div>
          <h1 class="my-[1rem] text-2xl font-madeForDisplayBold">We Care</h1>
          <p class="text-lg">Our team of actual humans, not robots, will build your site. A specialist in your business will launch it with you and guide you all the way</p>
        </aside>
        <aside>
          <div class="h-[5rem] w-[5rem]"><img class="w-full h-full object-contain" src="../../assets/Images/sales.svg" alt=""></div>
          <h1 class="my-[1rem] text-2xl font-madeForDisplayBold">Get more sales </h1>
          <p class="text-lg">From day one, your site can make sales and take bookings. Our hands-on assistance can give your business the boost it needs.</p>
        </aside>
      </div>
  </section>

    <section class="mt-[6rem] max-w-7xl .scroll-parent mx-auto">
      <div class="container">
    <!-- <section class="mt-[3rem] max-w-7xl .scroll-parent mx-auto">
      <div class="flex absolute .scroll-element"> -->
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
        <div class="h-[25rem] min-w-[19rem] md:min-w-[25rem]"><img class="w-full h-full object-contain" src="../../assets/Images/slider1.png" alt=""></div>
      </div>
    </section>
  </section>

</template>


<style scoped>
  .glass{
     background: rgba(255, 255, 255, 0.13);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
 .container {
  overflow: hidden;
  display: flex;
      opacity: 1;
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%);
  height: 500px;
  width: 100%;
  margin: 0 auto;
}

.container div {
  height: 25rem;
  /* min-width: 25rem; */
  margin-left: 100px;
   animation: slide 15s linear infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1500px, 0, 0); /* The image width */
  }
}
</style>