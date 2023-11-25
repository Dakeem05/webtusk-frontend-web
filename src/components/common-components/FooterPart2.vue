<script setup>
    import PinterestIcon from "../Icons/PinterestIcon.vue";
    import YoutubeIcon from "../Icons/YoutubeIcon.vue";
    import FacebookIcon from "../Icons/FacebookIcon.vue";
    import InstagramIcon from "../Icons/InstagramIcon.vue";
    import TwitterIcon from "../Icons/TwitterIcon.vue";
    import LinkedinIcon from "../Icons/LinkedinIcon.vue";
    import TiktokIcon from "../Icons/TiktokIcon.vue";
    import CopyRight from "../Icons/CopyRight.vue";
    import {ref } from 'vue';
    import RightIcon from "../Icons/ArrowRight.vue";
    import DownIcon from "../Icons/ArrowDown.vue"

    let drop1 = ref(false);
    let drop2 = ref(false);
    let drop3 = ref(false);

      function drop1Handler () {
        drop1.value = !drop1.value;
        drop2.value = false;
        drop3.value = false;
    }
    function drop2Handler () {
        drop1.value = false;
        drop2.value = !drop2.value;
        drop3.value = false;
    }
    function drop3Handler () {
        drop1.value = false;
        drop2.value = false;
        drop3.value = !drop3.value;
    }
</script>

<template>
    
    <section class="text-white  ">
         <div class=" bg-black w-full left-0 ">
        
        <div class="relative max-w-7xl mx-auto pt-[4rem]   pb-[3rem] ">
            
        <div class="flex px-[2rem] flex-col  lg:flex-row gap-3  lg:gap-5">
            <span class="flex place-items-center lg:place-items-start gap-5 mr-6 flex-col lg:w-6/12">
                <article>
                    <img class="w-[10rem]" src="../../assets/images/logo-white.svg" alt="">
                </article>
                <article class="text-xs text-center w-10/12 lg:text-start md:text-sm lg:text-lg">We are great web design and hosting subscription service dedicated to providing comprehensive solutions for individuals and businesses seeking to establish a strong online presence.</article>
                <aside class="flex gap-3">
                    <span>
                        <a href="http://pinterest.com" target="_blank" rel="noopener noreferrer">
                        <pinterest-icon/>
                        </a>
                    </span>
                    <span>
                        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        <youtube-icon/>
                        </a>
                    </span>
                    <span>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        <facebook-icon/>
                        </a>
                    </span>
                    <span>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                        <instagram-icon/>
                        </a>
                    </span>
                    <span>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                        <twitter-icon/>
                        </a>
                    </span>
                    <span>
                        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <linkedin-icon/>
                        </a>
                    </span>
                    <span class="pt-0.5">
                        <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <tiktok-icon/>
                        </a>
                    </span>
                  
                </aside>
                
            </span>
            <aside class="flex lg:w-2/12 flex-col gap-2">
                    <h1 class="lg:text-2xl font-madeForDisplayBold font-bold relative">
                        <span>
                            Product
                    <button @click="drop1Handler"  v-if="drop1" class="block lg:hidden absolute right-4 top-0 pl-90"><right-icon/></button>
                               <button @click="drop1Handler" v-else class="block lg:hidden absolute right-4 top-0 pl-96"><down-icon/></button>
                            </span>

                    </h1>
                    <router-link to="/pricing" class="hidden lg:block lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Pricing</router-link>
                    <router-link to="/website-creation" class="hidden lg:block lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Website Creation</router-link>
                    <router-link to="/web-builder" class="hidden lg:block lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Web Builder</router-link>
                        <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-200 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
                    <span v-show="drop1" class="flex flex-col gap-2 lg:hidden">
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Pricing</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Guides</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Videos</router-link>

                    </span>

      </transition>
      <hr class="mt-4 block lg:hidden">
            </aside>
            <aside class="flex lg:w-2/12 flex-col gap-2">
                    <h1 class="lg:text-2xl font-madeForDisplayBold font-bold relative">
                        <span>
                            Company
                            </span>
                         <button @click="drop2Handler"  v-if="drop2" class="block lg:hidden absolute right-4 top-0  pl-90"><right-icon/></button>
                               <button @click="drop2Handler" v-else class="block lg:hidden absolute right-4 top-0 pl-96"><down-icon/></button>
                    </h1>
                    <router-link to="/login" class="hidden lg:block lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">About Us</router-link>
                    <router-link to="/login" class="hidden lg:block lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Career</router-link>
                    <router-link to="/login" class="hidden lg:block lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Blog</router-link>
                    <router-link to="/login" class="hidden lg:block lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Contact Us</router-link>
                                <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-200 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
                    <span v-show="drop2" class="flex flex-col gap-2 lg:hidden">
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-green-600 transition-colors duration-200 ease-in-out">About Us</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Career</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Blog</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Contact Us</router-link>
                     </span>

      </transition>
       <hr class="mt-4 block lg:hidden "> 
            </aside>
            <aside class="flex lg:w-2/12 flex-col gap-2">
                    <h1 class="lg:text-2xl font-madeForDisplayBold font-bold relative">
                        <span>
                            Account
                                <button @click="drop3Handler"  v-if="drop3" class="block lg:hidden absolute right-4 top-0 pl-90"><right-icon/></button>
                               <button @click="drop3Handler" v-else class="block lg:hidden absolute right-4 top-0 pl-96"><down-icon/></button>
                            </span>
                            </h1>
                    <router-link to="/login" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Login</router-link>
                    <router-link to="/register" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Get Started</router-link>
                    <router-link to="/login" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Flash Sales</router-link>
                    <router-link to="/login" class="hidden lg:block  lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Refund Policy</router-link>
                           <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-200 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
                    <span v-show="drop3" class="flex flex-col gap-2 lg:hidden">
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Login</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Affiliates</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Resellers</router-link>
                    <router-link to="/login" class="lg:text-base text-sm hover:underline hover:text-[#d0f224] transition-colors duration-200 ease-in-out">Refund Policy</router-link>
                          </span>

      </transition>
       <hr class="mt-4 block lg:hidden"> 
            </aside>
        </div>
        <hr class="hidden lg:block mt-9 mx-[2rem] bg-gray-100 border-0 rounded h-[2px]">
        <div class="flex mx-[2rem] place-items-center flex-col lg:flex-row mt-2 relative">
            
            <span class="flex  gap-1">
                
                <article class="pt-[0.3rem]">
                    <copy-right/>
                </article>
                <article>2023</article>
                <article>Copyright Webtusk</article>
            </span>
            <span class="lg:absolute flex  gap-1 lg:right-0">
                    <router-link to="/login" class="hover:underline hover:text-[#d0f224] transition-colors text-sm text-gray-400 duration-200 ease-in-out">Terms & Conditions </router-link>
                <article class="text-sm text-gray-400 ">|</article>
                    <router-link to="/login" class="hover:underline hover:text-[#d0f224] text-sm text-gray-400  transition-colors duration-200 ease-in-out">Privacy</router-link>

                
            </span>
        </div>
        </div>
        </div>
    </section>
</template>