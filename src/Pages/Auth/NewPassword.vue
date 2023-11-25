<script setup>
    import GoogleLogo from "../../components/Icons/GoogleLogo.vue";
    import CopyRight from "../../components/Icons/CopyRight.vue"
     import Header from "../../components/signup-components/Header2.vue";
         import Loading from "../../components/Icons/Loading.vue";
    import { onMounted, ref, reactive, isRef } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import axios from "axios";
    let isDisabled = ref(false);
    const router = useRouter();
    const route = useRoute();
    let link = ref('');
    const isLoading = ref(false);
    let code = ref('');
    let error = ref('');
    let isEmailSubmitted = ref(false);
    let resent = ref(false);
        let token = ref('');  
    const form = ref({})
        token.value = localStorage.getItem('webtusk_token');  

        form.value = {
            email:localStorage.getItem('email'),
            password:'',
            password_confirmation:''
        }


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
        const submitHandler = async (e) => {
            e.preventDefault();
                isLoading.value = true;
                error.value = ''
                try{
                    isLoading.value = true;
                    const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/resetPassword', form.value);
                    if (typeof window !== 'undefined') {

                        localStorage.removeItem('email');
                    }
                    router.push('/login')
                    // console.log(res)
                    isLoading.value = false;
                    resent.value = true;
                    } catch (err){
                        isLoading.value = false;
                        console.error(err.response);
                          if((err.response.data.message).charAt(0) == 'H') {
                    error.value = 'You have not verified your email'

                    } else {
                        error.value = err.response.data.message
                        
                    }

                }

        }


   
</script>

<template >
<span v-if="isLoading" class=" fixed left-0 right-0 w-fit mt-[25vh] opacity-100 mx-auto flex z-50 text-black"><span><Loading/></span></span>
<section :class="{'opacity-30' : isLoading}">
    
<div class=" w-[68.5rem]">

<Header :pathh="path" />
</div>
    <hr class="w-full absolute  left-0 top-[6rem] h-[1.2px] bg-red-100 ">
    <div class="mt-[7.5rem] w-full">
    
    <div class=" px-2 md:mx-auto mx-[0.5rem] md:w-[40rem] items-center justify-center text-center">
        <span >
            <div class="   justify-center">
                <form action="" @submit="submitHandler" class="flex flex-col">
                <span>
                    <h1 class="text-2xl font-bold text-black-700 pt-[1rem] font-madeForDisplayBold">New Password</h1>
                </span>
                <span class="mt-[2rem]">
                    <input type="password" @input="firmP"  name="password" v-model="form.password" required placeholder="Enter password" class=" bg-transparent focus:outline font-bold font-madeForDisplayMedium w-full focus:outline-2  h-[3.5rem] max-w-7xl border border-gray-400 mb-3 rounded-md pl-[1rem]">
                </span>
                <span>
                    <input type="password" @input="confirmP" name="password_confirmation" v-model="form.password_confirmation" required placeholder="Confirm your password" class=" bg-transparent focus:outline font-bold font-madeForDisplayMedium w-full focus:outline-2  h-[3.5rem] max-w-7xl border border-gray-400 mb-3 rounded-md pl-[1rem]">
                </span>
                <span class="my-[1rem] text-[red] xs:text-xl justify-center flex"><p>{{error}}</p></span>
                <span>
                    <button :disabled="isDisabled" type="submit" class=" h-[3.5rem] max-w-7xl bg-black text-white font-bold font-madeForDisplaySemiBold w-full rounded-md mt-2">Submit</button>
                </span>
              
            </form>
            <span class="font-madeForDisplaySemiBold font-bold">
                <p class=" mt-3 pb-5 ">
                  Return to  <router-link to="/login" class="text-lg text-green-500 hover:underline">Login</router-link>

                </p>
            </span>
        </div>
    </span>
    </div>
    </div>

    
</section>
</template>

