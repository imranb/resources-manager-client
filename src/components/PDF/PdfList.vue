<template>
  <div>
    <div class="flex justify-between mx-6 items-center mb-8">
      <div class="my-4 text-2xl">Pdf List</div>
      <div class="bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="openCreate()">Create</div>
    </div>
    <FlashMessage></FlashMessage>

    <div v-show="!list.length" class="text-xl">The list is empty</div>
    <div v-for="pdf in list" :key="pdf" class="flex flex-col mx-5">
      <div class="flex justify-between bg-white p-3 mb-2 shadow rounded">
        <div class="pl-3">{{pdf.title}}</div>
        <div class="flex pr-3 gap-2 items-center">
          <span class="text-sm text-green-600 cursor-pointer" @click="downloadPdf(pdf.path)">Download</span>
          <span class="text-sm text-blue-500 cursor-pointer" v-show="type==='admin'" @click="openEditPdf(pdf)">Edit</span>
          <span class="text-sm text-red-500 cursor-pointer" v-show="type==='admin'" @click="deletePDF(pdf.id)">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deletePdf } from '../../services/ApiCalls'

export default {
  props: ['list', 'type'],
  emits: ['pdfListChanged', 'changeMode'],
  components: ['FlashMessage'],
  data() {
    return {
    }
  }, 
  methods: {
    deletePDF(id) {
      deletePdf(id)
      this.$emit('pdfListChanged')
    },
    openCreate() {
      this.$emit('changeMode', 'createPdf'); 
    },
    openEditPdf(pdf) {
      this.$emit('changeMode', ['editPdf', pdf]);  
    },
    downloadPdf(path) {
      const url = `http://localhost:8000/storage/files/pdfs/${path}`;
      window.location.href = url;
    }
  }
}
</script>

<style>

</style>