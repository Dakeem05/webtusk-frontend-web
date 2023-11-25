<script setup>
  // import RocketIcon from "../../assets/Images/choose.svg";
  // import BulbIcon from "../Icons/BulbIcon.vue";
  import ArrowRight from '../Icons/ArrowRight.vue'
  import Carousel2 from "../carousel/Carousel2.vue";
  // import CycleIcon from "../Icons/CycleIcon.vue";
  // import CarretRight from "../Icons/CarretRight.vue";
    import web1 from '../../assets/Images/blankpic.jpg';
    import web2 from '../../assets/Images/blankpic.jpg';
    import web3 from '../../assets/Images/blankpic.jpg';
    import web4 from '../../assets/Images/blankpic.jpg';
    import web5 from '../../assets/Images/blankpic.jpg';
    const slides = [
        web1, web2, web3, web4, web5
    ]
</script>

<template>
    <section class=" max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
        <h1 class=" mx-4 xxs:text-lg sm:text-xl font-madeForDisplayHeavy md:text-[2rem] md:mb-[1rem] font-bold">Your dream website is only 3 easy steps aways</h1>
        <p class="text-sm mx-4 xxs:text-base  md:text-lg ">With us, you can boost your sales, bookings, and leads effortlessly. Our team will create a stunning website tailored to your business, all at an affordable price, Say goodbye to expensive agencies and complicated DIY web design builders. Our product simply works for you</p>

        <div class="flex flex-col shadow-3xl border-[1.5px] border-[bg-rgba(0, 0, 0, 0.25)] lg:flex-row rounded-xl text-white w-full mt-5 md:mt-[1.8rem]  rounded-r-[5rem]">
           <div class="w-full lg:w-7/12 block lg:hidden  ">
           <img class="h-[20rem] xs:h-[28rem] w-full object-cover" src="../../assets/Images/how.png" alt="">
          </div>
          <div class="w-full lg:w-6/12 pt-[5rem] pb-[3rem] lg:pb-0 sm:px-[2rem] xxs:px-[1rem] px-[0.5rem] lg:px-10 lg:p-10 xl:pt-[5rem] bg-black flex flex-col gap-6">
            <span class="flex gap-4">
              <div >
                <img class="max-w-[3rem]" src="../../assets/Images/choose.svg" alt="">
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="  sm:text-lg font-madeForDisplayBold md:text-2xl font-bold">Choose a Plan</h2>
                <p class="text-sm xs:text-base font-medium">Select the suitable plan that meets your website design needs. Take your time to review tre available plans and consicer factors such as the number of pages design customization, e-commerce capabilities and any additional services or support provided. </p>
              </div>
            </span>
            <span class="flex gap-4">
              <div >
                <img class="max-w-[3rem]" src="../../assets/Images/submit.svg" alt="">
              </div>
              <div class="flex flex-col gap-2">
                <h2 class=" sm:text-lg font-madeForDisplayBold md:text-2xl font-bold">Submit a Brief </h2>
                <p class="text-sm  xl:text-base font-medium">The brief should include information about your business, your target provide any branding elements such as logos, services and about us audience, and the goals you want to achieve with your website. Additionally, that you went to incorporate </p>
              </div>
            </span>
            <span class="flex gap-3 xs:gap-6">
              <div >
                <img class="max-w-[3rem]" src="../../assets/Images/ready.svg" alt="">
              </div>
              <div class="flex flex-col gap-2">
                <h2 class=" sm:text-lg font-madeForDisplayBold md:text-2xl font-bold">Ready in 7 Days</h2>
                <p class="text-sm  xl:text-base font-medium">After submitting your briet, the web design process begins, ready in agreed-upon time frame, in this case 7 days</p>
              </div>
            </span>
              <router-link to="/login" class="w-fit md:text-lg ml-[3.5rem] bg-[#D0F224] gap-[1rem] px-5 py-2 font-madeForDisplayBold font-bold flex hover:bg-[#687334] transition-colors duration-200 ease-in-out hover:text-white  text-black">
                    <span class= "xl:text-lg lg:text-xl  font-madeForDisplayHeavy font-bold">
                    Launch my website
                    </span>
                    <span class="pt-0.5 lg:pt-[0.2rem]">
                    <arrow-right />
                    </span>
                </router-link>
          </div>
          <div class="w-6/12  hidden lg:block object-cover rounded-r-[5rem]">
            <!-- <img class="w-full rounded-r-4xl h-full" :src="web1"/>
             -->
             <div class="rounded-r-[5rem] ">
              <img class="rounded-r-[5rem] h-[40rem] object-cover" src="../../assets/Images/how.png" alt="">
         <!-- <carousel-2 :slides="slides" :interval="5000" controls indicators></carousel-2> -->
        </div>
          </div>
        </div>

      
      
      </section>
</template>
