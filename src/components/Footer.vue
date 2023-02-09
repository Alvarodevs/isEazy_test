<template lang="">
   <div
      class="bg-white w-full px-5 py-6 sm:flex sm:flex-row sm:px-6 rounded-b-md justify-between border-t-2 border-grey-border-input"
   >
      <div class="relative w-11/12 rounded-3xl shadow-sm">
         <input
            type="text"
            name="message"
            id="message"
            class="block rounded-3xl h-full w-full px-4 text-lg bg-grey-bg-input border-grey-border-input focus-visible:border-blue"
         />
      </div>
      <button type="button">
         <div class="max-w-[40px] m-auto">
            <img src="../assets/send.png" alt="Send message" />
         </div>
      </button>
   </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
