<template>
   <main class="flex min-h-screen w-screen font-Titilium">
      <section class="w-1/2 flex flex-col m-auto">
         <div class="flex flex-row gap-5 mb-3 justify-center">
            <h2 class="pt-1 text-2xl">Welcome to</h2>
            <img src="../assets/iseazy-logo-menu-white.svg" alt="logo" />
            <h2 class="pt-1 text-2xl">chat test</h2>
         </div>
         <h3 class="text-center m-5 text-xl">Click button below to open chat modal</h3>
         <button
            type="button"
            class="w-max text-2xl px-3 m-auto border-2 border-main text-main rounded-md hover:border-white hover:bg-main hover:text-white ease-in-out duration-300"
            @click="isModalActive = true"
         >
            Open
         </button>
      </section>      
   </main>
   <Modal :isModalActive="isModalActive" @modalFalse="closeModal"/>
</template>

<script>
export default {
   data() {
      return {
         isModalActive: false,
      };
   },
   methods: {
    closeModal(value){
      this.isModalActive = value
    }
   }
};
</script>
