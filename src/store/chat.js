import { defineStore } from "pinia";

const initialState = [
   {
      type: 'file',
      date: dateTransform( new Date('05 October 2011 14:47 UTC')),
      data: {
         version: 'VERSIÓN 1',
         title: 'Título de archivo.pdf',
         doc_type: 'Documento / PDF',
         size: '(3.8 MB)'
      }
   },{
      type: 'student',
      date: dateTransform(new Date('06 October 2011 14:48 UTC')),
      data: {
         message: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.'
      }
   }, {
      type: 'teacher',
      date: dateTransform(new Date('06 October 2011 14:50 UTC')),
      data: {
         message: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.'
      }
   }, {
      type: 'file',
      date: dateTransform(new Date('07 October 2011 14:48 UTC')),
      data: {
         version: 'VERSIÓN 2',
         title: 'Título de archivo.pdf',
         doc_type: 'Documento / PDF',
         size: '(4.8 MB)'
      }
   }, {
      type: 'student',
      date: dateTransform(new Date('07 October 2011 14:50 UTC')),
      data: {
         message: 'Realizados los cambios según feedback.'
      }
   }, {
      type: 'teacher',
      date: dateTransform(new Date('07 October 2011 14:55 UTC')),
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
      addMessageToChat(entry){
         const messageObject = {
            type: entry.type,
            date: dateTransform(timeStamp()),
            data: {
               message: entry.message
            }
         }
         this.chat.push(messageObject);
      },
      addFileToChat(entry){
         let versionLength = 0
         this.chat.map(item => {item.type === 'file' ? versionLength += 1 : null})
         
         const fileObject = {
            type: 'file',
            date: dateTransform(timeStamp()),
            data: {
               version: `VERSIÓN ${versionLength + 1}`,
               title: entry.name,
               doc_type: entry.type.replace('application', 'Documento ').replace('/pdf', '/ PDF'),  
               size: '(' + (Math.round(`${entry.size}` / 1024 * 100) / 100).toFixed(2) +` MB)` 
            }
         }
         this.chat.push(fileObject);
      }
   }
})

function timeStamp (){
   return new Date(Date.now())
}

function dateTransform  (date) {
   const day = date.getDate()
   const month = date.toLocaleString('default', {month: 'short'})
   const year = date.getFullYear()
   const hours = date.getHours()
   const minutes = date.getMinutes()
   return `${day} ${month} ${year} / ${hours}:${minutes}`
}