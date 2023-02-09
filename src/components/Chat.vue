<template lang="">
   <div class="w-full flex flex-col h-[25rem] overflow-y-scroll">
      <div v-for="entry in chatStore.chat">
         <div v-if="entry.type === 'file'">
            <FileEntry :data=entry></FileEntry>
         </div>
         <div v-else-if="entry.type === 'student'">
            <StudentEntry :data=entry />
         </div>
         <div v-else-if="entry.type === 'teacher'">
            <TeacherEntry :data=entry />
         </div>
      </div>
   </div>
</template>

<script setup>
import FileEntry from "./chatEntries/FileEntry.vue";
import StudentEntry from "./chatEntries/StudentEntry.vue";
import TeacherEntry from "./chatEntries/TeacherEntry.vue";

import { useChatStore } from "../store/chat";
const chatStore = useChatStore();

</script>
