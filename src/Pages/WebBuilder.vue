<script setup>
    import NavBar from '../components/common-components/NavBar.vue';
    import Footer from '../components/common-components/FooterPart2.vue';
    import Hero from '../components/home-components/Hero2.vue';
    import Section1 from '../components/platform-components/Section4.vue';
    import Section2 from '../components/home-components/Section3.vue';
    import Section3 from '../components/home-components/Section4.vue';
    import Section4 from '../components/home-components/Section5.vue';
    import Section5 from '../components/home-components/Section6.vue';

    
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
  <section>
    <aside>
        <nav-bar @openBar="isNavBarOpen" @closeBar='isNavBarClose'/>
    </aside>
    <section :class="[{' opacity-50 lg:opacity-100' : isopen === true, 'opacity-100' : isclose === false }]">
        <div>
            <Hero>
                <template #h1>
                    Unleash
                </template>
                <template #h2>
                    Your Creative 
                </template>
                <template #h3>
                    Vision!
                </template>
            </Hero>
        </div>
        <div class="mt-[6rem]">
            <section-1>
                    <template #h1>
                        <p>Explore Our Web Builder Features</p>
                    </template>
                    <template #b>
                        <p>We're dedicated to empowering entrepreneurs like you to thrive in the digital world. Our comprehensive suite of features is designed to help you build scale and succeed with ease. Whether you're just starting or aiming for exponential growth. We are here to support every step of your journey</p>
                    </template>
            </section-1>
        </div>
        <div class="mt-[6rem]">
            <section-2>
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
            </section-2>
        </div>
        <div class="mt-[6rem]">
            <section-3></section-3>
        </div>
        <div class="mt-[6rem]">
            <section-4></section-4>
        </div>
        <div class="mt-[6rem]">
            <section-5></section-5>
        </div>
        <div class="mt-[6rem]">
            <Footer></Footer>
        </div>
    </section>
  </section>
</template>

<style>
</style>