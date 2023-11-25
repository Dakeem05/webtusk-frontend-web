<script setup>
    import {ref } from 'vue';
    import RightIcon from "../Icons/RightArrow.vue";
    let drop1 = ref(false);
    let drop2 = ref(false);
    let drop3 = ref(false);
    let drop4 = ref(false);
    let drop5 = ref(false);

      function drop1Handler () {
        drop1.value = !drop1.value;
        drop2.value = false;
        drop3.value = false;
        drop4.value = false;
        drop5.value = false;
    }
    function drop2Handler () {
        drop1.value = false;
        drop2.value = !drop2.value;
        drop3.value = false;
        drop4.value = false;
        drop5.value = false;
    }
    function drop3Handler () {
        drop1.value = false;
        drop2.value = false;
        drop3.value = !drop3.value;
        drop4.value = false;
        drop5.value = false;
    }
    function drop4Handler () {
        drop1.value = false;
        drop2.value = false;
        drop3.value = false;
        drop4.value = !drop4.value;
        drop5.value = false;
    }
    function drop5Handler () {
        drop1.value = false;
        drop2.value = false;
        drop3.value = false;
        drop4.value = false;
        drop5.value = !drop5.value;
    }
</script>

<template>
  <section class="bg-black  xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] text-white w-screen">
    <div class="max-w-7xl pt-[5rem] pb-[7rem] lg:pt-[10rem] lg:pb-[15rem] flex flex-col lg:flex-row place-content-center gap-[2rem] lg:gap-[5rem] mid:gap-[6rem] xl:gap-[9rem] mx-auto">
        <aside class=" ">
            <picture class=" flex lg:block lg:justify-normal justify-center">
                <router-link to="/" :class="{'block' :scrolled === true, 'hidden' : scrolled === false }" class="">
                    <img class="max-w-[9rem]" src="../../assets/Images/logo-white.svg" alt="Webtusk"/>
                </router-link>
            </picture>
            <h1 class=" sm:text-2xl mt-[3rem] font-madeForDisplayBold block lg:hidden w-full font-bold relative">
                        <span class="">
                            Socials
                    <button @click="drop1Handler" v-if="drop1" class="block lg:hidden absolute right-0 top-0  rotate-[270deg]  "><right-icon /></button>
                               <button @click="drop1Handler" v-else class="block lg:hidden absolute right-0 rotate-90 top-0 "><right-icon/></button>
                            </span>

                    </h1>
            <ul class="mt-[1.5rem] hidden lg:block">
                <li class="mt-4">
                    <a href="http://twitter.com" class="hover:underline" target="_blank">Twitter</a>
                </li>
                <li class="mt-4">
                    <a href="http://youTube.com" class="hover:underline"  target="_blank">YouTube</a>
                </li>
                <li class="mt-4">
                    <a href="http://instagram.com" class="hover:underline"  target="_blank">Instagram</a>
                </li>
                <li class="mt-4">
                    <a href="http://facebook.com" class="hover:underline"  target="_blank">Facebook</a>
                </li>
            </ul>
                <transition enter-active-class="transform transition duration-500 ease-custom" enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100" leave-active-class="transform transition duration-200 ease-custom" leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="drop1" class="flex flex-col gap-2 lg:hidden">
                            <li class="mt-4">
                                <a href="http://twitter.com" class="hover:underline" target="_blank">Twitter</a>
                            </li>
                            <li class="mt-4">
                                <a href="http://youTube.com" class="hover:underline"  target="_blank">YouTube</a>
                            </li>
                            <li class="mt-4">
                                <a href="http://instagram.com" class="hover:underline"  target="_blank">Instagram</a>
                            </li>
                            <li class="mt-4">
                                <a href="http://facebook.com" class="hover:underline"  target="_blank">Facebook</a>
                            </li>
                        </ul>

            </transition>
            <hr class="mt-4 block lg:hidden">
        </aside>
            <aside class="">
                <header>
                    <h1 class="sm:text-2xl font-madeForDisplayBold w-full font-bold relative">
                         <span class="">
                            Use Cases
                    <button @click="drop2Handler" v-if="drop2" class="block lg:hidden absolute right-0 top-0  rotate-[270deg]  "><right-icon /></button>
                               <button @click="drop2Handler" v-else class="block lg:hidden absolute right-0 rotate-90 top-0 "><right-icon/></button>
                            </span>
                    </h1>
                </header>
                <ul class="mt-[1.5rem] hidden lg:block">
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/startups">Startups</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/agencies">Agencies</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/freelancers">Freelancers</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Enterprise</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/online-store">Online store</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/real-estate">Real-estate</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/restaurants">Restaurants</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/courses">Courses</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/digital">Digital</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/fitness">Fitness</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/law-firms">Law Firms</router-link>
                    </li>
                </ul>
                <transition enter-active-class="transform transition duration-500 ease-custom" enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100" leave-active-class="transform transition duration-200 ease-custom" leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="drop2" class="flex flex-col gap-2 lg:hidden">
                            <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/startups">Startups</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/agencies">Agencies</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/freelancers">Freelancers</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Enterprise</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/online-store">Online store</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/real-estate">Real-estate</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/restaurants">Restaurants</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/courses">Courses</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/digital">Digital</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/fitness">Fitness</router-link>
                            </li><li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/law-firms">Law Firms</router-link>
                            </li>
                        </ul>

            </transition>
                <hr class="mt-4 block lg:hidden">
            </aside>
            <aside class="">
                <header>
                    <h1 class="sm:text-2xl font-madeForDisplayBold w-full font-bold relative">
                         <span class="">
                            Explore
                    <button @click="drop3Handler" v-if="drop3" class="block lg:hidden absolute right-0 top-0  rotate-[270deg]  "><right-icon /></button>
                               <button @click="drop3Handler" v-else class="block lg:hidden absolute right-0 rotate-90 top-0 "><right-icon/></button>
                            </span>
                    </h1>
                </header>
                <ul class="mt-[1.5rem] hidden lg:block">
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/website-creation">Website creation</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/ecommerce">Ecommerce</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/security">Security</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Enterprise</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Web Builder </router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/web-builder">Subscriptions</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/email-marketing">Email marketing</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/manage">Manage </router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/infrastructure">Infrastructure</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/integrations">Integrations</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/domain-name">Domain Name</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/themes">Themes</router-link>
                    </li>
                </ul>
                <transition enter-active-class="transform transition duration-500 ease-custom" enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100" leave-active-class="transform transition duration-200 ease-custom" leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="drop3" class="flex flex-col gap-2 lg:hidden">
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/website-creation">Website creation</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/ecommerce">Ecommerce</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/security">Security</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Enterprise</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Web Builder </router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/web-builder">Subscriptions</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/email-marketing">Email marketing</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/manage">Manage </router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/infrastructure">Infrastructure</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/integrations">Integrations</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/domain-name">Domain Name</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/themes">Themes</router-link>
                            </li>
                        </ul>

                </transition>
                <hr class="mt-4 block lg:hidden">
            </aside>
            <aside class="">
                <header>
                    <h1 class="sm:text-2xl font-madeForDisplayBold w-full font-bold relative">
                         <span class="">
                            Resources 
                    <button @click="drop4Handler" v-if="drop4" class="block lg:hidden absolute right-0 top-0  rotate-[270deg]  "><right-icon /></button>
                               <button @click="drop4Handler" v-else class="block lg:hidden absolute right-0 rotate-90 top-0 "><right-icon/></button>
                            </span>
                    </h1>
                </header>
                <ul class="mt-[1.5rem] hidden lg:block">
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Inspiration</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Find Add-ons </router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Templates</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Developers </router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Partners</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Blog</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Help center</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/">Community</router-link>
                    </li>
                </ul>
                <transition enter-active-class="transform transition duration-500 ease-custom" enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100" leave-active-class="transform transition duration-200 ease-custom" leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="drop4" class="flex flex-col gap-2 lg:hidden">
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Inspiration</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Find Add-ons </router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Templates</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Developers </router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Partners</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Blog</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Help center</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/">Community</router-link>
                            </li>
                        </ul>

                </transition>
                <hr class="mt-4 block lg:hidden">
            </aside>
            <aside class="">
                <header>
                    <h1 class="sm:text-2xl font-madeForDisplayBold w-full font-bold relative">
                         <span class="">
                            Compare
                    <button @click="drop5Handler" v-if="drop5" class="block lg:hidden absolute right-0 top-0  rotate-[270deg]  "><right-icon /></button>
                               <button @click="drop5Handler" v-else class="block lg:hidden absolute right-0 rotate-90 top-0 "><right-icon/></button>
                            </span>
                    </h1>
                </header>
                <ul class="mt-[1.5rem] hidden lg:block">
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/features">Features</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/pricing">Pricing</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/pricing">Get Started</router-link>
                    </li>
                    <li class="mt-4">
                        <router-link class="hover:text-white hover:underline" to="/login">Login</router-link>
                    </li>
                 
                </ul>
                <transition enter-active-class="transform transition duration-500 ease-custom" enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100" leave-active-class="transform transition duration-200 ease-custom" leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="drop5" class="flex flex-col gap-2 lg:hidden">
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/features">Features</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/pricing">Pricing</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/pricing">Get Started</router-link>
                            </li>
                            <li class="mt-4">
                                <router-link class="hover:text-white hover:underline" to="/login">Login</router-link>
                            </li>
                        </ul>
                </transition>
                <hr class="mt-4 block lg:hidden">
            </aside>
    </div>
    <div class="pb-[1rem] lg:pb-0 text-center">
        <router-link to="cookie" class="hover:text-white hover:underline mr-[2rem]">Cookie settings</router-link>
        <router-link to="language" class="hover:text-white hover:underline">English</router-link>
    </div>
  </section>
</template>

<style>

</style>