
<template>
  <svg v-if="black" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"  viewBox="0 0 24 24"><path fill="#fff" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"></path></svg>
  <svg v-if="white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"  viewBox="0 0 24 24"><path fill="#000" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"></path></svg>
</template>

<script setup>
 import {ref} from 'vue';
  const props = defineProps(['fill']);
  let white = ref(false)
  let black = ref(false)

  if(!props.fill) {
    black.value = true;
    white.value = false
  } else if (props.fill) {
    white.value = true
    black.value = false;
  }
</script>
