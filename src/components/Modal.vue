<template>
   <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
   >
      <div
         class="relative z-10"
         aria-labelledby="modal-title"
         role="dialog"
         aria-modal="true"
         v-show="isModalActive"
      >
         <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
         ></div>

         <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
               class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
               <transition
                  enter-active-class="ease-out duration-300"
                  enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                  leave-active-class="ease-in duration-200"
                  leave-class="opacity-100 translate-y-0 sm:scale-100"
                  leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
               >
                  <div
                     @dragenter.prevent="toggleActive"
                     @dragleave.prevent="toggleActive"
                     @dragover.prevent
                     @drop.prevent="toggleActive"
                     :class="{'active-drop' : active}"
                     class="relative dropzone transform w-96 h-full rounded-md bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border-red border-1"
                     v-show="isModalActive"
                  >
                     <HeaderModal @modalFalse="setModalFalse" />
                     <Chat />
                     <Footer/>
                  </div>
               </transition>
            </div>
         </div>
      </div>
   </transition>
</template>

<script>
import { ref } from "vue";
import HeaderModal from "./HeaderModal.vue";
import Chat from "./Chat.vue";
import Footer from "./Footer.vue";

export default {
   components: {
    HeaderModal,
    Chat,
    Footer,
   },
   props: {
      isModalActive: Boolean,
   },
   methods: {
      setModalFalse() {
         this.$emit("modalFalse", false);
      },
   },
   setup(){
      const active = ref(false)
      const toggleActive = () => {
         active.value = !active.value
      }
      return {active, toggleActive}
   }
};
</script>

<style>
   .active-drop{
      opacity: 0.8;
      filter: grayscale(70%);
   }
</style>