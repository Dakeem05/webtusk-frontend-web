<script setup>
    import CloseIcon from  "../Icons/CloseIcon.vue";
    import Timeline from "../../components/signup-components/Timeline2.vue";
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
        const props = defineProps(['pathh', 'back'])
        // let path = route.path.slice(1);
    let path = props.pathh;
    let paths = steps.map((item)=>item.path)
    let id = ref(paths.indexOf(path))
        const display = ref(false);
        const register = ref(false);
        const activation = ref(false);
        const setup = ref(false);
        const brief = ref(false);
          if (path == "register") {
            register.value = true;
            activation.value = false;
            setup.value = false;
            brief.value = false;
        } 
        if (path === "login" || path === "verify" || path === "forgot-password") {
            display.value = false   
        }
    watch(
        () => route.path,
        (newValue, oldValue) => {
            currentPath.value = newValue;
        path = newValue.slice(1);
     if (path == "register") {
         display.value = false   
            register.value = true;
            activation.value = false;
            setup.value = false;
            brief.value = false;
        } else if (path === "activation") {
            // alert('hy')
            display.value = true   
            register.value = false;
            activation.value = true;
            setup.value = false;
            brief.value = false;
        } else if (path === "setup") {
            display.value = true   
            register.value = false;
            activation.value = false;
            setup.value = true;
            brief.value = false;

        } else if (path === "brief") {
            display.value = true   
            register.value = false;
            activation.value = false;
            setup.value = false;
            brief.value = true;

        }
        if(path !== "register" || path !== "verify" || path !== "forgot-password" || path !== "login") {
            display.value = true
        } else{
            display.value = false
        }
       
        paths = steps.map((item)=>item.path)
        id = ref(paths.indexOf(path))
        console.log('Route changed from', oldValue.slice(1), 'to', newValue.slice(1));
        }
    );
    const stepItem = ref('step-item');
    const currentStep = reactive({counter:1});
    // if(props.pathh !== "register") {
    //     display.value = true
    // } else{
    //     display.value = false
    // }
</script>

<template>
    <section class="flex relative xl:px-5 sm:px-[3rem] xs:px-[2rem] xxs:px-[1rem] px-[0.5rem] pt-[2.5rem] gap-5">
        <router-link to="/" class="lg:w-[8rem]  xxs:w-[7rem] absolute top-[2rem] sm:left-[3rem] xs:left-[2rem] xxs:left-[1rem] left-[0.5rem] xl:left-5">
            <img class="" src="../../assets/Images/logo.svg" alt="Webtusk"/>
        </router-link>
        <div v-if="display" class=" mx-auto mt-[1rem] md:-mt-[1rem] w-[100vw] md:w-[70%]">
            <timeline :steps="steps"  :stepItem="stepItem" :id="id" />
        </div>
        <div class="absolute sm:right-[3rem] xs:right-[2rem] xxs:right-[1rem] right-[0.5rem]  xl:right-5 top-[2rem]">
              <span v-if="register">
                        <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2em] h-[2em] " viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"/></svg>
            </router-link>
            </span>
            <span v-else-if="activation">
                        <router-link to="/register"> 
             <svg xmlns="http://www.w3.org/2000/svg" class="w-[2em] h-[2em] " viewBox="0 0 24 24"><path fill="currentColor" d="m8.3 17.3l-4.6-4.6q-.15-.15-.213-.325T3.426 12q0-.2.063-.375T3.7 11.3l4.625-4.625Q8.6 6.4 9 6.4t.7.3q.275.275.275.7t-.275.7L6.8 11H20q.425 0 .713.288T21 12q0 .425-.288.713T20 13H6.8l2.925 2.925Q10 16.2 10 16.6t-.3.7q-.275.275-.7.275t-.7-.275Z"/></svg>
            </router-link>
            </span>
          
            <span v-else-if="setup">
                        <router-link to="/activation"> 
             <svg xmlns="http://www.w3.org/2000/svg" class="w-[2em] h-[2em] " viewBox="0 0 24 24"><path fill="currentColor" d="m8.3 17.3l-4.6-4.6q-.15-.15-.213-.325T3.426 12q0-.2.063-.375T3.7 11.3l4.625-4.625Q8.6 6.4 9 6.4t.7.3q.275.275.275.7t-.275.7L6.8 11H20q.425 0 .713.288T21 12q0 .425-.288.713T20 13H6.8l2.925 2.925Q10 16.2 10 16.6t-.3.7q-.275.275-.7.275t-.7-.275Z"/></svg>
            </router-link>
            </span>
            <span v-else-if="brief">
                        <router-link to="/setup"> 
             <svg xmlns="http://www.w3.org/2000/svg" class="w-[2em] h-[2em] " viewBox="0 0 24 24"><path fill="currentColor" d="m8.3 17.3l-4.6-4.6q-.15-.15-.213-.325T3.426 12q0-.2.063-.375T3.7 11.3l4.625-4.625Q8.6 6.4 9 6.4t.7.3q.275.275.275.7t-.275.7L6.8 11H20q.425 0 .713.288T21 12q0 .425-.288.713T20 13H6.8l2.925 2.925Q10 16.2 10 16.6t-.3.7q-.275.275-.7.275t-.7-.275Z"/></svg>
            </router-link>
            </span>
        </div>
    </section>
</template>