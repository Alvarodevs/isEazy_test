<template>
   <div class="bg-main">
      {{ data }}
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
         size: String 
      }
   }
}
</script>