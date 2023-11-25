<script setup>
  
    import CopyRight from "../../components/Icons/CopyRight.vue"
    import Header from "../../components/signup-components/Header.vue";
    import {reactive, ref, watchEffect, watch} from 'vue';
    import {useRoute} from 'vue-router';
    const steps = [
        {path:"register", component:"Account"},
        {path:"activation", component:"Activation"},
        {path:"setup", component:"Setup"},
        {path:"brief", component:"Brief"},
    ];
    const currentPath = ref('');
    const route = useRoute();
    let path = route.path.slice(1);
    let paths = steps.map((item)=>item.path)
    let id = ref(paths.indexOf(path))
    let back = ref('')
    let top = ref(false)
    watch(
        () => route.path,
        (newValue, oldValue) => {
            currentPath.value = newValue;
        path = newValue.slice(1);
        // alert(path)
        paths = steps.map((item)=>item.path)
        id = ref(paths.indexOf(path))
        console.log('Route changed from', oldValue.slice(1), 'to', newValue.slice(1));
        }
    );
    const stepItem = ref('step-item');
    const currentStep = reactive({counter:1});
//    alert(isModal.value);
if( path !== 'activation' || path !== 'setup' || path !== 'brief'){
    top.value = true
} else{
    top.value = false

}
</script>

<template>
  <div class=" xl:w-[1080px] ">

    <Header :pathh="path" />
    <hr :class="{'top-[4rem] md:top-[6rem]' : top}" class="w-full absolute  left-0 mt-[3rem] md:mt-0 md:top-[6rem] h-[1.2px] bg-red-100 ">
    <div class="mt-[7.5rem] xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem]">
   
    <router-view></router-view>
    <span class="flex my-5 justify-center mt-[3rem] text-gray-600">
            <div class="sm:pt-1.5">
                <copy-right /> 
            </div>
            <div class="text-xs sm:text-lg font-madeForDisplayMedium  text-gray-400 ">

                2023 Kobocloud. All rights preserved.
            </div>
        </span>
  </div>
  </div>
</template>

