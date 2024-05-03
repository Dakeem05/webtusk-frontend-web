<script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue"
    import NavBar from "../components/common-components/NavBar.vue";
    import FooterPart from "../components/common-components/FooterPart2.vue";
    import TestimoniesPart from "../components/common-components/TestimoniesPart.vue";
    import TablePart from "../components/pricing-components/TablePart.vue";
    import Loading from "../components/Icons/Loading.vue";
    import PageLoading from "../components/Icons/PageLoading.vue";
    import DotIcon from "../components/Icons/TickIcon.vue";
    import axios from "axios";
    import ArrowRight from '../components/Icons/ArrowRight.vue'
    // import Section4 from "../components/home-components/Section6.vue";
    const plansArray = ref([]);
    const isAnnual = ref(true)
    const isLoading = ref(true);


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

    const isAnnualHandler = async () => {
        isAnnual.value = !isAnnual.value
        if (isAnnual.value){    
             try{

            const res =  await axios.get('https://api-control.tusksite.com/api/V1/plansAnnually');
            //   console.log(res.data);
            plansArray.value = res.data
            isLoading.value = false;
            console.log(plansArray.value);
            } catch (err){
                // console.error(err);
                console.error(err);

        }
            } else {
                try{

                const res =  await axios.get('https://api-control.tusksite.com/api/V1/plansMonthly');
                //   console.log(res.data);
                plansArray.value = res.data
                isLoading.value = false;
                console.log(plansArray.value);
                } catch (err){
                    // console.error(err);
                    console.error(err);

                }

        }
        console.log(price);
    }

    onMounted( async () => {
         try{

          const res =  await axios.get('https://api-control.tusksite.com/api/V1/plansAnnually');
        //   console.log(res.data);
        isLoading.value = false;
          plansArray.value = res.data
          console.log(plansArray.value);
        } catch (err){
            // console.error(err);
            console.error(err);

        }
    })

</script>

<template>
    <aside class="fixed top-0 w-full z-30">
        <nav-bar @openBar="isNavBarOpen" @closeBar='isNavBarClose'/>
    </aside>
<div :class="[{' opacity-50 lg:opacity-100' : isopen === true, 'opacity-100' : isclose === false }]" class="">
    <section  class=" ">
        <div class="mt-[8rem] mx-auto md:max-w-7xl">
            <div class="absolute overflow-x-hidden hidden sm:flex h-[80vh] w-[100%] items-center justify-center before:absolute before:h-[80%] left-0 before:bg-gradient-to-b before:from-black before:to-black rounded-b-[30%]  top-[1rem] before:rounded-b-[30%] before:w-[100%] before:bg-black"></div>
            <div :class="{'pb-[15rem] pt-[7rem]' : isLoading}" class="xl:mx-0  sm:mx-[3rem] relative xs:mx-[2rem] sm:text-white xxs:mx-[1rem] mx-[0.5rem]">
                <h1 class="md:text-4xl  xxs:text-2xl text-lg font-bold font-madeForDisplayBold text-center">All done for you, No hidden costs.</h1>
                <h1 class="md:text-4xl  xxs:text-2xl text-lg font-bold font-madeForDisplayBold text-center"> So much more than a website</h1>
                <article class="text-sm  xs:text-base text-center sm:text-lg md:text-[1.4rem] md:w-4/5 mx-auto mt-3 mb-6">Whether you're a solo business owner, a growing startup or a large company  Webtusk is here to help you build high-performing websites for the right price.  Pay for as little or as much usage as you need make your web presence work as hard as you do </article>
            </div>
            <div class="xl:mx-0 sm:mx-[3rem]  relative xs:mx-[2rem] xxs:mx-[1rem] mx-[0.5rem]">
                <span v-if="!isLoading" class="flex  font-madeForDisplayMedium mx-auto mt-8 gap-3 border-[0.2rem] p-1 rounded-3xl sm:rounded-4xl w-fit">
                    <button @click="isAnnualHandler" :class="{'text-black sm:text-white bg-transparent' : isAnnual === true, 'text-white bg-black sm:text-black sm:bg-white' : isAnnual ===  false}" class="md:text-xl xxs:text-base text-sm font-lato font-bold  lg:px-4 py-1 px-2 rounded-4xl">Monthly</button>
                    <button @click="isAnnualHandler" :class="{'text-white bg-black sm:text-black sm:bg-white' : isAnnual === true, 'text-black sm:text-white bg-transparent' : isAnnual ===  false}" class="md:text-xl xxs:text-base text-sm font-lato font-bold  lg:px-4 py-1 px-2 rounded-4xl flex gap-1">Annually <span class="xs:block hidden">(Save 25%)</span> </button>
                </span>
            </div>
            <section class='grid xl:mx-0 sm:mx-[1rem] mx-[0.5rem] md:grid-cols-3 md:gap-[2rem] lg:gap-[5rem]'>

            <div v-for="(plan, i) in plansArray" :key="i" class=" mt-16 font-montserrat w-full   text-black  ">
              
                  
                    <div  class="px-5 rounded-2xl pt-7 pb-[9rem] mx-auto bg-white relative border-[1.5px] border-[bg-rgba(0, 0, 0, 0.25)] shadow-md lg:shadow-none ">
                        <h1 v-if='plan.is_popular' class="md:text-sm font-bold font-montserrat w-full  flex place-content-center">
                            <span class=" absolute px-1 xxs:px-2 xs:px-4  sm:px-6 py-2 bg-black border-white border-[0.2rem] text-white font-madeForDisplayMedium rounded-md -top-[1.5rem]">
                                RECOMMENDED
                            </span>
                        </h1>
                        <div>
                            
                        <h1 class="md:text-3xl xxs:text-xl font-madeForDisplaySemiBold font-bold ">{{plan.title}}</h1>
                        <h5 class="md:text-sm font-madeForDisplaySemiBold font-bold my-2">+ one-time $199 setup fee</h5>
                         <span class="font-lato -space-y-1 xl:block hidden md:text-base font-semibold">
                            <p class="">{{plan.description}}</p>
                        </span>
                        <span class="font-lato block xl:hidden -space-y-1 md:text-base font-semibold">
                            <p class="">The great ingredients you need to create your commerce website, subscription, services, accept paid and free booking for life, on auto-scaling technology!</p>
                        
                        </span>
                        <span class="flex font-madeForDisplayMedium my-[2rem]">
                            <aside class="text-5xl font-madeForDisplaySemiBold font-bold ">${{plan.actual_price}}</aside>
                            <aside class="text-xl mt-5 font-extralight">/</aside>
                            <aside>
                                <article class="md:text-sm font-medium mt-7">month</article>
                            </aside>
                        </span>
                        <h5 class="font-bold mt-1 font-madeForDisplaySemiBold mb-[1rem]">Everything in Starter Package +</h5>
                        <span v-for="(feature, i) in plan.features" :key="i" class="">
                             
                            <div class="flex mb-[0.3rem] gap-3 ">
                                <article class="pt-1"><dot-icon/></article>
                                <p class="font-lato">{{feature.title}}</p>
                            </div>
                        </span>
                        <div class="flex justify-center mx-auto">
                            <span class="absolute bottom-[2rem]">
                                <router-link :to="{name: 'register', params: {id: plan.id}}" class="font-bold bg-black rounded-xl  justify-center font-madeForDisplaySemiBold text-white py-2.5 px-10">Get Started</router-link>

                            </span>
                        </div>
                        
                        </div>
                    </div>
                   
            </div>
            </section>
            <div ref="rmFixed" :class="{'mt-[20rem]' : isLoading}" class="md:text-3xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] hidden sm:block font-madeForDisplaySemiBold text-center mt-[3rem]">
                <article>No contracts, no commitments, no hidden fees.</article>
                <article>Try us out today with our 30 day money back guarantee.</article>
            </div>
            <div ref="rmFixed" class="md:text-3xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] block sm:hidden font-madeForDisplaySemiBold text-center mt-[3rem]">
                <article>No contracts, no commitments, no hidden fees. Try us out today with our 30 day money back guarantee.</article>
            </div>
            <section class="xl:px-5 hidden sm:block sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem]">
                <div ref="fixedDiv" :class="{'docking  ' : isFixed === true, 'dock' : isNotFixed }" class="flex w-full md:max-w-7xl px-[2rem] top-[1rem] gap-[2vw] xl:gap-5 bg-black p-5 rounded-2xl text-white mt-[3rem]">
                <span class="mid:w-10/12 xl:w-6/12 mb-[6rem]">
                    <h1 class="xl:text-2xl lg:text-xl md:text-lg font-bold font-madeForDisplayMedium">Compare design scope</h1>
                    <article  class="pt-[1rem] lg:text-base sm:text-xs md:text-sm mid:block hidden">Our pricing is tiers up based on the complexity of work you need to access from a single designer</article>
                    <article class="pt-[1rem] lg:text-base sm:text-xs md:text-sm mid:block hidden">Join us today and experience the exceptional service that our subscription service has to offer.</article>
                    <article class="pt-[1rem] lg:text-base sm:text-xs md:text-sm block mid:hidden">Our pricing is tiers up based on the complexity of work you need to access from a single designer. Join us today and experience the exceptional service that our subscription service has to offer.</article>
                </span>
                <span class="xl:w-4/12 relative ">
                    <h1 class="xl:text-2xl lg:text-xl md:text-lg font-bold font-madeForDisplayMedium">Starter</h1>
                    <article class="pt-[1rem] lg:text-base sm:text-xs md:text-sm">The basic ingredients you need to create your commerce website, subscription, services, commerce website, subscription, services,</article>
                    <button class="bg-white text-black bottom-0 font-madeForDisplayMedium absolute xl:px-14 rounded-lg w-full mt-5 px-[0.5vw]  lg:text-xl font-bold mx-auto py-2">Get Started</button>
                </span>
                <span class="xl:w-4/12 relative">
                    <h1 class="xl:text-2xl lg:text-xl md:text-lg font-bold font-madeForDisplayMedium">Growth</h1>
                    <article class="pt-[1rem] lg:text-base sm:text-xs md:text-sm">The great ingredients you need to create your commerce website, subscription, services, accept paid and free booking for life, on auto-scaling technology!</article>
                    <button class="bg-white absolute bottom-0 text-black xl:px-14 font-madeForDisplayMedium rounded-lg w-full mt-5 lg:text-xl  font-bold mx-auto py-2">Get Started</button>
                </span>
                <span class="xl:w-4/12 relative">
                    <h1 class="xl:text-2xl lg:text-xl md:text-lg font-bold font-madeForDisplayMedium">Enterprise</h1>
                    <article class="pt-[1rem] lg:text-base sm:text-xs md:text-sm">StartAdvance tools you need to create your commerce website, subscription, services, accept paid and free booking for life, on auto-scaling technology!</article>
                    <button class="bg-white absolute bottom-0 font-madeForDisplayMedium text-black xl:px-14 rounded-lg w-full mt-5 lg:text-xl  font-bold mx-auto py-2">Get Started</button>
                </span>
            </div>
            </section>
            <!-- <span>{{plansArray}}</span> -->
            <div  ref="sectionToAnimate" class="-mt-[2rem] xl:px-5 hidden sm:block sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem]">

            <table-part/>
            </div>
             </div>
               <div ref="sectionToAnimate2" class="w-[100vw] mt-[3rem]">
            <testimonies-part/>
       
           <div class="mt-[3rem]">
        <!-- <section-4/> -->
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
        </div>
        <div  class=" ">
        <footer-part/>
      </div>
    </section>
    </div>
</template>

<style scoped>
.docking {
    position: fixed;
  top: 0;

}
.dock {
    position: relative;
  top: 0;

}
.j{

}
</style>