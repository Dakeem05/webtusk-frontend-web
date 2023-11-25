<script setup>
 import { ref, onMounted, onBeforeUnmount  } from "vue"
  import Arrow from '../Icons/ArrowRight.vue'
  import Tick from '../Icons/Tick.vue'
  import web1 from '../../assets/Images/1.webp';
  import web2 from '../../assets/Images/2.webp';
  import web3 from '../../assets/Images/3.webp';
  import web4 from '../../assets/Images/4.webp';
  import web5 from '../../assets/Images/5.webp';
 import Carousel from "../carousel/Carousel.vue";
const texts = ref([
  'Business', 'Company', 'Website', 'Store', 'Enterprise'
]);
 const slides = [
     web1, web2, web3, web4, web5
    ]
    const isChanging = ref(true)

const currentIndex = ref(0); // Current index to track the current text
let intervalId = null; // Variable to hold the interval ID

const changeText = () => {
  // changedText.value.classList.add('animate-drop-down')
  isChanging.value = true
  
  // alert('aboutcha')
  currentIndex.value = (currentIndex.value + 1) % texts.value.length;
   setTimeout(() => {
    isChanging.value = false;
  }, 1000); 
};
  onMounted(() => {
    intervalId = setInterval(changeText, 5000);
  });
 onBeforeUnmount(() => {
  clearInterval(intervalId);
});

</script>

<template>
  <section class="hero xxs:px-[1rem]   px-[0.5rem] xs:px-[2rem] pt-[3rem] xs:pt-[5rem] lg:pt-0 sm:px-[3rem] xl:px-5 bg bg-black">
        <div class="relative max-w-7xl mx-auto justify-center  py-[3rem]">
          
        <div class=" text-white mx-auto z-50">
          <aside class="w-full mx-auto justify-center text-center place-content-center place-items-center lg:mt-[3rem]">
        <span class="font-madeForDisplayHeavy w-full text-2xl xxs:text-4xl sm:text-5xl md:text-7xl ">
          <article class="animate-change capitalize">Unified website </article>
          <!-- :class="{'animate-change' : isChanging === true, 'animate-none' : isChanging === false}"  -->
          <article class="-my-[2px] flex xl:flex-row flex-col xl:gap-2 mx-auto justify-center capitalize"> Platform For Your  <article class="text-[#d0f224]  ">{{ texts[currentIndex] }}</article></article>
          <!-- <article class="text-[#d0f224]  ">{{ texts[currentIndex] }}</article> -->
        </span>
        <article class="font-medium md:w-11/12 xxs:text-lg md:text-2xl mx-auto mt-6 mb-6">Your website should be a business channel, not an engineering challenge. We build your entire website stack and tools to customize effortlessly. Grow on your terms, turning your ideas into products with great experience — with one unified platform.</article>

        <span class="mt-6 flex">

        <router-link to="/pricing" class="w-fit mx-auto my-[2rem] gap-5 sm:text-base text-xs xxs:text-sm xs:text-sm md:text-[1.2rem] flex bg-[#d0f224] px-2 xs:px-3 sm:px-8 py-3 font-madeForDisplayBold font-bold hover:bg-[#d0f22496] transition-colors duration-200 ease-in-out hover:text-black  text-black">
            <p>Get Started</p>
            <p class="hidden xs:block xs:pt-[0.2rem]"><Arrow /></p>
        </router-link>
        </span>

          </aside>
        <div class="hidden xxs:block grad mt-14 lg:mt-[3rem] w-full py-[4rem] filter">
         <!-- <carousel :slides="slides" :class="['h-[20rem] sm:h-[25rem] lg:h-[30rem]']" :interval="4000" controls indicators></carousel> -->
         <img src="../../assets/Images/homebanner.png" class="object-cover w-[90%] mx-auto rounded-lg" alt="Hero">
        </div>
        </div>

          <div class=" ">
          <div class="relative xl:gap-[3rem]  duration-1000 animate-scroll-slide  lg:gap-[3rem]  flex flex-row place-items-center  w-full rounded-2xl">
           
               <div class=" mt-[4rem] mx-auto flex gap-[2vw] xxs:gap-[2vw] xs:gap-[2vw] sm:gap-[2vw] md:gap-[1.3vw] lg:gap-[1.8vw] mid:gap-[2.5vw] logoloop">
                        
                <div class="object-cover w-[2.5rem] xxs:w-[3rem] xs:w-[4.3rem] sm:w-[5rem] h-[2rem]">
        
                    <img class="object-cover" src="../../assets/Images/paypal.svg" alt="Paypal">
                </div>
                <div class="object-cover w-[2.5rem] xxs:w-[3rem] xs:w-[4.3rem] sm:w-[5rem] h-[2rem]">
                    <img class="object-cover" src="../../assets/Images/stripe.svg" alt="stripe">
                </div>
                <div class="object-cover hidden md:block w-[5rem] h-[2rem]">
                    <img class="object-cover" src="../../assets/Images/brother-2.svg" alt="brother">
                </div>
                <div class="object-cover w-[2.5rem] xxs:w-[3rem] xs:w-[4.3rem] sm:w-[5rem] h-[2rem]">
                    <img class="object-cover" src="../../assets/Images/zoom.svg" alt="zoom">
                </div>
                <div class="object-cover w-[2.5rem] xxs:w-[3rem] xs:w-[4.3rem] sm:w-[5rem] h-[2rem]">
                    <img class="object-cover pt-1" src="../../assets/Images/visa.svg" alt="visa">
                </div>
                <div class="object-cover hidden xs:block w-[1.5rem] xxs:w-[3rem] xs:w-[4.3rem] sm:w-[5rem] h-[2rem]">
                    <img class="object-cover" src="../../assets/Images/klarna2.svg" alt="klarna">
                </div>
                <div class="object-cover hidden lg:block w-[5rem] h-[2rem]">
                    <img class="object-cover pt-1" src="../../assets/Images/Upwork.svg" alt="Upwork">
                </div>
                <div class="object-contain hidden md:block w-[5rem] h-[2rem]">
                    <img class="object-contain pt-1" src="../../assets/Images/github.svg" alt="ted">
                </div>
                <div class=" object-contain hidden sm:block w-[4.5rem] sm:w-[5rem] h-[2rem]">
                    <img class="object-contain pt-1" src="../../assets/Images/slack.svg" alt="ted">
                </div>
                <div class=" object-contain xs:hidden lg:block w-[5rem] h-[2rem]">
                    <img class="object-contain xs:pt-1" src="../../assets/Images/dell.svg" alt="ted">
                </div>
            </div>
           
          </div>
           
         </div>
        </div>
    
       
      </section>

      
</template>


<style scoped>
.bg{
  background-image: (170deg,rgba(14,14,14,0) 85%,rgba(14,14,14,.98)),radial-gradient(circle at 10% 0,rgba(34,34,34,.98),rgba(14,14,14,.2) 14%,rgba(14,14,14,0) 48%)
}
  .grad{
      
      filter: drop-shadow(0 0 14rem #6b6b6b);
     /* background: linear-gradient(to bottom, black 70%, #d0f224 30%);  */
     /* bg-gradient-to-b from-black to-[#d0f224] */
  }

  .filter{
    background: rgba(255, 255, 255, 0.13);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
 }
</style>