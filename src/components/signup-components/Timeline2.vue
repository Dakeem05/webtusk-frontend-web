<script setup>
   
    // import {reactive, ref, watchEffect, watch} from 'vue';
    // import {useRoute} from 'vue-router';
    // const steps = [
    //     {path:"register", component:"Account"},
    //     {path:"checkout", component:"Activation"},
    //     {path:"plans", component:"Plan"},
    //     {path:"tasks", component:"First task"},
    // ];
    // const currentPath = ref('');
    // const route = useRoute();
    // let path = route.path.slice(1);
    // let paths = steps.map((item)=>item.path)
    // let id = ref(paths.indexOf(path))
    // watch(
    //     () => route.path,
    //     (newValue, oldValue) => {
    //     currentPath.value = newValue;
    //     path = newValue.slice(1);
    //     paths = steps.map((item)=>item.path)
    //     id = ref(paths.indexOf(path))
    //     emit('newId', id)
    //     console.log('Route changed from', oldValue.slice(1), 'to', newValue.slice(1));
    //     }
    // );
    // const stepItem = ref('step-item');
    // const currentStep = reactive({counter:1});
    // const emit = defineEmits(['newId']);
        const props = defineProps(['steps', 'id', 'stepItem'])
</script>

<template>
    
    <div  class="flex">
    
      <div v-for="( step, index) in steps" :key="index" :class="[{active :  id === index  }, stepItem, {complete: index < id}]">
        <p class=" step">
          {{ step.component }}
        </p>
      </div>
    </div>

</template>


<style lang="css">
    .step-item{

    @apply relative flex  justify-center items-center w-full;
    }
    .step-item:not(:first-child):before{
    @apply content-[''] bg-[#d6d4d4] absolute w-full h-[3px] -mt-[0.1rem] right-2/4 top-4  -translate-y-2/4;
    }
    .step{

    @apply   font-bold text-black font-madeForDisplayBold  text-xs xs:text-sm mt-[1.9rem] xs:mt-7 relative  
    }
    .step::before{
    /* @apply content-[''] right-1/3  top-3.5 z-10 border-white border-2 bg-back -mt-9 absolute w-4 h-4 rounded-full */
    }
    .active .step::before{
    @apply content-[''] right-1/3  top-[1.1em] z-10  bg-[#163300] -mt-9 absolute w-3 h-3 rounded-full
    }
    /* .complete .step::before{
    @apply bg-blue-500
    } */
    .active:not(:first-child):before{
    @apply bg-gradient-to-r from-green-500 to-[#163300]
    }
    .complete:not(:first-child):before{
    @apply bg-green-500
    }
</style>