<script setup>
    import GoogleLogo from "../../components/Icons/GoogleLogo.vue";
    import CopyRight from "../../components/Icons/CopyRight.vue"
     import Header from "../../components/signup-components/Header2.vue";
        import Loading from "../../components/Icons/Loading.vue";
    import { onMounted, ref, reactive, isRef } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import axios from "axios";

    const router = useRouter();
    const route = useRoute();
    let link = ref('');
    const isLoading = ref(false);
    let code = ref('');
    let error = ref('');
    let isEmailSubmitted = ref(false);
    let resent = ref(false);
    const form = ref({})
    const form2 = ref({})
        let token = ref('');  
         const emailForm = ref({})
        const emailForm2 = ref({})
    if (typeof window !== 'undefined') {
        form.value = {
            email:  localStorage.getItem('email'),
            code:''
    
        }
        emailForm.value = {
            email:''
        }

        emailForm2.value = {
            email:localStorage.getItem('email')
        }

        form2.value = {
            email:  localStorage.getItem('email'),
            code:''
    
        }
        
        
        token.value = localStorage.getItem('webtusk_token');  

       
      

        
        onMounted( async ()=> {
            const fetchData = async () =>{
                try{
                    const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/checkForgotLink', emailForm2.value);
                // console.log(res)
                    link.value = res.data
                // console.log(form2.value)
                    form2.value.link = res.data
                    try{

                        const res2 = await axios.post('https://api-control.tusksite.com/api/V1/auth/verifyForgotLink', form2.value);
                            // console.log(res2);
                            if(window.location.href === link.value){
                                router.push('/new-password');
                            }
                            return;
                    } catch(err) {
                            console.log(err);
                        // if((err.response.data.message).length === 1){

                        // error.value = error.value = (err.response.data.message).toString()
                        // } else {
                        // error.value = err.response.data.message
                        // }
                    }

                        
                        } catch(err){
                            console.log(err)
                            // if((err.response.data.message).length === 1){

                            // error.value = error.value = (err.response.data.message).toString()
                            // } else {
                            // error.value = err.response.data.message
                            // }
                        }
                    };

                    fetchData();
        })
    }

      const emailSubmitHandler = async (e) => {
            e.preventDefault();
                isLoading.value = true;
                error.value = ''
                try{
                    isLoading.value = true;
                    const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/forgotLink', emailForm.value);
                    if (typeof window !== 'undefined') {

                        localStorage.setItem('email', emailForm.value.email);
                    }
                    isEmailSubmitted.value = true;
                    console.log(res)
                                    isLoading.value = false;
                            resent.value = true;
                    } catch (err){
                        isLoading.value = false;
                        console.error(err.response);
                        if((err.response.data.message).length === 1){

                error.value = error.value = (err.response.data.message).toString()
                } else {
                error.value = err.response.data.message
                }

                }

        }


    const codeSubmitHandler= async (e) => {
            e.preventDefault();
                isLoading.value = true;
                error.value = ''
                try{
                    isLoading.value = true;
                    const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/verifyForgot', form.value);
                    console.log(res)
                    router.push('/new-password');
                                isLoading.value = false;
                            resent.value = true;
                    } catch (err){
                        isLoading.value = false;
                        console.error(err.response);
                        if((err.response.data.message).length === 1){

                error.value = error.value = (err.response.data.message).toString()
                } else {
                error.value = err.response.data.message
                }

                }

        }
           

        const resendHandler = async () => {
                
                    isLoading.value = true;
                try{
                    isLoading.value = true;
                    const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/resendForgotLink', emailForm2.value);
                    console.log(res)
                            isLoading.value = false;
                        resent.value = true;
                } catch (err){
                    isLoading.value = false;
                    console.error(err.response);

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
    
    <div v-if="isEmailSubmitted == false" class=" px-2 md:mx-auto mx-[0.5rem] md:w-[40rem] items-center justify-center text-center">
        <span >
            <div class="   justify-center">
                <form action="" @submit="emailSubmitHandler" class="flex flex-col">
                <span>
                    <h1 class="text-2xl font-bold text-black-700 pt-6 font-madeForDisplayBold">Forgot Password</h1>
                </span>
                <span>
                    <h3 class="text-lg text-gray-400 font-normal my-3">Provide your account email address</h3>
                </span>
                <span>
                    <input type="email" name="email" v-model="emailForm.email" required placeholder="Enter your email" class=" bg-transparent focus:outline font-bold font-madeForDisplayMedium w-full focus:outline-2  h-[3.5rem] max-w-7xl border border-gray-400 mb-3 rounded-md pl-[1rem]">
                </span>
                <span class=" text-[red] xs:text-xl justify-center flex"><p>{{error}}</p></span>
                <span>
                    <button type="submit" class=" h-[3.5rem] max-w-7xl bg-black text-white font-bold font-madeForDisplaySemiBold w-full rounded-md mt-2">Submit</button>
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
    <div v-if="isEmailSubmitted" class=" px-2 md:mx-auto mx-[0.5rem] md:w-[40rem] items-center justify-center text-center">
        <span >
            <div class="   justify-center">
                <form action="" @submit="codeSubmitHandler" class="flex flex-col">
                <span>
                    <h1 class="text-2xl font-bold text-black-700 pt-6 font-madeForDisplayBold">Submit Code</h1>
                </span>
                <span>
                    <h3 class="text-lg text-gray-400 font-normal my-3">Link sent, check your email</h3>
                </span>
                <span >
                    <input type="text" v-model="form.code" name="otp" required placeholder="6-digit code" maxlength="6" class="  bg-transparent focus:outline font-bold font-madeForDisplayMedium mt-[1rem]  focus:outline-2 w-full h-[3.5rem] max-w-2xl border border-gray-400 mb-3 rounded-md text-center">
                </span>
                <span class="my-[1rem] text-[red] xs:text-xl justify-center flex"><p>{{error}}</p></span>
                <span>
                    <button type="submit" class=" h-[3.5rem] max-w-7xl bg-black text-white font-bold font-madeForDisplaySemiBold w-full rounded-md mt-2">Submit</button>
                </span>
              
            </form>
            <span class="font-madeForDisplaySemiBold font-bold">
                <p class=" mt-3 pb-5 "><button @click="resendHandler" class="text-lg text-green-500 hover:underline">Resend code?</button></p>
            </span>
        </div>
        </span>
    </div>
    </div>

    
</section>
</template>

