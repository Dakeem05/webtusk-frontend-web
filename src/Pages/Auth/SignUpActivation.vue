<script setup>
    import { ref, onMounted } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";
import { loadStripe } from "@stripe/stripe-js";

// import SrMessages from "./SrMessages.vue";
    // import { useWindowSize } from '@vueuse/core';
    import Tick from "../../components/Icons/Tick.vue";
    import CloseIcon from "../../components/Icons/CloseIcon.vue";
    import Visa from "../../components/Icons/Visa.vue";
    import Jcb from "../../components/Icons/Jcb.vue";
    import Mastercard from "../../components/Icons/Mastercard.vue";
    import AmericanExpress from "../../components/Icons/AmericanExpress.vue";
    import Right from "../../components/Icons/RightArrow.vue";
    // const { width, height } = useWindowSize();
    const isGrowth = ref(false);
    const isBusiness = ref(true);
    const isEnterprise = ref(false);
    const modala = ref(false);
    const modalb = ref(false);
    const modalc = ref(false);
    const isAnnual = ref(false);
    const isModal = ref(false);
const isLoading = ref(true);
const isPreparing = ref(false);
let stripe;
let elements;
let error = ref('')
let total = ref('')
let price = ref('')
let plan = ref([])
let plansArray = ref([])
  const router = useRouter();

  let clientSecret = ref('');
let stripeKey = ref('')

const props = defineProps(['isModal'])

const modalHandler = async () => {
    isModal.value = !isModal.value;
       try{

          const res =  await axios.get('https://api-control.tusksite.com/api/V1/plansMonthly');
        isLoading.value = false;
          plansArray.value = res.data
        //   console.log(plansArray.value);
        } catch (err){
            console.error(err);

        }
}
   
    const isAnnualHandler = async () => {
        isAnnual.value = !isAnnual.value

          if (isAnnual.value){    
             try{

            const res =  await axios.get('https://api-control.tusksite.com/api/V1/plansAnnually');
            plansArray.value = res.data
            isLoading.value = false;
            // console.log(plansArray.value);
            } catch (err){
                console.error(err);

        }
            } else {
                try{

                const res =  await axios.get('https://api-control.tusksite.com/api/V1/plansMonthly');
                plansArray.value = res.data
                isLoading.value = false;
                // console.log(plansArray.value);
                } catch (err){
                    console.error(err);

                }

        }

    }
        let token = localStorage.getItem('webtusk_token');
    onMounted(async () => {
        let token = localStorage.getItem('webtusk_token');
   function getKey () {
    const res = axios.get('https://api-control.tusksite.com/api/V1/getKey', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(async res => {
              stripeKey.value = res.data.data.key
              plan.value = res.data.data.plan;
              price.value = res.data.data.price;
              total.value = res.data.data.total

            
       stripe = await loadStripe(`${stripeKey.value}`);

      async function getClientkey () {
   axios.get('https://api-control.tusksite.com/api/V1/subscription/createPayment', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(async res =>  {
          clientSecret.value = res.data.data.client_secret
    isPreparing.value = (true)
          
 elements = await stripe.elements({ clientSecret: clientSecret.value});

  const paymentElement = elements.create('payment');
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");
  isLoading.value = false;

        }).catch(err=> {
          throw(err)
        })
      }
          getClientkey();


          }).catch(err=> {
            throw(err)
          })
        }
            getKey();

});
      

const choosePlan = async (i) => {
    isLoading.value = true;
    try{

                const res =  await axios.get(`https://api-control.tusksite.com/api/V1/changePlan/${i}`, {
                     headers: {
                         Authorization: `Bearer ${token}`
            }
            });
                //   console.log(res);

                // isLoading.value = false;
                isModal.value = false
                function getKey () {
    const res = axios.get('https://api-control.tusksite.com/api/V1/getKey', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(async res => {
              stripeKey.value = res.data.data.key
              plan.value = res.data.data.plan;
              price.value = res.data.data.price;
              total.value = res.data.data.total

            
       stripe = await loadStripe(`${stripeKey.value}`);

      async function getClientkey () {
   axios.get('https://api-control.tusksite.com/api/V1/subscription/createPayment', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(async res =>  {
          clientSecret.value = res.data.data.client_secret
    isPreparing.value = (true)
          
 elements = await stripe.elements({ clientSecret: clientSecret.value});

  const paymentElement = elements.create('payment');
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");
  isLoading.value = false;

        }).catch(err=> {
          throw(err)
        })
      }
          getClientkey();


          }).catch(err=> {
            throw(err)
          })
        }
            getKey();

                } catch (err){
                    console.error(err);

                }
                isLoading.value = false;
}
const handleSubmit = async () => {
  if (isLoading.value) {
    return;
  }

  isLoading.value = true;

  const response = await stripe.confirmPayment({
    elements,
    confirmParams: {
    },
     redirect: 'if_required'
  });

if (response.error) {
 console.log(response.error.message);
 error.value = `${response.error.message}!!`
 setInterval(() => {
     error.value = ``
 }, 8000);
} else {
    try{
        let id = response.paymentIntent.id;
        let form = ref({
            id:''
        })
        form.value.id = response.paymentIntent.id
        axios.post('https://api-control.tusksite.com/api/V1/subscription/retrievePayment', form.value, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })  
        localStorage.setItem('status', 'progress')
        router.push({path:'/setup'})
    } catch(err){
        console.error(err);
    }
}

  isLoading.value = false;
}
</script>

<template >
<section>   

     <section v-if="isModal"  class="fixed  z-50 top-[1vh] overflow-y-auto overscroll-y-none h-screen md:w-[60vw] mx-[0.5rem] xxs:mx-[1rem] xs:mx-[2rem] lg:w-full sm:w-[70vw]  lg:h-auto lg:top-[8vh] pt-[3rem] pb-[4rem] animate-bounce-up  rounded-lg xs:px-[1.5rem] left-0 right-0 sm:mx-auto lg:max-w-7xl  bg-slate-200">
        <button @click="modalHandler" class="hover:opacity-60 absolute text-2xl right-6 top-4">
            <close-icon :fill="['white']"/>
        </button>
    <h1 class="text-md sm:text-2xl md:text-4xl  font-bold font-madeForDisplayBold text-center flex-col flex "><span>Choose the best package </span></h1>
    <h1 class="text-xs mb-7 mt-4 mx-auto text-center sm:text-sm md:text-lg "> Everything you need for best in class services. Pick a plan to grow your business</h1>
    <div class="flex  font-madeForDisplayMedium border-white mx-auto mt-8 gap-3 border-[0.2rem] p-1 rounded-3xl w-fit">
        <button @click="isAnnualHandler" :class="{'text-black bg-transparent' : isAnnual === true, 'text-white bg-black' : isAnnual ===  false}" class="sm:text-xl md:text-base font-lato font-bold  lg:px-4 py-1 px-2  rounded-3xl">Monthly</button>
        <button @click="isAnnualHandler" :class="{'text-white bg-black' : isAnnual === true, 'text-black bg-transparent' : isAnnual ===  false}" class="sm:text-xl md:text-base font-lato font-bold  lg:px-4 py-1 px-2 flex gap-1 rounded-3xl">Annually <span class="hidden xs:flex">(Save 25%)</span> </button>
    </div>
    <!-- overflow-y-scroll overscroll-y-none -->
    <section class="x grid lg:grid-cols-3 gap-[2rem] mx-[1rem] xs:mx-0">
        <div v-for="(plan, i) in plansArray" :key="i" class=" dark:text-black mt-8 justify-center ">
           
            <aside class="flex mx-auto ">
                    <!-- <div class="w-9  h-9 rounded-full z-20 mt-[7%] border-black border-2">
                        <div v-if="isGrowth" class="w-4 h-4 flex my-2 items-center justify-center rounded-full mx-auto bg-black" ></div>
                    </div > -->

        <div :class="{'border-black' : isGrowth , 'border-gray-200 ' : isGrowth === false}" class="bg-white px-[0.5rem] dark:bg-back xs:px-[2rem] py-[1rem] border rounded-3xl shadow-lg  hover:cursor-pointer relative ">
            <div @click="growthHandler" >
                            <p class="font-madeForDisplaySemiBold  text-2xl ">{{plan.title}}</p>
                <section class="">
                    <aside class=" gap-[1rem]">
                        <div class="flex pt-[2rem]" >
                            <span class=" text-4xl xs:text-6xl text-left font-bold">${{plan.actual_price}}</span>
                            <span class="pt-3 xs:pt-[2rem] xs:text-xl font-madeForDisplayMedium ">/month</span>
                        </div>
                        <span class="text-left text-xl  font-medium leading-none grid-flow-row">
                            <article class="my-1 text-sm xs:text-base ">
                                
                            {{plan.description}}
                            </article>
                            <span class="font-bold xs:text-base text-sm font-madeForDisplayMedium">+ one-time $199 setup fee</span>
                        </span>
                        <button @click="choosePlan(plan.id)" class="mx-auto flex bg-black text-white px-[2vw] xs:px-[1rem] py-[0.5rem] rounded-lg mt-[2rem] mb-[0.5rem]">Choose plan</button>
                    </aside>

                    <!-- <button  class="flex  justify-center py-[0.5rem] rounded-3xl mt-[1rem]  relative gap-[4rem] decoration-green-500 ">
                        <span class=" pt-2 rotate-90 text-xl" v-if="!modala">
                            <Right :fill="['white']"/>
                        </span>
                        <span class=" pt-1 rotate-[270deg] text-xl" v-if="modala">
                            <Right :fill="['white']" class=""/>
                        </span>

                    </button> -->
                </section>
                <span class="relative mb-2" v-if="modala">
                    
                    <div class="flex   my-1 flex-col" v-for="(array, index) in arrays" :style="{ top: `${index * 20}px` }" :key="index">
                        <div class="flex  text-xl gap-3"><Tick/> {{ array }}</div>
                    </div>
                </span>
        </div>
            </div>
            </aside>

        </div>
        
    </section>
   </section>
<div :class="{'opacity-50' : isModal}" class="text-black opacity-100 max-w-5xl mx-auto pb-[2rem] -mt-[0.5rem]">


   
   
    <div id="coupon" class="my-[2rem] flex flex-col lg:flex-row mx-auto md:w-[60vw] lg:w-full sm:w-[70vw]  border rounded-md py-[2rem] relative gap-[1rem] lg:gap-[2rem] px-[3rem]">
        <h1 class="font-madeForDisplaySemiBold text-lg xxs:text-xl xs:text-2xl">Have a discount code?</h1>
        <div class="lg:absolute right-[3rem]">
            <form action="" class="flex w-full gap-[1rem]">

         <input type="text" name="fname" required placeholder="Coupon code" class="focus:outline-black pl-[1rem] w-full placeholder:font-madeForDisplayMedium focus:outline focus:outline-1 placeholder:text-black text-xl bg-transparent h-12 border-2 border-black rounded-md">
            <button type="submit" class="border rounded-md bg-black border-black  text-white px-[2vw] sm:px-[2rem] sm:text-xl font-madeForDisplaySemiBold font-bold">Apply</button>
            </form>
        </div>
    </div>
   <section class="flex flex-col lg:flex-row sm:w-[70vw] sm:mx-auto my-[3rem] md:w-[60vw] lg:w-full  border">
   
<aside class="lg:w-1/2 px-[2rem] pt-[3rem] ">
        <span class="flex w-full relative">
            <p class=" place-content-start font-madeForDisplayLightItalic">All Prices are in USD</p>
            
            <span class="flex absolute gap-1 right-0    ">
                <Visa/>
                <Mastercard/>
                <american-express/>
                <Jcb/>
            </span>
        </span>
        <hr class="my-[0.7rem]">
        <section class="mt-[1rem] mb-[2rem]">
                <div v-for="(plan, i) in plan" :key="i">
                    <header>
                        <h1 class="text-2xl font-madeForDisplayRegular">{{plan.title}} plan</h1>
                        <!-- <span>
                            <h1 class="text-2xl font-madeForDisplayMedium">Total ${{plan.actual_price}}.00</h1>
                        </span> -->
                        <div class="flex gap-1 mt-2">
                            <div class="font-madeForDisplayMedium flex xs:gap-2 xs:text-lg xs:xl sm:text-2xl">
                                <p>Price: ${{plan.actual_price}}.00</p>
                            </div>
                            <div class="sm:text-xl xs:text-lg  xs:mt-1 gap-1">
                                <p>- billing per {{plan.billing_period}}</p>
                            </div>
                        </div>
                            <h1 class="font-madeForDisplayMedium flex xs:gap-2 xs:text-lg xs:xl sm:text-2xl mt-2">Plan Total: ${{price}}.00</h1>
                            <h1 class="font-madeForDisplayItalic flex xs:gap-2 mt-2 text-xl">+ 199 setup fee</h1>
                            <h1 class="font-madeForDisplaySemiBold flex xs:gap-2 xs:text-lg xs:xl sm:text-2xl mt-[1rem] underline">Grand Total: ${{total}}.00</h1>
                    </header>
                </div>
        </section>
        <section v-if="isPreparing" class="">
            <div id="link-authentication-element" class=""/>
            <div id="payment-element" class="my-[1rem]"/>
        </section>
        <div class="text-center font-madeForDisplayLight mb-4 text-lg text-red-400">{{error}} </div>
        <button @click="handleSubmit" :disabled="isLoading" class="flex place-content-center-center w-full max-w-xl text-center mx-auto disabled:bg-slate-500 text-xl py-[0.4rem] font-madeForDisplaySemiBold bg-black text-white font-semibold  hover:bg-neon rounded-md "><span class="mx-auto">Proceed with payment</span></button>
        <div class="relative my-[1.5rem] flex opacity-30">
            <span class="flex gap-1">
                <Visa/>
                <Mastercard/>
                <american-express/>
                <Jcb/>
            </span>
            <span class="absolute flex right-0">
                <article class="text-xs">powered by</article>
                <picture><img class="w-[3rem]" src="../../assets/Images/stripe.svg" alt=""></picture>
            </span>
        </div>
</aside>
        
    <aside class="lg:w-1/2 bg-black text-white pt-[3rem] pl-[5vw] pr-[2vw] sm:pr-[4rem] sm:pl-[2rem]">
        <header class="text-4xl hidden sm:block font-madeForDisplayBold">
                <h1>Enjoy our</h1>
                <h1>exclusive benefits &</h1>
                <h1>features</h1>
        </header>
        <header class="text-2xl sm:hidden font-madeForDisplayBold">
                <h1>Enjoy our exclusive benefits & features</h1>
                <h1></h1>
                <h1></h1>
        </header>
        <div class="text-lg sm:text-xl">
            <span class="flex gap-3 mt-3">
                <picture class="sm:text-base text-sm pt-1 sm:pt-0"><Tick c/></picture>
                <p>Custom Domain Name</p>
            </span>
            <span class="flex gap-3 my-2">
                <picture class="sm:text-base text-sm pt-1 sm:pt-0"><Tick c/></picture>
                <p>Website done for you in 7days</p>
            </span>
            <span class="flex gap-3">
                <picture class="sm:text-base text-sm pt-1 sm:pt-0"><Tick c/></picture>
                <p>Lifetime Free Maintenance</p>
            </span>
            <span class="flex gap-3 my-2">
                <picture class="sm:text-base text-sm pt-1 sm:pt-0"><Tick c/></picture>
                <p>Easy-to-use Website Editor</p>
            </span>
        </div>
         <section class="mt-[1rem] mb-[2rem]">
                <div v-for="(plan, i) in plan" :key="i">
                    <header>
                        <h1 class="text-2xl font-madeForDisplayRegular">{{plan.title}} plan</h1>
                        <!-- <span>
                            <h1 class="text-2xl font-madeForDisplayMedium">Total ${{plan.actual_price}}.00</h1>
                        </span> -->
                        <div class="flex gap-1 mt-2">
                            <div class="font-madeForDisplayMedium flex xs:gap-2 xs:text-lg xs:xl sm:text-2xl">
                                <p>Price: ${{plan.actual_price}}.00</p>
                            </div>
                            <div class="sm:text-xl xs:text-lg  xs:mt-1 gap-1">
                                <p>- billing per {{plan.billing_period}}</p>
                            </div>
                        </div>
                            <h1 class="font-madeForDisplayMedium flex xs:gap-2 xs:text-lg xs:xl sm:text-2xl mt-2">Plan Total: ${{price}}.00</h1>
                            <h1 class="font-madeForDisplayItalic flex xs:gap-2 mt-2 text-xl">+ 199 setup fee</h1>
                            <h1 class="font-madeForDisplaySemiBold flex xs:gap-2 xs:text-lg xs:xl sm:text-2xl mt-[1rem] underline">Grand Total: ${{total}}.00</h1>
                    </header>
                </div>
        </section>
        <div class="mt-[0.8rem]">
            Efficiency is the cornerstone of success. With our comprehensive suite of tools and resources, you can effectively manage every facet of your business operations.
        </div>
    <button @click="modalHandler" class="font-madeForDisplaySemiBold text-lg text-black bg-white rounded-lg my-[2rem] hover:text-blue-700 sm:mx-0 mx-auto flex xxs:text-base  px-[1vw] xxs:px-[2rem] sm:px-[4rem] py-[0.5rem]">Want to change plan ?</button>
    </aside>
   </section>
   </div>
   </section>
</template>