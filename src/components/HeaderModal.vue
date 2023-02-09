<template lang="">
   <div class="flex flex-row justify-between p-3 border-black border-b-[3px]">
      <h2 class="w-full text-center text-xl font-semibold">Comentarios</h2>
      <button>
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="#0C8CFA"
         class="w-6 h-6"
         @click="setModalFalse"
      >
         <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
         />
      </svg>
   </button>
   </div>
</template>

<script>
export default {
   methods: {
      setModalFalse() {
         this.$emit("modalFalse", false);
      },
   },
};
</script>
