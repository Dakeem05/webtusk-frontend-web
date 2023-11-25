<script setup>
import Icon from "../Icons/RightArrow.vue";
import { ref, watch, onMounted, onBeforeUnmount} from "vue";
  import CloseIcon from  "../Icons/CloseIcon.vue";
  const emit = defineEmits(['openBar', 'closeBar'])
import Menu from '../Icons/Menu.vue'
import axios from "axios";


   let scrolled = ref(false);
  let scroll = ref(0)
  let platform = ref(false);
  let solutions = ref(false);
  let resources = ref(false);
  let isDashModal = ref(false);
  let isDash = ref(false);
  let userAbbrev = ref(false);
  let isDashShowButton = ref(false);
  let show = ref(false)
  let token = localStorage.getItem('webtusk_token')
    let ul = ref(null);
       let open = ref(false);
    let both = ref(false)
    let close = ref(false);
    const side = ref(null)
    let isSide = ref(false);
    let downP = ref(false);
        const scrollHandler = () => {
          scroll.value = window.scrollY
           if(scroll.value !== 0 ){
            if (!isSide.value){
        
                scrolled.value = true;
    }
            } else if (scroll.value != 0) {
                 if (!isSide.value){
        
                     scrolled.value = true;
    }
            }
            else {
                 if (!isSide.value){
        
                     scrolled.value = false;
    }
            }
        }

     
  onMounted( async ()=>{
    window.addEventListener('scroll', scrollHandler)
    let token = localStorage.getItem('webtusk_token')
     try {
         const res = await axios.get("https://api-control.tusksite.com/api/V1/auth/getUser", {
             headers:{
                 Authorization: `Bearer ${token}`,
                    }
                })
                userAbbrev.value = `${(res.data.first_name).charAt(0)}${(res.data.last_name).charAt(0)}`
                // console.log((res.data.first_name).charAt(0));
                // console.log((res.data.last_name).charAt(0));
                isDashShowButton.value = true
                localStorage.setItem('status', `${res.data.status}`);
                    if (res.data.status == 'active'){
                        isDash.value = true
                    }
               
            } catch (err) {
                // console.error(err.response.data.message)
                if (err.response.data.message == 'Unauthenticated.'){
                    isDashShowButton.value = false

                }
            }
                let status = localStorage.getItem('status')
  })
  onBeforeUnmount(()=> {
    window.removeEventListener('scroll', scrollHandler)
  })
  const platformHandler = () => {
    if(solutions.value || resources.value){
        solutions.value = false;
      resources.value = false;
      show.value = true
      platform.value = true
    } else{
        platform.value = true ;
      show.value = true;

    }
  }
  const platformMHandler = () => {
    if(solutions.value || resources.value){
        solutions.value = false;
      resources.value = false;
      platform.value = !platform.value
        downP.value = true
    } else{
        platform.value = !platform.value;
        downP.value = !downP.value
        // alert('hy')
    }
  }
    const solutionsHandler = () => {
        if (platform.value || resources.value){
          platform.value = false;
        resources.value = false;
        show.value = true
      solutions.value = true;
    }  else {
        solutions.value = !solutions.value
    show.value = !show.value;
    }

  }
    const solutionsMHandler = () => {
        if (platform.value || resources.value){
            platform.value = false;
        resources.value = false;
      solutions.value = !solutions.value;
        downP.value = true
    }  else {
        solutions.value = !solutions.value
        downP.value = !downP.value
    }

  }
  const dashModalHandler = () => {
    show.value = false
      platform.value = false;
    solutions.value = false;
    resources.value = false;
   isDashModal.value = !isDashModal.value
  }
  const isDashModalRemove = () => {
   isDashModal.value = !isDashModal.value
  }
  const dashHandler = () => {
      const searchURL = new URL('https://accounts.tusksite.com');
       searchURL.searchParams.set('auth', localStorage.getItem('webtusk_token'));
   location.replace(`${searchURL}`);
  }
  const logoutHandler = async () => {
    let token = localStorage.getItem('webtusk_token')
    try {
    const res = await axios.get('https://api-control.tusksite.com/api/V1/auth/logout', {
             headers:{
                 Authorization: `Bearer ${token}`,
                    }
                });
                // console.log(res) 
                localStorage.removeItem('webtusk_token')
                localStorage.removeItem('status')
                localStorage.removeItem('isVerified')
                isDashShowButton.value = false
    } catch (err) {
        console.error(err)
    }
  }
  const resourcesHandler = () => {
    if (platform.value || solutions.value) {
        platform.value = false;
        solutions.value = false;
    isDashModal.value = false
    show.value = true;
      resources.value = true;
    } else {
        
        isDashModal.value = false
        resources.value = !resources.value;
      show.value = !show.value;
    }
  }
  const resourcesMHandler = () => {
      if (platform.value || solutions.value) {
          platform.value = false;
        solutions.value = false;
      resources.value = !resources.value;
        downP.value = true
    } else {
        
        resources.value = !resources.value;
        downP.value = !downP.value
    }
  }
  const dropPlatformRemove =  () => {
        platform.value = false;
        show.value = false;
    // alert('hy')
  }
  const dropSolutionsRemove =  () => {
        solutions.value = false;
        show.value = false;
    // alert('hy')
  }
  const dropResourcesRemove =  () => {
        resources.value = false;
        show.value = false;
    // alert('hy')
  }

  
   function sideBarOpen (){
    isSide.value = true; 
     side.value.classList.remove('-translate-x-[105%]');
     emit('openBar', isSide.value)
  }
  function sideBarClose (){
      isSide.value = false;
      side.value.classList.add('-translate-x-[105%]');
      emit('closeBar', isSide.value)
  }
</script>

<template>
  <section>
        <section class="bg-black lg:hidden pt-[1.7rem] pb-[1.9rem] px-1rem xs:px-[2rem] sm:px-[3rem] z-30 fixed left-0 flex right-0 w-full">
             
       
             <router-link v-if="!isDashShowButton" class="hover:text-white text-white border-2 absolute  right-[1rem] xs:right-[2rem] sm:right-[3rem] top-[1.6rem] text-sm xs:text-lg border-white py-[0.2rem] px-[0.2rem] xxs:px-[0.5rem] xs:px-[1rem] sm:px-[2rem] rounded-md font-bold font-madeForDisplayBold" to="/login">
                    Login
                </router-link>
                <div v-if="isDashShowButton" class="right-[1rem] absolute  xs:right-[2rem] sm:right-[3rem] top-[1.6rem]">
                <div class="inline-flex items-center overflow-hidden rounded-md " >
                    <button @mouseover="dashModalHandler" class="text-black bg-white h-[2rem] w-[2rem] text-sm border-2 font-madeForDisplayHeavy border-[#d0f224] rounded-full">
                        {{userAbbrev}}         
                    </button>
                </div>
            
                <div v-if="isDashModal"  class="absolute  end-0 z-10 mt-2 w-[12rem] rounded-md border border-gray-100 text-black bg-white shadow-lg">
                <div @mouseleave="isDashModalRemove" class="p-2 font-madeForDisplayMedium text-gray-500">
                    <button v-if="isDash" @click="dashHandler" class=" hover:bg-slate-200 w-full text-start pl-[0.5rem] py-[0.3rem]">Dashboard</button>        
                    <button @click="dashHandler" class=" hover:bg-slate-200 w-full text-start pl-[0.5rem] py-[0.3rem]">Profile</button>        
                    <button @click="logoutHandler" class="text-red-500 hover:bg-red-100 w-full text-start pl-[0.5rem] py-[0.3rem]">Logout</button>        
                </div>
                </div>
            </div>
            <div class=" mx-auto flex">
                <span>
            <router-link to="/"  class="">
                <img class="w-[4rem] xxs:w-[8rem] sm:w-[9rem] xl:w-[10rem]" src="../../assets/Images/logo-white.svg" alt="Webtusk"/>
            </router-link>

                </span>
            </div>

            <div>
            <button  @click="sideBarClose" v-if="isSide" class="absolute left-[1rem] xs:left-[2rem] sm:left-[3rem] top-[1.4rem] text-xl xxs:text-3xl sm:text-4xl lg:hidden"> <close-icon/></button>
            <button @click="sideBarOpen" v-else  class="absolute left-[1rem] xs:left-[2rem] sm:left-[3rem] top-[1.4rem] text-xl xxs:text-3xl sm:text-4xl lg:hidden"> <Menu/></button>
        </div>
        </section>
    <div ref="side" class="bg-white lg:hidden fixed w-[60vw] -translate-x-[105%] transition-transform duration-500 overflow-y-auto overscroll-y-none h-screen z-30 top-[4.8rem] pt-[1.5rem] px-[1rem] xs:px-[2rem] sm:px-[3rem]">
         <ul ref="ul" id="" :class="{'h' : !downP, ' pb-[65%] ' : downP}" class=" block lg:hidden ht relative gap-[1rem]  w-full top-0 font-bold font-madeForDisplayMedium">
           
            
            
            <li class="pt-[1.5rem]">
                <router-link active-class="opacity-[0.7] " class=" sm:text-lg font-bold font-madeForDisplayBold  hover:opacity-[0.7] pb-[1.8rem] " to="/features">
                    Features
                </router-link>
                <div class="mt-[1.2rem] border-t-gray-400 border"></div>
            </li>
            <li class="pt-[1.5rem]">
                <router-link active-class="opacity-[0.7] " class=" sm:text-lg font-bold font-madeForDisplayBold  hover:opacity-[0.7] pb-[1.8rem] " to="/website-creation">
                    Website creation
                </router-link>
                <div class="mt-[1.2rem] border-t-gray-400 border"></div>
            </li>
            <li class="pt-[1.5rem]">
                <router-link active-class="opacity-[0.7] " class=" sm:text-lg font-bold font-madeForDisplayBold  hover:opacity-[0.7] pb-[1.8rem] " to="/web-builder">
                    Web Builder
                </router-link>
                <div class="mt-[1.2rem] border-t-gray-400 border"></div>
            </li>
            
            <li class="pt-[1rem]">
                <router-link active-class="opacity-[0.7] "  class=" sm:text-lg  hover:opacity-[0.7] font-bold font-madeForDisplayBold pb-[1.8rem]" to="/pricing">
                    Pricing
                </router-link>
                <div class="border-t-gray-400 mt-[1.2rem] border"></div>
            </li>
            <div :class="{'bottom-[1%]' : !downP, 'bottom-[5.5%]' : downP}" class="flex t gap-5 w-full absolute">

            </div>
        </ul>
    </div>
    <div :class="{'shadow-xl  w-[100%] xl:w-[1280px] px-[2rem] fixed  right-0 left-0 top-[0.8rem] xl:mx-auto  rounded-2xl filter backdrop-blur-filter backdrop-saturate-filter bg-filter dark:bg-transparent pt-[1.7rem] pb-[0.5rem] xl:pb-[1.7rem]' :scrolled === true, 'border-gray-600 border-b-[0.2px] relative text-white xl:px-0 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] bg-black py-[2rem] flex' : scrolled === false, 'rounded-b-none' : show, 'hidden lg:block' : isSide}" class=" px-0 z-20 top-0  hidden lg:block   ">
        <div class="max-w-7xl mx-auto  flex f xl:block relative">
        <div >
            <span>
                <router-link to="/" :class="{'hidden ' :scrolled === true, 'block' : scrolled === false }" class="">
            <img class="w-[7rem] sm:w-[9rem] xl:w-[10rem]" src="../../assets/Images/logo-white.svg" alt="Webtusk"/>
        </router-link>
        <router-link to="/" :class="{'block' :scrolled === true, 'hidden' : scrolled === false }" class="">
            <img class="w-[7rem] sm:w-[9rem] xl:w-[10rem]" src="../../assets/Images/logo.svg" alt="Webtusk"/>
        </router-link>
            </span>
        </div> 
        <div>
            <button @click="sideBarOpen"  class="absolute left-0 -top-1 text-xl xxs:text-2xl xs:text-3xl sm:text-4xl lg:hidden"> <Menu/></button>
        </div>
        <ul :class="{'right-[4rem]' : scrolled}" class="flex xl:absolute xl:right-0  gap-[1rem]  xl:text-lg xl:top-0 font-bold font-madeForDisplayMedium ">
            <!-- <li>
                <button @mouseenter="platformHandler" @mouseleave="platformRemove" :class="{'border-white' :scrolled === true, 'border-black' : scrolled === false, 'opacity-[0.7] border-b-[0.2rem] border-black' :  platform }" class="hover:border-b-[0.2rem] font-bold font-madeForDisplayBold border-black hover:opacity-[0.7] pb-[1.4rem]  gap-3 flex" >
                    <p>Platform</p>
                    <p :class="{'rotate-[270deg] -ml-[0.5rem] pt-[0.7rem] mr-2' : platform === true, 'pt-[0.7rem] rotate-90' : platform === false}" class="" v-if="scrolled"><Icon :fill="['#374151']"/></p>
                    <p :class="{'rotate-[270deg] -ml-[0.5rem] pt-[0.7rem] mr-2' : platform === true, 'pt-[0.7rem] rotate-90' : platform === false}" class="" v-else><Icon/></p>
                </button>
            </li>
            <li>
                <button  @mouseenter="solutionsHandler" @mouseleave="solutionsRemove" :class="{'border-white' :scrolled === true, 'border-black' : scrolled === false, 'opacity-[0.7] border-b-[0.2rem] border-black' :  solutions }" class="hover:border-b-[0.2rem] font-bold font-madeForDisplayBold border-black hover:opacity-[0.7] pb-[1.4rem]  gap-3 flex" >
                    <p>Solutions</p>
                     <p :class="{'rotate-[270deg] -ml-[0.5rem] pt-[0.7rem] mr-2' : solutions === true, 'pt-[0.7rem] rotate-90' : solutions === false}" class="" v-if="scrolled"><Icon :fill="['#374151']"/></p>
                    <p :class="{'rotate-[270deg] -ml-[0.5rem] pt-[0.7rem] mr-2' : solutions === true, 'pt-[0.7rem] rotate-90' : solutions === false}" class="" v-else><Icon/></p>
                </button>
            </li> -->
            <li>
                <router-link active-class="opacity-[0.7] border-b-[0.2rem] border-black" :class="{'border-white' :scrolled === true, 'border-black' : scrolled === false }" class="hover:border-b-[0.2rem] font-bold font-madeForDisplayBold  border-black hover:opacity-[0.7] pb-[1.8rem] " to="/features">
                    Features
                </router-link>
            </li>
            <li>
                <router-link active-class="opacity-[0.7] border-b-[0.2rem] border-black" :class="{'border-white' :scrolled === true, 'border-black' : scrolled === false }" class="hover:border-b-[0.2rem] font-bold font-madeForDisplayBold  border-black hover:opacity-[0.7] pb-[1.8rem] " to="/website-creation">
                    Website creation
                </router-link>
            </li>
            <li>
                <router-link active-class="opacity-[0.7] border-b-[0.2rem] border-black" :class="{'border-white' :scrolled === true, 'border-black' : scrolled === false }" class="hover:border-b-[0.2rem] font-bold font-madeForDisplayBold  border-black hover:opacity-[0.7] pb-[1.8rem] " to="/web-builder">
                    Web Builder
                </router-link>
            </li>
            <!-- <li>
                <button  @mouseenter="resourcesHandler" @mouseleave="resourcesRemove" :class="{'border-white' :scrolled === true, 'border-black' : scrolled === false, 'opacity-[0.7] border-b-[0.2rem] border-black' :  resources }" class="hover:border-b-[0.2rem] font-bold font-madeForDisplayBold border-black hover:opacity-[0.7] pb-[1.4rem]  gap-3 flex" >
                    <p>Resources</p>
                    <p :class="{'rotate-[270deg] -ml-[0.5rem] pt-[0.7rem] mr-2' : resources === true, 'pt-[0.7rem] rotate-90' : resources === false}" class="" v-if="scrolled"><Icon :fill="['#374151']"/></p>
                    <p :class="{'rotate-[270deg] -ml-[0.5rem] pt-[0.7rem] mr-2' : resources === true, 'pt-[0.7rem] rotate-90' : resources === false}" class="" v-else><Icon/></p>
                </button>
            </li> -->
            <li>
                <router-link active-class="opacity-[0.7] border-b-[0.2rem] border-black" :class="{'border-white' :scrolled === true, 'border-black' : scrolled === false }" class="hover:border-b-[0.2rem] border-black hover:opacity-[0.7] font-bold font-madeForDisplayBold pb-[1.8rem]" to="/pricing">
                    Pricing
                </router-link>
            </li>
           
           <div v-if="!isDashShowButton" class="flex gap-4 ">
                <li>
                    <router-link  class="bg-[#1F1F1F] py-[0.5rem] text-white font-bold font-madeForDisplayBold px-2 xl:px-4" to="/pricing">
                        Get Started
                    </router-link>
                </li>
                <li>
                <router-link  class="hover:text-blue-700 text-black bg-[#d0f224] py-[0.4rem] px-3  font-bold font-madeForDisplayBold" to="/login">
                    Login
                </router-link>
                </li>
           </div>
            <div v-if="isDashShowButton" class="relative">
                <div class="inline-flex items-center overflow-hidden rounded-md " >
                    <button @mouseover="dashModalHandler" class="text-black bg-white h-[2rem] w-[2rem] text-sm border-2 font-madeForDisplayHeavy border-[#d0f224] rounded-full">
                        {{userAbbrev}}         
                    </button>
                </div>
            
                <div v-if="isDashModal"  class="absolute  end-0 z-10 mt-2 w-[12rem] rounded-md border border-gray-100 text-black bg-white shadow-lg">
                <div @mouseleave="isDashModalRemove" class="p-2 font-madeForDisplayMedium text-gray-500">
                    <button v-if="isDash" @click="dashHandler" class=" hover:bg-slate-200 w-full text-start pl-[0.5rem] py-[0.3rem]">Dashboard</button>        
                    <button @click="dashHandler" class=" hover:bg-slate-200 w-full text-start pl-[0.5rem] py-[0.3rem]">Profile</button>        
                    <button @click="logoutHandler" class="text-red-500 hover:bg-red-100 w-full text-start pl-[0.5rem] py-[0.3rem]">Logout</button>        
                </div>
                </div>
            </div>
        </ul>
        
        </div>
    </div>
    <aside  v-if="show" :class="{'top-[6.2rem]' : scrolled}" class="hidden lg:block bg-white border-b-gray-200 border fixed  right-0 left-0 pl-[3rem] max-w-7xl mx-auto z-40 top-[5.4rem]">
        <section class=" ">
        <div v-if="platform" @mouseleave="dropPlatformRemove" class="flex gap-[4rem] text-start cursor-default" >
            <section class=" pb-[4rem] pt-[2.8rem]">
                
            <h1 class="font-madeForDisplayBold text-4xl">Platform</h1>
            <p class="mt-2 w-7/12   ">Launch your online journey on our user-friendly platform, built to empower your digital ambitions with seamless functionality</p>
            <aside class="mt-5 flex gap-[2rem]">
                <div class="">
                    <span class="">
                        <router-link active-class="underline" class="font-madeForDisplayBold hover:underline text-xl" to="/website-creation">Website creation</router-link>
                        <p class=" text-sm my-2">Let us build your online presence seamlessly, ready in 7days.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/ecommerce">Ecommerce</router-link>
                        <p class=" text-sm my-2">Unlock the potential of online selling and scaling.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/security">Security</router-link>
                        <p class=" text-sm my-2">Keep your data and visitors safe with advanced protection</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Enterprise</router-link>
                        <p class=" text-sm my-2">Solutions tailored for large-scale business operations. </p>
                    </span>
                </div>
                <div class="">
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/web-builder">Web Builder</router-link>
                        <p class=" text-sm my-2">Construct your site effortlessly with drag-and-drop simplicity</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/subscriptions">Subscriptions</router-link>
                        <p class=" text-sm my-2">Manage recurring payments and exclusive content access.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/email-marketing">Email marketing</router-link>
                        <p class=" text-sm my-2">Reach your audience effectively with targeted campaigns.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Manage </router-link>
                        <p class=" text-sm my-2">Effortlessly oversee and manage your business. </p>
                    </span>
                </div>
                <div class="">
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/infrastructure">Infrastructure</router-link>
                        <p class=" text-sm my-2">Robust foundation for optimal website performance.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/integrations">Integrations</router-link>
                        <p class=" text-sm my-2">Seamlessly connect with popular third-party services.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/domain-name">Domain Name</router-link>
                        <p class=" text-sm my-2">Secure your unique online identity with a memorable domain.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Themes</router-link>
                        <p class=" text-sm my-2">Diverse templates to match your brand's personality.</p>
                    </span>
                </div>
            </aside>
            </section>
            <picture class=" mx-auto max-w-[25rem] ">
                <img class="h-full" src="../../assets/Images/blankpic.jpg" alt="">
            </picture>
        </div>
        <div v-else-if="solutions" @mouseleave="dropSolutionsRemove" class="flex gap-[4rem]" >
            <section class=" pb-[4rem] pt-[2.8rem]">
            <h1 class="font-madeForDisplayBold text-4xl">Solutions</h1>
            <p class="mt-2 w-8/12   ">Find tailored answers to your needs through our innovative solutions, designed to drive success and growth for your ventures.
</p>
            <aside class="mt-5 gap-[2rem] flex">
                <div class="">
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold hover:underline text-xl" to="/startups">Startups</router-link>
                        <p class="text-sm my-2">Tailored support for emerging business ventures.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/agencies">Agencies</router-link>
                        <p class="text-sm my-2">Streamline projects and collaborations for agency success.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/freelancers">Freelancers </router-link>
                        <p class="text-sm my-2">Tools to showcase your portfolio and attract clients.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Enterprise</router-link>
                        <p class="text-sm my-2">Solutions tailored for large-scale business operations.</p>
                    </span>
                </div>
                <div class="">
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/online-store">Online store</router-link>
                        <p class="text-sm my-2">Create an enticing storefront for your products</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/real-estate">Real-estate</router-link>
                        <p class="text-sm my-2">Tools tailored for property listings and sales.</p>
                        <hr class="h-[0.2rem] rounded-full mt-[0.5rem] mb-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/restaurants">Restaurants</router-link>
                        <p class="text-sm my-2">Show off menus, reservations, and locations online</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/service-businesses">Service Businesses</router-link>
                        <p class="text-sm my-2">Present your offerings and attract potential clients. </p>
                    </span>
                </div>
                <div class="">
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/courses">Courses</router-link>
                        <p class="text-sm my-2">Create interactive online courses for your audience.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/digital">Digital</router-link>
                        <p class="text-sm my-2">Create an enticing storefront for your downloadable.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/fitness">Fitness</router-link>
                        <p class="text-sm my-2">Engage clients with schedules, workouts, and health tips.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/law-firms">Law Firms</router-link>
                        <p class="text-sm my-2">Professional website solutions for legal practices.</p>
                    </span>
                </div>
            </aside>
            </section>
              <picture class=" mx-auto max-w-[25rem] ">
                <img class="h-full" src="../../assets/Images/blankpic.jpg" alt="">
            </picture>
        </div>
        <!-- <div class="flex gap-[4rem]" @mouseleave="dropResourcesRemove" v-else-if="resources" >
            <section class=" pb-[4rem] pt-[2.8rem]">
            <h1 class="font-madeForDisplayBold text-4xl">Resources</h1>
            <p class="mt-2 w-8/12   ">Access a wealth of valuable resources, from guides and tutorials to expert insights, empowering you to excel in your online endeavors. </p>
            <aside class="mt-5 flex gap-[2rem]">
                <div class="w-1/2">
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold hover:underline text-xl" to="/">Inspiration</router-link>
                        <p class=" text-sm my-2">Inspiring creativity for your next project with captivating user experiences.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Find Add-ons</router-link>
                        <p class=" text-sm my-2">Enhance your site with powerful extensions and features.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Templates </router-link>
                        <p class=" text-sm my-2">Ready-made designs to jumpstart your website journey .</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Developers </router-link>
                        <p class=" text-sm my-2">Tools and resources for skilled customization and coding.</p>
                    </span>
                </div>
                <div class="w-1/2">
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Partners</router-link>
                        <p class=" text-sm my-2">Collaborate with Industry leaders for mutual growth.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Blog</router-link>
                        <p class=" text-sm my-2">Insights and trends to keep you informed and inspired.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Help center</router-link>
                        <p class=" text-sm my-2">Expert assistance for smooth platform navigation and usage.</p>
                        <hr class="h-[0.2rem] rounded-full my-[1rem] w-full mx-auto bg-black ">
                    </span>
                    <span>
                        <router-link active-class="underline" class="font-madeForDisplayBold text-xl hover:underline" to="/">Community</router-link>
                        <p class=" text-sm my-2">Connect and learn from fellow platform enthusiasts.</p>
                    </span>
                </div>
            </aside>
            </section>
             <picture class=" mx-auto max-w-[25rem] ">
                <img class="h-full" src="../../assets/Images/blankpic.jpg" alt="">
            </picture>
        </div> -->
        </section>
    </aside>
  </section>
</template>

<style scoped>
 .filter{
    -webkit-backdrop-filter: saturate(180%)blur(15px);
    backdrop-filter: saturate(180%)blur(15px);
    background-color: rgba(255,255,255,.72);
 }
 .h{
    height: calc(100% - 5rem);
 }
 .remove-scrolling { 
  height: 100%; 
  overflow: hidden; 
} 
.f{
    justify-content: space-between;
}
@media only screen and (max-height: 550px) {
    .ht{
        padding-bottom: 100%;
    }
}
</style>