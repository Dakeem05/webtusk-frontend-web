<script setup>
    import GoogleLogo from "../../components/Icons/GoogleLogo.vue";
    import CopyRight from "../../components/Icons/CopyRight.vue"
     import Header from "../../components/signup-components/Header2.vue";

      import { onMounted, ref, reactive } from "vue";
    import Loading from "../../components/Icons/Loading.vue";
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

    const form = ref({
        email:'',
        password:'',
        remember:false

    })
        const submitHandler = async (e) => {
            e.preventDefault();
                error.value = ''
            isLoading.value = true;
                // console.log(form.value)
            try{
                
                isLoading.value = true;
                const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/login', form.value);
                // console.log(res.data)
                    localStorage.setItem('webtusk_token', res.data.data.token);

                    //get the person's status from the db
                      localStorage.setItem('status', res.data.data.user.status)
                isLoading.value = false;
                if(res.data.data.user.status === 'active'){
                    const searchURL = new URL('https://accounts.tusksite.com');
                    searchURL.searchParams.set('auth', localStorage.getItem('webtusk_token'));
                    location.replace(`${searchURL}`);
                } else {
                    await router.push({path:'/'})

                }
            } catch (err){
                isLoading.value = true;
                isLoading.value = false;
                console.error(err);
                if((err.response.data.message).length === 1){

                error.value = error.value = (err.response.data.message).toString()
                } else {
                        error.value = err.response.data.message
                }

            }
        }

</script>

<template >
 <span v-if="isLoading" class=" fixed left-0 right-0 w-fit mt-[25vh] opacity-100 mx-auto flex z-50 text-black"><span><Loading/></span></span>
<section :class="{'opacity-30' : isLoading}">
        
    <div class="w-[68.5rem]">

    <Header :pathh="path" />
    </div>
        <hr class="w-full absolute  left-0 top-[6rem] h-[1.2px] bg-red-100 ">
        <div class="mt-[7.5rem] ">
    
    
        <div class=" md:mx-auto mx-[0.5rem] md:w-[40rem] px-2 max-w-3xl  text-center">
            <span >
                <div class=" ">
                    <form action="" @submit="submitHandler" class="flex-col flex justify-start">
                    <span>
                        <h1 class="text-2xl font-bold text-black-700 pt-6 font-madeForDisplayBold">Account Login</h1>
                    </span>
                    <span>
                        <h3 class="text-sm sm:text-lg font-bold font-madeForDisplayMedium my-3">Don't have an account yet? 
                            <router-link to="/register" class="font-bold text-[#1238bf] hover:underline" >Sign Up</router-link>
                        </h3>
                    </span>
                    <span>
                        <input type="email" name="email" v-model="form.email" required placeholder="Enter Email" class=" bg-transparent focus:outline font-bold font-madeForDisplayMedium  focus:outline-2 w-full h-[3.5rem] max-w-lg border border-gray-400 mb-3 rounded-md pl-[1rem]">
                    </span>
                    <span>
                        <input type="password" name="password" v-model="form.password" required placeholder="Enter your Password" class="  bg-transparent focus:outline font-bold font-madeForDisplayMedium  focus:outline-2 w-full h-[3.5rem] max-w-lg border border-gray-400 mb-3 rounded-md pl-[1rem]">
                    </span>
                    <span class="max-w-lg  w-full mx-auto ">
                        <div class="flex">
                            <input type="checkbox" name="remember" v-model="form.remember" class="accent-[#1238bf] border mr-2 bg-white border-gray-400 rounded-md">
                            <label for="remember" class="text-gray-600  text-lg">Remember me</label>
                        </div>
                    </span>
                    <span class="my-[1rem] text-[red] xs:text-xl justify-center flex"><p>{{error}}</p></span>
                    <span>
                        <button disabled type="submit" class="w-full h-[3.5rem] max-w-lg bg-black text-white font-bold font-madeForDisplaySemiBold disabled:cursor-not-allowed rounded-md mt-2">Submit</button>
                    </span>
            <span class="flex items-center text-gray-400 justify-center">
                        <hr class=" h-px my-8 bg-gray-400 border-0 dark:bg-gray-70 w-1/6">
                        <div class="mx-3">
                            Or
                        </div>
                        <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-70 w-1/6">
                    </span>
                </form>
                <span class="cursor-pointer hover:bg-blue-100  flex mx-auto justify-center  w-10/12 sm:w-3/4  h-12  pt-1.5 max-w-lg bg-white border rounded-md">

                    <button class="flex   rounded-2xl w-5/6 gap-6 md:w-3/5 h-9 pt-2 justify-center" >
                        <div> <google-logo/></div> 
                        <div class="text-xs sm:text-base text-gray-600 font-bold font-madeForDisplayMedium">Continue with Google</div> 
                    </button>
                </span>
                <span >
                    <p class=" mt-3 pb-5 ">
                        <router-link to="/forgot-password" class="text-lg text-[#1238bf] font-madeForDisplaySemiBold hover:text-[#1238bf] hover:underline">Forgot password?</router-link>

                    </p>
                </span>
            </div>
        </span>
        </div>
        
    </div>

</section>
</template>

<!-- w-full max-w-sm mx-2 lg:max-w-lg -->

<!-- mx-auto container flex items-center justify-center text-center -->

<!-- max-w-lg lg:max-w-xl -->