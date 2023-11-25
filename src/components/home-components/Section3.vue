<script setup>
    import {ref} from 'vue';
    import ArrowRight from '../Icons/ArrowRight.vue'
    import Tick from '../Icons/Tick.vue'
    import Business from '../Icons/Business.vue'
    import Sell from '../Icons/Sell.vue'
    import Simple from '../Icons/Simple.vue'
    import Staff from '../Icons/Staff.vue'
    let part1 = ref(true);
    let part2 = ref(false);
    let part3 = ref(false);
    let part4 = ref(false);

    const part1Handler = () => {
        part1.value = true
        part2.value = false
        part3.value = false
        part4.value = false
    }
    const part2Handler = () => {
        part1.value = false
        part2.value = true
        part3.value = false
        part4.value = false
    }
    const part3Handler = () => {
        part1.value = false
        part2.value = false
        part3.value = true
        part4.value = false
    }
    const part4Handler = () => {
        part1.value = false
        part2.value = false
        part3.value = false
        part4.value = true
    }
    </script>

<template>
  <section class="max-w-7xl xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] mx-auto">
    <div class="hidden lg:flex gap-[6rem] ">
        <span class="w-1/2 pt-[3rem] text-start flex flex-col">
            <button @click="part1Handler" :class="{'rounded-md shadow-2xl' : part1}" class=" text-start py-[2rem] pl-[2rem]">
                <span class="flex gap-7 ">

                    <div>
                        <span v-if="part1"><Business :fill="['isActive']"/></span>
                        <span v-if="!part1"><Business/></span>
                        
                    </div>
                    <div>
                        <article :class="{'text-[#687334]' : part1}" class="font-madeForDisplayHeavy text-2xl mb-4"><slot name="h1"></slot></article>
                        <article v-if="part1" class="text-md w-11/12"><slot name="b1"></slot></article>
                    </div>
                </span>
                    <div  v-if="!part1" class="border-b-[0.1rem] mt-[2.5rem]  border-gray-400"></div>
            </button >
            <button @click="part2Handler" :class="{'rounded-md shadow-2xl' : part2}" class="  text-start   py-[2rem] pl-[2rem]">
                <span class=" flex gap-7">
                    
                    <div>
                        <span v-if="part2"><Sell :fill="['isActive']"/></span>
                        <span v-if="!part2"><Sell/></span>
                        
                    </div>
                    <div>
                        <article :class="{'text-[#687334]' : part2}" class="font-madeForDisplayHeavy text-2xl mb-4"><slot name="h2"></slot></article>
                        <article v-if="part2" class="text-md w-11/12"><slot name="b2"></slot></article>
                    </div>
                </span>
                        <div  v-if="!part2" class="border-b-[0.1rem] mt-[2.5rem]  border-gray-400"></div>
            </button >
            <button @click="part3Handler" :class="{'rounded-md shadow-2xl' : part3}" class="  text-start  py-[2rem] pl-[2rem]">
                 <span class=" flex gap-7">
                    
                    <div>
                        <span v-if="part3"><Simple :fill="['isActive']"/></span>
                        <span v-if="!part3"><Simple/></span>
                        
                    </div>
                    <div>
                        <article :class="{'text-[#687334]' : part3}" class="font-madeForDisplayHeavy text-2xl mb-4"><slot name="h3"></slot></article>
                        <article v-if="part3" class="text-md w-11/12"><slot name="b3"></slot></article>
                    </div>
                </span>

                
                <div  v-if="!part3" class="border-b-[0.1rem] mt-[2.5rem]  border-gray-400"></div>
            </button>
            <button @click="part4Handler" :class="{'rounded-md shadow-2xl' : part4}" class="  text-start  py-[2rem] pl-[2rem]">
                   <span class=" flex gap-7">
                    
                    <div>
                        <span v-if="part4"><Staff :fill="['isActive']"/></span>
                        <span v-if="!part4"><Staff/></span>
                        
                    </div>
                    <div>
                        <article :class="{'text-[#687334]' : part4}" class="font-madeForDisplayHeavy text-2xl mb-4"><slot name="h4"></slot></article>
                        <article v-if="part4" class="text-md w-11/12"><slot name="b4"></slot></article>
                    </div>
                </span>
          
                <div  v-if="!part4" class="border-b-[0.1rem] mt-[2.5rem]  border-gray-400"></div>
            </button >
        </span>
        <span class="w-1/2 h-fit">
             <img v-if="part1" class="h-[48rem] rounded-lg object-cover w-full" src="../../assets/Images/run.webp" alt="">
             <img v-if="part2" class="h-[48rem] rounded-lg object-cover w-full" src="../../assets/Images/sell.webp" alt="">
             <img v-if="part3" class="h-[48rem] rounded-lg object-cover w-full" src="../../assets/Images/seamless.webp" alt="">
             <img v-if="part4" class="h-[48rem] rounded-lg object-cover w-full" src="../../assets/Images/staff.webp" alt="">
        </span>
    </div>
    <div class="block lg:hidden">
        <section>
            <picture>
                <img class=" md:h-[28rem] rounded-lg w-full object-cover" src="../../assets/Images/run.webp" alt="">
            </picture>
            <span class="flex gap-7 mt-[2rem]">

                    <div>
                        <span class="md:text-base text-sm"><Business/></span>
                        
                    </div>
                    <div class="">
                        <article class="font-madeForDisplayBold xxs:text-xl xs:text-2xl mb-4"><slot name="h1"></slot></article>
                        <article class=" xs:text-md w-11/12"><slot name="b1"></slot></article>
                    </div>
            </span>
            <hr class="my-[2.5rem] h-[1.5px] bg-gray-300">
        </section>
        <section>
            <picture>
                <img class=" rounded-lg w-full object-cover" src="../../assets/Images/sell.webp" alt="">
            </picture>
            <span class="flex gap-7 mt-[2rem]">

                    <div>
                        <span class="md:text-base text-sm"><Sell/></span>
                        
                    </div>
                    <div class="">
                        <article class="font-madeForDisplayBold xxs:text-xl xs:text-2xl mb-4"><slot name="h2"></slot></article>
                        <article  class=" xs:text-md w-11/12"><slot name="b2"></slot></article>
                    </div>
            </span>
            <hr class="my-[2.5rem] h-[1.5px] bg-gray-300">
        </section>
        <section>
            <picture>
                <img class=" rounded-lg w-full object-cover" src="../../assets/Images/seamless.webp" alt="">
            </picture>
            <span class="flex gap-7 mt-[2rem]">

                    <div>
                        <span class="md:text-base text-sm"><Simple/></span>
                        
                    </div>
                    <div class="">
                        <article class="font-madeForDisplayBold xxs:text-xl xs:text-2xl mb-4"><slot name="h3"></slot></article>
                        <article  class=" xs:text-md w-11/12"><slot name="b3"></slot></article>
                    </div>
            </span>
            <hr class="my-[2.5rem] h-[1.5px] bg-gray-300">
        </section>
        <section>
            <picture>
                <img class="  rounded-lg w-full object-cover" src="../../assets/Images/staff.webp" alt="">
            </picture>
            <span class="flex gap-7 mt-[2rem]">

                    <div>
                        <span class="md:text-base text-sm"><Staff/></span>
                        
                    </div>
                    <div class="">
                        <article class="font-madeForDisplayBold xxs:text-xl xs:text-2xl mb-4"><slot name="h4"></slot></article>
                        <article  class=" xs:text-md w-11/12"><slot name="b4"></slot></article>
                    </div>
            </span>
            <!-- <hr class="my-[2.5rem] h-[1.5px] bg-gray-300">  -->
        </section>
    </div>
  </section>
</template>

<style>

</style>