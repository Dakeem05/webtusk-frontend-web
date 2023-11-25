<template>
<div>

  <!-- in vue 2.x you need wrap these buttons in a div -->
  <button class="carousel-control xs:w-[70px] xs:h-[50px] xxs:w-[30px] xxs:h-[30px] left" @click="$emit('prev')"><left-icon/></button>
  <button class="carousel-control xs:w-[70px] xs:h-[50px] xxs:w-[30px] xxs:h-[30px] right" @click="$emit('next')"><right-icon/></button>
</div>
</template>

<script setup>
  import RightIcon from "../Icons/RightIcon.vue";
  import LeftIcon from "../Icons/LeftIcon.vue";
  const emits = defineEmits(['prev', 'next']);
</script>
<style scoped>
.carousel-control {
  border: none;
  display: inline-block;
  position: absolute;
  /* height: 50px; */
  /* width: 70px; */
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
