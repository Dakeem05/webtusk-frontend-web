<script setup>
    import GoogleLogo from "../../components/Icons/GoogleLogo.vue";
    import CopyRight from "../../components/Icons/CopyRight.vue";
    import Loading from "../../components/Icons/Loading.vue";
    import Header from "../../components/signup-components/Header2.vue";
    import { onMounted, ref, reactive, isRef } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import axios from "axios";

    const router = useRouter();
    const route = useRoute();
    let link = ref('');
    const isLoading = ref(false);
    let code = ref('');
    let error = ref('');
    let resent = ref(false);
    let email = ref('');
    const form = ref({
        code:''

    })

    const form2 = ref({
        link: link.value
    })

        let token =  localStorage.getItem('webtusk_token');

        onMounted(() => {

              email.value = localStorage.getItem('email');
        const fetchData = async () =>{
            try{
                const res = await axios.get('https://api-control.tusksite.com/api/V1/auth/checkLink', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    link.value = res.data
                    const form2 = ref({
                        link: res.data    
                    })
                    try{

                        const res2 = await axios.post('https://api-control.tusksite.com/api/V1/auth/verifyLink', form2.value, {
                                headers: {
                                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS1jb250cm9sLnR1c2tzaXRlLmNvbS9hcGkvVjEvYXV0aC9yZWdpc3RlciIsImlhdCI6MTY5NDEwNDYyMywiZXhwIjoxNjk0MzIwNjIzLCJuYmYiOjE2OTQxMDQ2MjMsImp0aSI6Im9Ba3JTenRhNTRuTjVKM24iLCJzdWIiOiIxNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.bimr1Oa--zTdEqXviB7ac9uhGqavOGsZ50T_eiH4IOU`,
                                }
                            });
                            console.log(res2);
                        if(window.location.href === link.value){
                            router.push('/activation');
                        }
                            return;
                    } catch(err) {
                            // console.log(err);
                        // if((err.response.data.message).length === 1){

                        // error.value = error.value = (err.response.data.message).toString()
                        // } else {
                        // error.value = err.response.data.message
                        // }
                    }

                        
                        } catch(err){
                            // if((err.response.data.message).length === 1){

                            // error.value = error.value = (err.response.data.message).toString()
                            // } else {
                            // error.value = err.response.data.message
                            // }
                        }
                    };

                    fetchData();
            })

            const submitHandler = async (e) => {
                e.preventDefault();
                error.value = ''
                isLoading.value = true;
                const formData = new FormData;
                formData.append('code', code);

                try{
                    isLoading.value = true;
                    const res = await axios.post('https://api-control.tusksite.com/api/V1/auth/verify', form.value, {
                        headers: {
                            Authorization: `Bearer ${token}`
            }
            });
                        try {
                    const res = await axios.get('https://api-control.tusksite.com/api/V1/auth/checkVerified', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                    if(res.data.verified == true) {
                    localStorage.setItem('isVerified', res.data.verified)

                    }
                      isLoading.value = false;
                    localStorage.removeItem('email');

                await router.push({path:'/activation'})
                    // console.log(res.data.verified);
                } catch (err) {
                    console.error(err);
                }
              
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
                    const res = await axios.get('https://api-control.tusksite.com/api/V1/auth/resendLink', {
                        headers: {
                            Authorization: `Bearer ${token}`
                }
                });
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
        
    <div  class="w-[68.5rem]">

    <Header :pathh="path" />
    </div>
        <hr class="w-full absolute  left-0 top-[6rem] h-[1.2px] bg-red-100 ">
        <div class="mt-[7.5rem] ">
    
    
        <div class="mx-auto px-2 w-[40rem] items-center justify-center text-center">
            <span >
                <div class="   justify-center">
                    <form action="" @submit="submitHandler" class="flex-col">
                    <span>
                        <h1 class="text-2xl font-bold font-madeForDisplayBold text-black-700 pt-6 ">Verify your account</h1>
                    </span>
                    <span>
                        <h3 class="text-md text-gray-400 flex flex-col font-normal my-3">
                        <span class="text-xs sm:text-lg">

                            Please check your email. We've sent a code to  
                        </span>
                        <span class="font-bold font-madeForDisplayMedium text-gray-500">
                            {{email}}
                        </span>
                        </h3>
                    </span>
                    <span v-if="resent" class="pb-[1rem">Code resent, check your mail</span>
                    <span>
                        <input v-model="form.code" type="text" name="otp" required placeholder="6-digit code" maxlength="6" class=" bg-transparent focus:outline font-bold font-madeForDisplayMedium mt-[1rem]  focus:outline-2 w-full h-[3.5rem] max-w-2xl border border-gray-400 mb-3 rounded-md text-center">
                    </span>
                    <span class="my-[1rem] text-[red] xs:text-xl justify-center flex"><p>{{error}}</p></span>
                    <span>
                        <button type="submit" class="w-full h-[3.5rem] max-w-2xl bg-black text-white font-bold font-madeForDisplaySemiBold  rounded-md mt-2">Verify Account</button>
                    </span>
                </form>
                <span class="font-bold font-madeForDisplaySemiBold">
                    <p class=" mt-3 pb-5 ">
                    Didn't get code? <button @click="resendHandler" class="text-lg  text-[#1238bf] hover:underline"> Resend code</button>

                    </p>
                </span>
            </div>
        </span>
        </div>
        </div>
    
</section>
</template>



