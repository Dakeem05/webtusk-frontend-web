<script setup>
  import { ref, onMounted} from 'vue';
  import web1 from '../../assets/Images/blankpic.jpg';
  import web2 from '../../assets/Images/blankpic.jpg';
  import web3 from '../../assets/Images/blankpic.jpg';
  import CarretRight from "../Icons/RightArrow.vue";

  const sectionToAnimate = ref(null)
  const sectionToAnimate2 = ref(null)
  const sectionToAnimate3 = ref(null)

  const onIntersection = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // The target element is now visible in the viewport
      // Add your animation or CSS class changes here
      // alert('intersecting')
      sectionToAnimate.value.classList.add('animate-gone-up'); // Example: Apply a CSS class 'fade-in'
      observer.unobserve(entry.target)
    } else {
      // alert('not')
      // The target element is no longer visible in the viewport
      // Add your animation or CSS class changes here
      sectionToAnimate.value.classList.remove('animate-gone-up'); // Example: Remove the CSS class 'fade-in'
    }
  };
  const onIntersection2 = (entries, observer) => {
      const [entry] = entries;
    if (entry.isIntersecting) {
        sectionToAnimate2.value.classList.add('animate-gone-up'); // Example: Apply a CSS class 'fade-in'
      observer.unobserve(entry.target)
    } else {
        sectionToAnimate2.value.classList.remove('animate-gone-up'); // Example: Remove the CSS class 'fade-in'
    }
  };
  const onIntersection3 = (entries, observer) => {
      const [entry] = entries;
    if (entry.isIntersecting) {
        sectionToAnimate3.value.classList.add('animate-gone-up'); // Example: Apply a CSS class 'fade-in'
      observer.unobserve(entry.target)
    } else {
        sectionToAnimate3.value.classList.remove('animate-gone-up'); // Example: Remove the CSS class 'fade-in'
    }
  };



  onMounted(() => {
    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(onIntersection, { threshold: 0,   once: true, }); // You can adjust the threshold value as needed
    const observer2 = new IntersectionObserver(onIntersection2, { threshold: 0,   once: true, }); // You can adjust the threshold value as needed
    const observer3 = new IntersectionObserver(onIntersection3, { threshold: 0,   once: true, }); // You can adjust the threshold value as needed
     
    // Observe the target element
    if (sectionToAnimate.value) {
      observer.observe(sectionToAnimate.value);
    }
    if (sectionToAnimate2.value) {
      observer2.observe(sectionToAnimate2.value);
    }
    if (sectionToAnimate3.value) {
      observer3.observe(sectionToAnimate3.value);
    }
  });
 
</script>

<template>
    <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
        <div class="text-center">
            <h1 class="text-4xl font-madeForDisplayHeavy">Get your business website built for you in 7 days</h1>
            <p class="text-2xl mt-[1rem] w-[80%] mx-auto">We'll build your business a beautiful website in 7 days + deploy our advanced business solutions with your Back-Office. We've got you covered.</p>
            <!-- <p class="text-2xl">advanced business solutions with your Back-Office. We've got you covered.</p> -->
        </div>
        <div ref="sectionToAnimate" class="flex opacity-0 mt-[4rem]  flex-col w-full md:flex-row md:gap-[6rem]">
            <div  class=" md:w-8/12">
                <img class="h-[31rem]  md:h-[36rem] object-fill shadow-3xl rounded-2xl w-full" :src="web1" alt="">
            </div>
            <aside class="md:w-4/6 mt-[2.5rem] md:mt-0">
                <h1 class="font-bold font-madeForDisplayHeavy text-lg mb-3 xs:text-2xl md:text-3xl">Done-for-you Website</h1>
                <article class="text-sm xxs:text-base md:text-xl my-2">Build stunning website with our intuitive website builder, offering a wide range of templates and customization options. Showcase your brand and captivate your audience with ease.</article>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Free website launch</article>
                </div>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Custom Domain</article>
                </div>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Easy-to-use website editor </article>
                </div>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Free SSL Certificate </article>
                </div>
                <div class="flex mb-[1.4rem] mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Real human support </article>
                </div>
                   <router-link to="/pricing" class="w-5/12 md:text-lg  bg-[#D0F224] px-5 py-2 font-madeForDisplayHeavy font-bold text-black hover:text-black hover:bg-[#687334] transition-colors duration-200 ease-in-out hover:text-white  rounded-md ">Launch my website</router-link>
            </aside>
        </div>
        <div ref="sectionToAnimate2" class="flex opacity-0 flex-col w-full md:flex-row md:gap-[6rem] mt-[4rem]">
             <div class="md:w-8/12 mb-[2.5rem] md:mt-0 block md:hidden">
                <img class="h-[31rem] md:h-[36rem] object-fill shadow-3xl rounded-2xl w-full" :src="web2" alt="">
            </div>
            <aside class="md:w-4/6">
                <h1 class="font-bold font-madeForDisplayHeavy mb-3  md:text-3xl">E-commerce</h1>
                <article class="text-sm xxs:text-base md:text-xl my-2">Sell products, services, courses, and more through our secure and user-friendly e-commerce features. Maximize your revenue potential with a seamless online shopping experience.</article>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Unlimited Products</article>
                </div>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Unlimited Projects</article>
                </div>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Payment Setup </article>
                </div>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Unlimited Booking </article>
                </div>
                <div class="flex mb-[1.4rem] mt-[0.4rem]">
                    <article class="pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Online Store Builder </article>
                </div>
                   <router-link to="/pricing" class="w-5/12 md:text-lg  bg-[#D0F224] px-5 py-2 font-madeForDisplayHeavy font-bold text-black hover:text-black hover:bg-[#687334] transition-colors duration-200 ease-in-out hover:text-white  rounded-md ">Launch my website</router-link>
            </aside>
             <div class="md:w-8/12 mt-[2.5rem] md:mt-0 hidden md:block">
                <img class="h-[31rem] md:h-[36rem] object-fill shadow-3xl rounded-2xl w-full" :src="web2" alt="">
            </div>
        </div>
        <div ref="sectionToAnimate3" class="flex opacity-0 flex-col w-full md:flex-row md:gap-[6rem] mt-[4rem]">
            <div class="md:w-8/12">
                <img class="h-[31rem] md:h-[36rem] object-fill shadow-3xl rounded-2xl w-full" :src="web3" alt="">
            </div>
            <aside class="md:w-4/6 mt-[2.5rem] md:mt-0">
                <h1 class="font-bold font-madeForDisplayHeavy mb-3  md:text-3xl">Streamline your back office</h1>
                <article class="text-sm xxs:text-base md:text-xl my-2">Streamline your operations with our intuitive admin dashboard. Gain full control and easily manage your data, users, and settings in one centralized hub.Access real-time insights and make informed decisions with our user-friendly interface. Simplify your administrative tasks and enhance eciency with our powerful admin dashboard.</article>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Dashboard</article>
                </div>
                <div class="flex mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Communication</article>
                </div>
                <div class="flex mb-[1.4rem] mt-[0.4rem]">
                    <article class="pt-1 md:pt-1.5 mr-3">
                        <carret-right :fill="['white']" :class="[' w-[1.3em] h-[1.3em] md:h-[2em] md:w-[2em]'] "/>
                    </article>
                    <article class="font-bold font-madeForDisplayHeavy text-sm xs:text-base md:text-xl md:pt-0.5">Analytics  </article>
                </div>
                   <router-link to="/pricing" class="w-5/12 md:text-lg  bg-[#D0F224] px-5 py-2 font-madeForDisplayHeavy font-bold text-black hover:text-black hover:bg-[#687334] transition-colors duration-200 ease-in-out hover:text-white  rounded-md ">Launch my website</router-link>
            </aside>
        </div>
    </section>
</template>