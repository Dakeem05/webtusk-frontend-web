<script setup>
    import {ref, onMounted} from 'vue';
    import Loading from "../../components/Icons/Loading.vue";
    import ArrowRight from "../../components/Icons/ArrowRight.vue";
    import { useRouter } from "vue-router";
    import Ready from "../../assets/Images/framework.svg"
    import axios from 'axios';
    const router = useRouter();

    let move = ref(false)
    let back = ref(false)
    let type = ref('');
    let error = ref('');
    let submitFeature = ref([])
    let info = ref([])
    const isLoading = ref(true);
    let feature = ref([])
    let activeIndexes = ref([])
          
        let token = localStorage.getItem('webtusk_token');

       

    
        onMounted( async ()=>{
            isLoading.value = true;
            try{
                isLoading.value = true;
                
                const res =  await axios.get('https://api-control.tusksite.com/api/V1/planIndex', {
                    headers: {
                        Authorization: `Bearer ${token}`
            }
            });
            isLoading.value = false;
            
            //   console.log(res.data);
            info.value = res.data;
            } catch (err){
                isLoading.value = true;
                // console.error(err);
                console.error(err);
            }

        })


        function isActive (index) {
            return activeIndexes.value.includes(index);
        }
        function selectHandler (feature, index) {
            if((submitFeature.value).includes(feature)){
                submitFeature.value.pop(feature)            
                // isClicked.value = false
                activeIndexes.value = activeIndexes.value.filter((i) => i !== index);
            }
            else{
                submitFeature.value.push(feature)
                // isClicked.value = true
                activeIndexes.value.push(index);
            }
            // console.log(submitFeature.value)
        }


     const returnHandler = () => {
           back.value = true;
        }

            isLoading.value = true;
        async function returnType (title) {
            type.value = title
            let tit = title.replace(' ', '')
            let name = (tit.substr(0, tit.indexOf('W'))).toLowerCase();
            if(name === 'e-commerce'){
            // console.log(name);
            name = 'ecommerce';
                    const features =  await axios.get(`https://api-control.tusksite.com/api/V1/${name}Features`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                });

                feature.value = features.data
            } else {
                const features =  await axios.get(`https://api-control.tusksite.com/api/V1/${name}Features`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            });

            feature.value = features.data

            }
            back.value = false;
            move.value = true;
        }


        const submit = async () => {
            isLoading.value = true;
            error.value = ''
            let form = ref({
                type: type.value,
                features: submitFeature.value
        })
        if (typeof window !== 'undefined') {

            localStorage.setItem('type', type.value);
            localStorage.setItem('features', submitFeature.value);
        }
                isLoading.value = false;
            await  router.push({path:'/brief'})
        }
    

</script>

<template>
<span v-if="isLoading" class=" fixed left-0 right-0 w-fit mt-[25vh] opacity-100 mx-auto flex z-50 text-black"><span><Loading/></span></span>
<div :class="{'opacity-30' : isLoading}" class="text-left max-w-7xl mx-auto">
   
    <h1 class="text-md sm:text-2xl font-bold font-madeForDisplaySemiBold text-center mt-4 mb-5">What style of Website do you prefer?</h1>
    <!-- {{info}} -->
    <section  class="flex ">

        <!-- -translate-x-[100vw] -->
        <section class="grid md:grid-cols-2 lg:grid-cols-3 grid-row-3 gap-[2rem]">

            <div v-for="(info, i) in info" :key="i" :class="{' -translate-x-[100vw] transition-transform duration-1000'  : move, ' ' : !move, 'transition-transform duration-1000 translate-x-0' :back}" class="">
                <button @click="returnType(info.name)"  class="">
                        <div :class="{'border-slate-700' : isPersonal, 'border-slate-300' : isPersonal === false}" class="writeup px-[2rem] py-[2.5rem]  rounded-lg border">
                        <article id="type" class="font-semibold font-madeForDisplaySemiBold text-start sm:text-2xl">{{info.name}}</article>
                        <article id="brief" class="text-sm mb-[1rem] text-start">{{info.description}}</article>
                    <div id="websiteImage" class="bg-black h-[10rem] rounded-md mx-auto w-">
                        <img :src="`https://api-control.tusksite.com/${info.filename}`" class="w-full h-full text-white" :alt="info.name">
                    </div>
                    </div>
                </button>
            <!-- :class="{'translate-x-[0]  transition-transform duration-1000'  : features, 'translate-x-[100vw]' : !features}" -->
            </div>
        </section>
        <section :class="{'translate-x-[0]  transition-transform duration-1000'  : move, 'translate-x-[100vw]' : !move, 'translate-x-[100vw] transition-transform duration-1000' : back}" class="max-w-7xl right-0 xl:w-full w-[90%] left-0 mx-auto absolute">
            <button @click="returnHandler" class="rotate-180 absolute -top-[15%] left-0 text-2xl"><arrow-right/></button>
                <aside class=" grid md:grid-cols-2 lg:grid-cols-3 w-[100%]  gap-[2rem]">

                    <section v-for="(feature, i) in feature" :key="i"  class="">
                        <button @click='selectHandler(feature.name, i)' :class="{'border-2 border-[blue] text-[blue]' : isActive(i) }" class=" w-full">
                            <div class="rounded border-slate-400 border mx-auto flex w-full p-[2rem]">
                                <span class="mx-auto w-full">
                                    <picture class="mx-auto justify-center my-[1rem] flex"><img class="w-[3rem] h-[3rem]" :src="`https://api-control.tusksite.com/${feature.image}`"/></picture>
                                    <h1 class="capitalize text-center font-madeForDisplayBold text-2xl">{{feature.name}}</h1>
                                </span>
                            </div>
                        </button>
                    
                    </section>
                </aside>
        </section>
    
    </section>
   <div v-if="move" class="">
            <form action="" class="flex flex-col ">
                
           
                <span >
                    <button type="submit" @click.prevent="submit"  class="mx-auto flex py-[0.5rem] w-[50%] text-lg sm:text-xl mt-[4rem]  bg-black text-white font-madeForDisplayHeavy place-content-center hover:bg-neon rounded-md ">
                        Go to plans
                    </button>
                </span>
            </form>
           
   </div>
   </div>
</template>