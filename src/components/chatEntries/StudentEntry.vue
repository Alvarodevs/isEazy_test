<template>
   <div class="p-5 flex flex-row-reverse justify-start">
      <div class="w-10 rounded-full self-center">
         <img
            class="rounded-full"
            src="../../assets/student_avatar.jpg"
            alt="Avatar"
         />
      </div>
      <div
         class="w-0 h-0 pr-3 self-center border-t-[10px] border-t-transparent border-l-[12px] border-l-blue border-b-[10px] border-b-transparent"
      ></div>
      <div class="w-7/12 bg-blue text-white p-3">
         <p class="mb-2">{{ data.data.message }}</p>
         <p class="text-xs">{{ data.date }}</p>
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
