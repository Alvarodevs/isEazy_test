<template lang="">
   <div class="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
         type="button"
         class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
         Deactivate
      </button>
      <button
         type="button"
         class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
         @click="setModalFalse"
      >
         Cancel
      </button>
   </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
