<template>
   <div class="w-full p-2">
      <div
         class="w-11/12 flex justify-between m-auto pb-2 border-b-1 border-grey-border-input"
      >
         <div class="w-2/3 pl-5">
            <!-- {{ data }} -->
            <h4>{{ data.data.version }}</h4>
            <p>{{ data.data.title }}</p>
            <div class="flex gap-3 text-sm">
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
