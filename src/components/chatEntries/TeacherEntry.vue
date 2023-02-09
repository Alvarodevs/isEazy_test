<template>
   <div class="p-5 flex flex-row justify-start">
      <div class="w-10 rounded-full self-center">
         <img
            class="rounded-full"
            src="../../assets/teacher_avatar.jpg"
            alt="Avatar teacher"
         />
      </div>
      <div
         class="w-0 h-0 pr-3 self-center border-t-[10px] border-t-transparent border-r-[12px] border-r-bg-grey-bg border-b-[10px] border-b-transparent"
      ></div>
      <div class="w-7/12 bg-grey-bg text-black p-3">
         <p class="mb-2">{{ data.data.message }}</p>
         <p class="text-xs font-semibold">{{ data.date }}</p>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      type: String,
      date: String,
      data: {
         message: String,
      },
   },
};
</script>