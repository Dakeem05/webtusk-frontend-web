<script setup>
  import { ref, watch, onMounted  } from 'vue';
  import { useRouter, useRoute } from "vue-router";
  import axios from "axios";
  import Loading from "../../components/Icons/Loading.vue";
  import DeleteIcon from '../../components/Icons/DeleteIcon.vue';

    const fileInput = ref(null)
    const features = ref([])
    const type = ref('')
    let error = ref('');
    const isLoading = ref(false);
    const router = useRouter();
    let website_description =  ref('')
    let audience =  ref('')
    let business_description = ref('')
    let has_website =  ref('')
    let featuresData =  ref('')
    let typeData =  ref('')
      const selectedFiles = ref([]);
    const form = ref({})
  let token = localStorage.getItem('webtusk_token');
      typeData.value =  ref(localStorage.getItem('type'))
      featuresData.value =  ref((localStorage.getItem('features')).split(','))

      form.value = {
      audience:'',
        website_description:'',
        business_description:'',
        has_website: '',
        file_name: selectedFiles.value,
        features: (localStorage.getItem('features')).split(','),
        type: localStorage.getItem('type')

    }
      
      
    // const searchURL = new URL('http://localhost:5174/');
    const searchURL = new URL('https://accounts.tusksite.com');
    searchURL.searchParams.set('auth', localStorage.getItem('webtusk_token'));

    



     

     onMounted( () =>{
      type.value = localStorage.getItem('type');
      features.value = localStorage.getItem('features');
    })
    
const handleFileSelection = (event) => {
      selectedFiles.value = Array.from(fileInput.value.files).map((file) => ({
        file,
        name: file.name,
        url: URL.createObjectURL(file),
      }));
    };
    const deleteFile = (file) => {
      const index = selectedFiles.value.indexOf(file);
      // const index = selectedFiles.value.findIndex((f) => f.name === file.name);
      if (index !== -1) {
        selectedFiles.value.splice(index, 1);
      }
    };
       const submitHandler = async (e) => {
        e.preventDefault();
          error.value = ''
        isLoading.value = true;
        const formData = new FormData();
      
      for (const file of selectedFiles.value) {
        formData.append('file_name[]', file.file);
      }

      formData.append('website_description', website_description.value);
      formData.append('business_description', business_description.value);
      formData.append('audience', audience.value);
      formData.append('has_website', has_website.value);
      formData.append('features', (localStorage.getItem('features')));
      formData.append('type', typeData.value);


       try{
         isLoading.value = true;
           const res = await axios.post('https://api-control.tusksite.com/api/V1/getBrief', formData, {
             headers: {
               Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          }
        });

            isLoading.value = false;
               localStorage.removeItem('type');
                localStorage.removeItem('features');
                localStorage.setItem('status', 'active')
             location.replace(`${searchURL}`);
        } catch (err){
          isLoading.value = false;
            console.error(err);
                if((err.response.data.message).length === 1){

                  error.value = err.response.data.message
                } else {
                 error.value = err.response.data.message
                }

        }

    }


    

   
</script>
<template>
<span v-if="isLoading" class=" fixed left-0 right-0 w-fit mt-[25vh] opacity-100 mx-auto flex z-50 text-black"><span><Loading/></span></span>
    <div :class="{'opacity-30' : isLoading}" class="text-left max-w-3xl mx-auto">
        <!-- <router-link to="/plans"></router-link> -->
        <h1 class="text-md sm:text-3xl font-madeForDisplayBold font-bold text-center mt-16 ">Tell us how you’d like your website done?</h1>
        <h1 class="text-md sm:text-3xl font-madeForDisplayBold font-bold text-center  mb-5">Just fill the following information</h1>
         <div class="mt-16">
            <form action="" @submit="submitHandler" class="flex flex-col   ">

                <span >
                    <label class="sm:text-2xl text-lg font-madeForDisplaySemiBold" for="business_description">Describe your business in a few sentences.</label>
                    <br>
                    <textarea required v-model="business_description" class="my-4 bg-transparent border w-full focus:outline  text-xl focus:outline-2 border-gray-400 rounded-md" name="description" id="description" cols="50" rows="5"></textarea>
                </span>
                <span >
                    <label  class="sm:text-2xl text-lg font-madeForDisplaySemiBold" for="website_description">Website Description</label>
                    <br>
                    <textarea required v-model="website_description" class="my-4 focus:outline  focus:outline-2 bg-transparent text-xl border w-full border-gray-400 rounded-md" name="description" id="description" cols="100" rows="5"></textarea>
                </span>
                  <span class="flex flex-col gap-5 mt-[0.8rem]">
                    <label class="sm:text-2xl text-lg font-madeForDisplaySemiBold" for="haveWebsite">Do you currently have a website?</label>
                    <select name="haveWebsite" required v-model="has_website" id="" class="focus:outline  focus:outline-2 h-[2.5rem] relative  bg-transparent font-madeForDisplayMedium  border border-gray-400 rounded-md">
                      <option   disabled selected  value=""> -- Please select -- </option>
                      <option value="1">Yes</option>
                      <option default value="0">No</option>
                    </select>
                  </span>
                  <span class="flex flex-col gap-5 my-[1.9rem]">
                    <label class="sm:text-2xl text-lg font-madeForDisplaySemiBold  lg:w-1/2"  for="has_website">Who is your target audience?</label>
                    <input required v-model="audience" type="text" class="focus:outline  focus:outline-2 h-[2.5rem]  relative  bg-transparent text-xl  border border-gray-400 rounded-md">
                  </span>
                <span>
                    <label class="sm:text-2xl text-lg font-madeForDisplaySemiBold " for="files">Files, Documents, logo and all the images you want to use</label>
                    <br>
                    <!-- <input type="file" name="file" id="file" class=" border w-full border-gray-400 rounded-md  cursor-pointer"> -->
                     <!-- <input type="file" name="files[]" id="fileInput" class="cursor-pointer" multiple accept=".jpg, .jpeg, .png" @change="handleFileSelection"> -->
                     <div @drop="handleFileSelection" class="flex items-center justify-center mt-[0.8em] mb-[2rem] w-full">
                      <label for="dropzone-file" class="flex flex-col items-center h-[12rem] justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 ">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                              </svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop files</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                          </div>
                          <input id="dropzone-file" type="file" ref="fileInput" class="hidden" name="files[]" multiple accept=".jpg, .pdf, .xlx, .csv, .mp3, .mp4, .bmp, .jpeg, .png, .gif, .svg" @change="handleFileSelection"/>
                      </label>
                    </div> 
                      <div class="preview-container my-[2rem]">
           <div v-for="file in selectedFiles" :key="file.name" class=" mt-6  preview-item relative">
        <img :src="file.url" class="mr-4" :alt="file.name">
        <button class="absolute -right-0 -top-4" @click="deleteFile(file)"><delete-icon/></button>
      </div>
           <!-- <div v-for="file in selectedFiles" :key="file.name" class=" mt-6  preview-item relative">
        <img :src="file.url" class="mr-4" :alt="file.name">
        <button class="absolute -right-0 -top-4" @click="deleteFile(file)"><delete-icon/></button>
      </div> -->
    </div>
                </span>
                <span class="my-[1rem] text-[red] xs:text-xl justify-center flex"><p>{{error}}</p></span>
                <span class="w-full">
                    <button type="submit"  class=" py-[0.5rem] text-lg w-full sm:w-fit sm:px-[7rem] mx-auto flex mt-4  font-madeForDisplaySemiBold bg-black text-white font-semibold hover:bg-neon rounded-md ">
                      <span class="mx-auto">
                        Complete

                      </span>
                    </button>
                </span>
            </form>
           
   </div>
    </div>
</template>

<style>
.preview-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.preview-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
}

.preview-item img {
  width: 100px;
  height: 100px;
}

.preview-item span {
  margin-top: 5px;
}
</style>