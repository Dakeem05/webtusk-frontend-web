<script setup>
    import NavBar from '../components/common-components/NavBar.vue';
    import Footer from '../components/common-components/FooterPart2.vue';
    import TestimoniesPart from '../components/common-components/TestimoniesPart.vue';
    import Hero from '../components/home-components/HeroNew.vue';
    import Section1 from '../components/home-components/Section1.vue';
    import Section2 from '../components/home-components/Section2.vue';
    import Section4 from '../components/home-components/Section4.vue';
    import Section3 from '../components/home-components/Section3.vue';
    import Section5 from '../components/home-components/Section5.vue';
    // import Section6 from '../components/home-components/Section6.vue';
    import Section7 from '../components/home-components/Section10.vue';
    import Section8 from '../components/home-components/Section11.vue';
    import Section9 from '../components/home-components/Section12.vue';
    import Section10 from '../components/home-components/Section13.vue';

    import { ref } from "vue";

    const isopen = ref(false);

  const isclose = ref(false);

  const isNavBarOpen = (value) => {
    isopen.value = value
    isclose.value = false
  }

  const isNavBarClose = (value) => {
    isclose.value = value
    isopen.value = false
  }
</script>

<template>
    <section @click="freeHandler">
        <aside >
            <nav-bar @openBar="isNavBarOpen" @closeBar='isNavBarClose'/>
        </aside>
        <section :class="[{' opacity-50 lg:opacity-100' : isopen === true, 'opacity-100' : isclose === false }]" class="">
            <div>
                <Hero>
                </Hero>
            </div>
            <div class="">
                <section-1>
                    <template #h1>
                        <p>Done-for-you Website Creation: </p>
                    </template>
                    <template #b2>
                        <p>Establish a memorable online identity by registering your domain name through Kobocloud. Make it easier for customers to find and remember you.</p>
                    </template>
                    <template #h2>
                        <p>Domain Name:</p>
                    </template>
                    <template #b1>
                        <p>We will craft your online presence effortlessly with our intuitive website builder. Choose from stunning templates, customize your design, and launch a professional website that reflects your brand</p>
                    </template>
                    <template #h3>
                        <p>Bookings & Scheduling:</p>
                    </template>
                    <template #b3>
                        <p>Streamline appointment bookings and scheduling. Whether you're in the service industry or offer consultations, provide a convenient booking experience for your clients.</p>
                    </template>
                    <template #h4>
                        <p>eCommerce:</p>
                    </template>
                    <template #b4>
                        <p>Open your virtual doors to a global audience. Showcase and sell your products with a fully integrated online store. Manage inventory, process orders, and offer a seamless shopping experience.</p>
                    </template>
                </section-1>
            </div>
            <div class="mt-[6rem]">
                    <section-9></section-9>
                </div>
            <div class="mt-[5rem]">
                <section-7></section-7>
            </div>
            <div class="my-[5rem]">
                <section-3>
                    <template #h1>
                        <p>Run your business.</p>
                    </template>
                    <template #b1>
                        <p>Efficiency is the cornerstone of success. With our comprehensive suite of tools and resources, you can effectively manage every facet of your business operations. From organizing tasks to monitoring performance, our platform provides you with the control you need to steer your business toward growth.</p>
                    </template>
                    <template #h2>
                        <p>Sell Everywhere.</p>
                    </template>
                    <template #b2>
                        <p>Simplicity is sophistication. Our user-friendly interface and intuitive features ensure that every interaction with our platform is a breeze. You don't need to be a tech expert to navigate and leverage our tools. Experience a seamless journey that allows you to focus on what truly matters-growing your business.</p>
                    </template>
                    <template #h3>
                        <p>Seamless Simplicity.</p>
                    </template>
                    <template #b3>
                        <p>The world is your marketplace. Expand your reach beyond borders and connect with customers from around the globe. Our platform empowers you to seamlessly sell your products or services across various online channels, unlocking unlimited opportunities for growth and profitability.</p>
                    </template>
                    <template #h4>
                        <p>Manage your staff.</p>
                    </template>
                    <template #b4>
                        <p>A strong team is the backbone of every successful venture. Effectively manage your staff, assign tasks, and monitor progress with our integrated tools. From communication to collaboration, our platform streamlines staff management, ensuring that everyone is aligned and working towards your business's goals.</p>
                    </template>
                </section-3>
            </div>
            <div class="mt-[6rem]">
                <section-4>
                  
                </section-4>
            </div>
            <div class="mt-[6rem]">
                <section-8/>
            </div>
            <div class="">
                <section-2>
                    <template #h1>
                        <p>Unravel a flawless website, command </p>
                    </template>
                    <template #h2>
                        <p>cutting-edge tools, and script your own success story!</p>
                    </template>
                    <template #h3>
                        <p>Unravel a flawless website, command cutting-edge tools, and script your own success story!</p>
                    </template>
                    <template #b>
                        <p>We're dedicated to empowering entrepreneurs like you to thrive in the digital world. Our comprehensive suite of features is designed to help you build scale and succeed with ease. Whether you're just starting or aiming for exponential growth. We are here to support every step of your journey</p>
                    </template>
                </section-2>
            </div>
         
            <div class="">
                <section-10>
                  
                </section-10>
            </div>
           
                <div class="mt-[6rem]">
                    <section-5></section-5>
                </div>
                <div class="w-[100vw] mt-[6rem]">
                    <testimonies-part/>
                </div>
                <div class="mt-[5rem]">
                    <!-- <section-6></section-6> -->
                    <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
        
        <!-- section 4 component for home page -->
        <!-- <div class="absolute w-full left-0 h-[27rem]  bg-[#1238bf]"></div> -->
        <aside class=" relative  text-white bg-black w-full py-[4rem] sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] xl:p-[4rem] shadow-xl flex mb-[3rem] flex-col">
            <div class="w-full lg:w-8/12 ">
                <h1 class="xs:text-base text-sm md:text-lg font-montserrat lg:text-2xl font-bold">The only website technology platform that instantly deploy your BackOffice in a single system. Remove the frustration and unending subscriptions, streamline your business at scale.</h1>
                <h1 class="mt-3 md:text-base font-madeForDisplayHeavy lg:text-2xl font-light">What all your subscription tools promise— <span class="font-madeForDisplayVariable italic"> We delivers</span> </h1>
            </div>
            <div class=" w-full lg:w-1/4">
                  <router-link class="text-black hover:text-black bg-white py-2 mt-[3rem] hover:bg-slate-200 flex px-[2rem] w-fit " to="/pricing">
                <span class="flex font-bold font-madeForDisplayHeavy gap-2 sm:text-2xl">
                    <article class="">Get Started</article>
                    <article class="pt-0.5"><arrow-right/></article>
                </span>
            </router-link>
            </div>
        </aside>
    </section>
                </div>
                <div class="mt-[5rem]">
                    <Footer></Footer>
                </div>
            </section>
    </section> 
</template>


<style>

</style>