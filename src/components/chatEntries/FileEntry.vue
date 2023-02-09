<template>
   <div class="w-full p-2">
      <div
         class="w-11/12 flex justify-between m-auto py-2 border-grey-border-input"
         :class="data.data.version === 'VERSIÓN 1' ? 'border-b-1' : 'border-y-1'"
      >
         <div class="w-full pl-5">
            <h4 class="font-bold text-xs mb-1">{{ data.data.version }}</h4>
            <p class="text-blue font-bold mb-1">{{ data.data.title }}</p>
            <div class="flex gap-3 text-sm font-semibold">
               <p>{{ data.data.doc_type }}</p>
               <p>{{ data.data.size }}</p>
               <p>{{ data.date }}</p>
            </div>
         </div>

         <div class="w-[60px] h-[60px] pr-5 my-auto py-3">
            <img src="../../assets/cloud.png" alt="Download" />
         </div>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      type: String,
      date: String,
      data: {
         version: String,
         title: String,
         doc_type: String,
         size: String,
      },
   },
};
</script>
