<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  const status = ref('');
  const isVerified = ref(false);
  // localStorage.setItem('isVerified', isVerified)
  let token = localStorage.getItem('webtusk_token');
 onMounted( async ()=>{
  
   try {
     const response = await axios.get('https://api-control.tusksite.com/api/V1/auth/getUserState', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // checkVerified
      // console.log(response.data.message);
      localStorage.setItem('status', response.data.message)
      try {
        const res = await axios.get('https://api-control.tusksite.com/api/V1/auth/checkVerified', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
         if(res.data.verified == true) {
          localStorage.setItem('isVerified', res.data.verified)

        }
        // console.log(res.data.verified);
      } catch (err) {
        console.error(err);
      }
  } catch (err) {
      // console.error(err.response);
      console.error(err.response.data.message);
      localStorage.setItem('status', err.response.data.message)
      // status.value = err.response.data.message
  }
 })



</script>

<template>
  <div class="font-madeForDisplayVariable">
  <router-view></router-view>

  </div>
</template>
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS1jb250cm9sLnR1c2tzaXRlLmNvbS9hcGkvVjEvYXV0aC9yZWdpc3RlciIsImlhdCI6MTY5NDE3MjM1OCwiZXhwIjoxNjk0Mzg4MzU4LCJuYmYiOjE2OTQxNzIzNTgsImp0aSI6InNtSUlDQUxXTHRIMVZJcGYiLCJzdWIiOiIyMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.UWmRDqQgTfKY6hgJYvlxaYjXT1nt5t5nFREN-PEEQJo"
<style scoped>
</style>
