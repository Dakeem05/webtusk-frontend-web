<script setup>
    import { onMounted, ref, reactive } from "vue";
    import GoogleLogo from "../../components/Icons/GoogleLogo.vue";
    import Loading from "../../components/Icons/Loading.vue";
    import BulletPoint from "../../components/Icons/BulletPoint.vue";
    import { useRouter, useRoute } from "vue-router";
    import axios from "axios";
    let countries =[];
    const router = useRouter();
    const route = useRoute();
    let error = ref('');
    let sortedCountries = ref([]);
    let isDisabled = ref(false);
    let domainError = ref('')
    let param = route.params.id
    const isLoading = ref(false);
    onMounted(() => {
    const fetchData = async () =>{
        try{
            const res = await fetch('https://restcountries.com/v3.1/all');
            countries = await res.json();
            // console.log(countries);
            countries.sort((a, b) => {
            const nameA = a.name.common.toLowerCase();
            const nameB = b.name.common.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
            });
            const sortedNames = countries.map((item) => item.name);
            const commonNames = sortedNames.map(country => country.common);
            sortedCountries.value = commonNames

            } catch(err){
                console.log(err);
            }
        };

        fetchData()
    })

    const moveH = () => {
        router.push({path:'/activation'})
    }

    const form = ref({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        country:'',
        plan_id: param,
        domain:``,
        password:'',
        password_confirmation:'',

    })
// current_payment_intent_id
    const firmP = () => {
        if (form.value.password.length < 8) {
            // alert('not same')
            error.value = 'Password should not be less than 8 characters'
            isDisabled.value = true
        } else{
            error.value = ''
            isDisabled.value = false
            return;
        }

    }
    const confirmP = () => {
        if (form.value.password !== form.value.password_confirmation) {
            // alert('not same')
            error.value = 'Password and Confirm do not match'
            isDisabled.value = true
        }
        else{
            error.value = ''
            isDisabled.value = false
            return;
        }

    }

    const formHandler = async (e) => {
        e.preventDefault();
        error.value = ''
        isLoading.value = true;

        try{
            
            isLoading.value = true;
            const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/register', form.value);
            // console.log(res.data)

                localStorage.setItem('webtusk_token', res.data.data.token);
                localStorage.setItem('email', res.data.data.user.email);
                localStorage.setItem('status', res.data.data.user.status)
                router.push({path:'/verify'})
            isLoading.value = false;
        } catch (err){
            isLoading.value = true;
            isLoading.value = false;
            console.error(err);
            // if((err.response.data.message).length === 1){

            //       error.value = err.response.data.message
            //     } else {
            //      error.value = err.response.data.message
            //     }
            // if((err.response.data.message).length === 1){
            //     error.value = (err.response.data.message).toString()
            // } else {
                
                if((err.response.data.message).charAt(0) == 'S') {
                    error.value = 'Domain already exists'

                    } else {
                        error.value = err.response.data.message
                        
                    }
            // }

        }
    }
</script>

<template>
<span v-if="isLoading" class=" fixed left-0 right-0 w-fit mt-[25vh] opacity-100 mx-auto flex z-50 text-black"><span><Loading/></span></span>
<div :class="{'opacity-30' : isLoading}" class=" mx-auto xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] justify-center ">
       
     <h1 class="xxs:text-lg  text-center sm:text-2xl md:text-3xl font-bold text-black-700 font-madeForDisplayBold pt-[2rem]">Create a Webtusk Account</h1>
    <h3 class="w-8/12 text-center mb-7 mt-2 mx-auto  md:text-[1.05rem]">Website Done For You. Ready in 7 days, easy & affordable</h3>
    <div class=" sm:w-full relative  ml-auto mr-auto flex justify-center">
        <div class="signForm   ">
                <form action="" @submit="formHandler" class="flex-col mt-[0.5rem]">
            <aside class="">
                    <span class="">
                        <div class=" sm:w-fit mx-auto rounded-3xl my-[1rem]">
                            <!-- <label for="odomain" class="font-medium font-madeForDisplayBold  text-lg xs:text-xl lg:text-2xl ">Choose your url </label> -->
                            <div class=" mt-[1rem] w-[90vw] sm:w-[80vw] md:w-[40rem]">
                                <span class="flex">

                                    <input type="text" placeholder="Domain name" @input="domainHandler" name="domain" v-model='form.domain' required  class="bg-transparent sm:pl-[2rem] pl-[1rem] w-[60vw] sm:w-fit md:w-10/12 focus:outline-[0.1rem] focus:outline text-2xl placeholder:font-madeForDisplayMedium rounded-xl  border-gray-400 border-2  h-[4rem]">
                                    <input type="url" name="odomain2" value=".tusk.site" readonly class="focus:outline-none hover:cursor-not-allowed pl-[1rem] font-madeForDisplayMedium sm:w-3/12 text-lg sm:text-2xl justify-end h-[4rem] bg-transparent " >
                                </span>
                                    <article class=" hidden sm:flex mt-[1rem] sm:gap-[1rem]">
                                        <p class="font-madeForDisplayMedium">Note: </p>
                                        <p class="text-start xs:text-base">You can buy or change to your custom domain on your dashboard after registration</p>
                                    </article>
                                    <article class=" flex sm:hidden sm:gap-[1rem]">
                                        <p class="font-madeForDisplayMedium"></p>
                                        <p class="text-start xs:text-base"> <span class="font-madeForDisplayMedium">Note: </span>You can buy or change to your custom domain on your dashboard after registration</p>
                                    </article>
                                <aside></aside>
                            </div>
                        </div>
                    </span>
                </aside>
           
                <span class="flex gap-4 mt-[2rem] w-[90vw] sm:w-[80vw] md:w-[40rem] mb-4">
                    <input type="text" name="first_name" v-model="form.first_name" required placeholder="First name" class="focus:outline  focus:outline-2 font-madeForDisplayMedium xs:text-lg  bg-transparent w-3/6 h-[3.5rem] pl-4 max-w-2xl border border-gray-400 rounded-md">
                    <input type="text" name="last_name"  v-model="form.last_name"  required placeholder="Last name" class=" font-madeForDisplayMedium xs:text-lg bg-transparent focus:outline autofill:bg-inherit focus:outline-2 w-3/6 h-[3.5rem] pl-4 max-w-2xl border border-gray-400 rounded-md">
                </span>
                <span class="flex  gap-4 mb-4">
                    <input type="email" name="email" v-model="form.email" required placeholder="Enter email" class="  bg-transparent font-madeForDisplayMedium xs:text-lg focus:outline  focus:outline-2 w-full h-[3.5rem]  border pl-4 border-gray-400 rounded-md">
                </span>
                
                <span class="w-[90vw] sm:w-[80vw] md:w-[40rem]">

                    <input type="tel" name="phone"  v-model="form.phone"   required placeholder="Enter phone number" class=" font-madeForDisplayMedium xs:text-lg bg-transparent focus:outline  focus:outline-2 w-full mb-4 h-[3.5rem] pr-1 pl-4  border border-gray-400 rounded-md">
                   <select name="country" required v-model="form.country" class="focus:outline   xs:text-lg   focus:ring-blue-500 focus:border-blue-500 block p-2.5     focus:outline-2 w-full  h-[3.5rem] relative  bg-transparent  font-madeForDisplayMedium  border border-gray-400 rounded-md">
                    <option value="" disabled selected class="font-montserrat text-gray-400 xs:text-lg"  >-- Select country--</option>
                    <option v-for="(country, index) in sortedCountries" :key="index" :value="country" class="font-madeForDisplayMedium  xs:text-lg" >{{ country }}</option>
                   </select>
                </span>
                <span class="flex gap-4 ">

                    <input type="password"  @input="firmP" name="password" v-model="form.password" minlength="8" maxlength="30"  required placeholder="Enter your Password" class=" font-madeForDisplayMedium xs:text-lg bg-transparent focus:outline  focus:outline-2 w-full h-[3.5rem] pl-4 max-w-7xl border border-gray-400 rounded-md mt-4 ">
                    <input type="password" @input="confirmP" name="password_confirmation" minlength="8" maxlength="30" v-model="form.password_confirmation"  required placeholder="Confirm your Password" class="font-madeForDisplayMedium xs:text-lg bg-transparent focus:outline  focus:outline-2 w-full h-[3.5rem] pl-4 max-w-7xl border border-gray-400 rounded-md mt-4 ">
                </span>
                    

                 
                <span class="my-[1rem] text-[red] xs:text-xl justify-center flex"><p>{{error}}</p></span>
                <span class="">
                    <button type="submit" disabled  class="w-[90vw] sm:w-[80vw] md:w-[40rem] lg:w-full h-[3.5rem] bg-black text-white font-madeForDisplaySemiBold disabled:cursor-not-allowed rounded-md mt-2">
                    <!-- <button type="submit" :disabled='isDisabled'  class="w-[90vw] sm:w-[80vw] md:w-[40rem] lg:w-full h-[3.5rem] bg-black text-white font-madeForDisplaySemiBold  rounded-md mt-2"> -->
                        Create an account
                    </button>
                </span>
                <h3 class="text-gray-700  text-xs lg:text-sm font-bold font-madeForDisplaySemiBold text-left my-4">By clicking Sign up, you agree to our 
                        <router-link to="privacy-policy" class="text-[#1238bf] hover:underline hover:text-[#1238bf]">
                            Privacy policy.
                        </router-link>  
                    </h3>

                <span class="flex items-center text-gray-400 justify-center">
                    <hr class=" h-px my-8 bg-gray-400 border-0 dark:bg-gray-70 w-2/6">
                    <div class="mx-3">
                        Or
                    </div>
                    <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-70 w-2/6">
                </span>
            </form>
            <span class="cursor-pointer hover:bg-blue-100 xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] flex place-content-center place-items-center w-full h-12  pt-1.5 md:max-w-2xl bg-white border rounded-md ">

                <button class="flex   rounded-2xl w-5/6 gap-6 md:w-3/5 h-9 pt-2 justify-center " >
                    <div> <google-logo/></div> 
                    <div class="text-xs sm:text-base text-gray-600 font-bold font-madeForDisplaySemiBold">Continue with Google</div> 
                </button>
            </span>
            <span class="text-center font-bold font-madeForDisplaySemiBold">
                <p class="mx-auto mt-3 pb-[3rem] text-gray-400 text-sm sm:text-lg ">
                    Already have an account? <router-link to="/login" class="text-lg text-[#1238bf] hover:underline hover:text-[#1238bf]">Log in</router-link>

                </p>
            </span>
        </div>
    
    </div>
    </div>
</template>

<style >
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 40px white inset !important;
        -webkit-text-fill-color: black;
    }
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus,
    select:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 40px white inset !important;
        -webkit-text-fill-color: black;
    }
</style>