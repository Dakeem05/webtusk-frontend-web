<script setup>
    import RightIcon from "../../components/Icons/RightArrow.vue";
      import { Swiper, SwiperSlide } from 'swiper/vue';
       import 'swiper/css';
         import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Pagination, Navigation, Autoplay } from 'swiper/modules';
    import LeftIcon from "../../components/Icons/RightArrow.vue";
    import Quotes from "../../components/Icons/Quotes.vue";
    import Star from "../../components/Icons/Star.vue";
    import {ref, computed, onMounted, onUnmounted} from 'vue';
    import Pic from '../../assets/Images/pic.jpg';
    import Pic2 from '../../assets/Images/pic2.jpg';
    import Pic3 from '../../assets/Images/pic3.jpg';
    const pagination ={
          clickable: true,
    //         renderBullet: function (index, className) {
    //   if (className.includes('swiper-pagination-bullet-active')) {
    //     return '<span class="' + className + '" style="background: #d0f224"></span>';
    //   } else {
    //     return '<span class="' + className + '" style="background: #d0f224"></span>';
    //   }
    // }
    renderBullet: function(index, className) {
  return '<span class="custom-dash"></span>';
},
    }
    const modules = [Autoplay, Pagination, Navigation]
    const slide0 = ref(null)
    const slide1 = ref(null)
    const slide2 = ref(null)
    const slide3 = ref(null)
    
    const carouselItems = ref([
        { id: 1, pic:Pic ,name: 'Samuel Hutchins', link: 'https://oyepixels.com' ,content: 'The speed in which they came up a concept for me with the limited information that I gave them really exceeded my expectations and great value. ' },
        { id: 2, pic:Pic2, name: 'Mary Louise ', link: 'https://agencymuse.com' ,content: 'Excellence with a CAPITOL E! I have experienced royalty and the feeling as if I was their best customer. They are most exceptional and the work is of  XCELLENCE.' },
        { id: 3, pic:Pic3, name:'John Boyle ', link: 'https://kobowork.com' ,content: 'The speed in which they came up a concept for me with the limited information that I gave them really exceeded my expectations and great value. ' },
        // Add more items as needed
    ]);
    
    const slide1Handler = () => {
      slide0.value.classList.add('-translate-x-[100%]')
      slide1.value.classList.remove('translate-x-[100%]')
    }
    const slide1backHandler = () => {
      slide0.value.classList.remove('-translate-x-[100%]')
      slide1.value.classList.add('translate-x-[100%]')
    }
    const slide2Handler = () => {
      slide1.value.classList.add('-translate-x-[200%]')
      slide2.value.classList.remove('translate-x-[200%]')
    }
    const slide2backHandler = () => {
      slide1.value.classList.remove('-translate-x-[200%]')
      slide2.value.classList.add('translate-x-[200%]')
    }
    const slide3Handler = () => {
      slide2.value.classList.add('-translate-x-[300%]')
      slide3.value.classList.remove('translate-x-[300%]')
    }
    const slide3backHandler = () => {
      slide2.value.classList.remove('-translate-x-[300%]')
      slide3.value.classList.add('translate-x-[300%]')
    }
      const slide4Handler = () => {
        // alert('hh')
        slide0.value.classList.remove('-translate-x-[100%]');
        slide1.value.classList.remove('-translate-x-[200%]');
        slide1.value.classList.add('translate-x-[100%]');
        slide2.value.classList.remove('-translate-x-[300%]'); 
        slide2.value.classList.add('translate-x-[200%]'); 
        slide3.value.classList.add('translate-x-[300%]');
        // slide3.value.classList.add('translate-x-[400%]');
      }
</script>
<template>
  <section class="bg-gray-600 xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem]  py-[3rem]">
    <div   class=" max-w-7xl mx-auto lg:gap-[4rem]  flex flex-col lg:flex-row">
      <div data-carousel="static" class="lg:w-[55%]  relative  md:h-[31rem]">
        <!-- <img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"> -->
        <swiper class="mySwiper" :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
           :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
        >
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
    <swiper-slide><img src="../../assets/Images/homebanner.png" class="h-full w-full object-contain" alt="ss"></swiper-slide>
  </swiper>
    </div>
 
      <div class="glass mt-[3rem] py-[1rem] pl-[1rem] sm:p-[2rem]  overflow-x-hidden h-[28rem] sm:h-[25rem] text-white relative flex lg:ml-auto lg:w-[40%]">

        <aside ref="slide0" class="w-full transition-transform duration-500 absolute">
          <h1 class="sm:text-7xl text-5xl"><Quotes/></h1>
          <article class="w-[90%]"> slide 0I love how fast they came up with concept designs and how much patience they had with me, and I am demanding and picky, and they kept changing the design to fit my need and satisfaction. I highly recommend them and do future business with them.</article>

          <header class="mt-[2rem]">
            <h1 class="sm:text-3xl text-xl font-madeForDisplayBold">William Ricketts</h1>
            <h1 class="">quickshop.co.uk</h1>

            <span class="text-[#D0F224] flex gap-1 sm:text-2xl text-lg my-[1rem]">
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
            </span>

            <span class="flex gap-2">
              <button @click="slide1Handler" class="bg-[#d0f224] relative z-50 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide1Handler" class="bg-gray-400 relative  relativez-50 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide1Handler" class="bg-gray-400 relative z-50 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide1Handler" class="bg-gray-400 relative z-50 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
            </span>
          </header>
        </aside>
        <aside ref="slide1" class="w-full absolute transition-transform duration-500 translate-x-[100%]">
          <h1 class="sm:text-7xl text-5xl"><Quotes/></h1>
          <article class="w-[90%]">slide 1I love how fast they came up with concept designs and how much patience they had with me, and I am demanding and picky, and they kept changing the design to fit my need and satisfaction. I highly recommend them and do future business with them.</article>

          <header class="mt-[2rem]">
            <h1 class="sm:text-3xl text-xl font-madeForDisplayBold">William Ricketts</h1>
            <h1 class="">quickshop.co.uk</h1>

            <span class="text-[#D0F224] flex gap-1 sm:text-2xl text-lg my-[1rem]">
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
            </span>

            <span class="flex gap-2">
              <button @click="slide1backHandler" class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide2Handler" class="bg-[#d0f224] h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide2Handler" class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide2Handler" class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
            </span>
          </header>
        </aside>
        <aside ref="slide2" class="w-full absolute transition-transform duration-500 translate-x-[200%]">
          <h1 class="sm:text-7xl text-5xl"><Quotes/></h1>
          <article class="w-[90%]">slide 2 I love how fast they came up with concept designs and how much patience they had with me, and I am demanding and picky, and they kept changing the design to fit my need and satisfaction. I highly recommend them and do future business with them.</article>

          <header class="mt-[2rem]">
            <h1 class="sm:text-3xl text-xl font-madeForDisplayBold">William Ricketts</h1>
            <h1 class="">quickshop.co.uk</h1>

            <span class="text-[#D0F224] flex gap-1 sm:text-2xl text-lg my-[1rem]">
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
            </span>

            <span class="flex gap-2">
              <button @click="slide2backHandler" class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide2backHandler" class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide3Handler" class="bg-[#d0f224] h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide3Handler" class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
            </span>
          </header>
        </aside>
        <aside ref="slide3" class="w-full absolute transition-transform duration-500 translate-x-[300%]">
          <h1 class="sm:text-7xl text-5xl"><Quotes/></h1>
          <article class="w-[90%]">slide 3I love how fast they came up with concept designs and how much patience they had with me, and I am demanding and picky, and they kept changing the design to fit my need and satisfaction. I highly recommend them and do future business with them.</article>

          <header class="mt-[2rem]">
            <h1 class="sm:text-3xl text-xl font-madeForDisplayBold">William Ricketts</h1>
            <h1 class="">quickshop.co.uk</h1>

            <span class="text-[#D0F224] flex gap-1 sm:text-2xl text-lg my-[1rem]">
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
              <p><Star/></p>
            </span>

            <span class="flex gap-2">
              <button @click="slide3backHandler" class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide3backHandler"  class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide3backHandler"  class="bg-gray-400 h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
              <button @click="slide4Handler"  class="bg-[#d0f224] h-1.5 w-[1rem] sm:w-[1.5rem]"></button>
            </span>
          </header>
        </aside>
      </div>
    </div>
  </section>
</template>



<style scoped>


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-dash {
  display: block;
  z-index: 10;
  width: 10px;
  height: 10px;
  border-bottom: 1px solid #fff; 
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

  .swiper-pagination-bullet {
        /* width: 20px;
        height: 20px; */
        /* text-align: center;
        line-height: 20px;
        font-size: 12px; */
        /* color: #000;
        opacity: 1;
        background: red; */
          display: inline-block;
  width: 10px; 
  height: 10px;
  border-radius: 0; 
  background: none;
  border-bottom: 1px solid #fff;
      }

      .swiper-pagination-bullet-active {
        color: #000;
        background: #d0f224;
      }

.glass{
    background: rgba(255, 255, 255, 0.13);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}


</style>

