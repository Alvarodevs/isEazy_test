import { defineStore } from "pinia";

const initialState = [
   {
      type: 'file',
      date: new Date('05 October 2011 14:47 UTC').toString(),
      data: {
         version: 'VERSIÓN 1',
         title: 'Título de archivo.pdf',
         doc_type: 'Documento / PDF',
         size: '(3.8 MB)'
      }
   },{
      type: 'student',
      date: new Date('06 October 2011 14:48 UTC').toString(),
      data: {
         message: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.'
      }
   }, {
      type: 'teacher',
      date: new Date('06 October 2011 14:50 UTC').toString(),
      data: {
         message: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.'
      }
   }, {
      type: 'file',
      date: new Date('07 October 2011 14:48 UTC').toString(),
      data: {
         version: 'VERSIÓN 2',
         title: 'Título de archivo.pdf',
         doc_type: 'Documento / PDF',
         size: '(4.8 MB)'
      }
   }, {
      type: 'student',
      date: new Date('07 October 2011 14:50 UTC').toString(),
      data: {
         message: 'Realizados los cambios según feedback.'
      }
   }, {
      type: 'teacher',
      date: new Date('07 October 2011 14:55 UTC').toString(),
      data: {
         message: 'Perfecto, excelente trabajo.'
      }
   }
]

export const useChatStore = defineStore('chat', {
   state: () => ({
      chat: initialState,
   }),
   actions: {
      addEntryToChat(entry){
         this.chat.push(entry);
      }
   }
})