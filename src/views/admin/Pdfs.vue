<template>
  <div>
    <button v-if="mode !== 'pdfList'" @click="goBack()" class="m-6 flex justify-start cursor-pointer">Back</button>
    <div v-if="mode === 'pdfList'">
      <pdf-list :list="pdfList" :type="'admin'" v-on:pdfListChanged="updatePdfList()" v-on:changeMode="changeMode($event)"></pdf-list>
    </div>
    <div v-if="mode === 'createPdf'">
      <create-pdf v-on:pdfListChanged="updatePdfList()" v-on:changeMode="changeMode($event)"></create-pdf>
    </div>
    <div v-if="mode === 'editPdf'">
      <edit-pdf :pdf="pdfToEdit" v-on:pdfListChanged="updatePdfList()" v-on:changeMode="changeMode($event)"></edit-pdf>
    </div>
  </div>
</template>

<script>
import PdfList from "../../components/PDF/PdfList.vue";
import CreatePdf from "../../components/PDF/CreatePdf.vue";
import EditPdf from "../../components/PDF/EditPdf.vue"
import { getPdfList } from "../../services/ApiCalls";

export default {
  components: { PdfList, CreatePdf, EditPdf },
  data() {
    return {
      mode: 'pdfList',
      pdfToEdit: {},
      pdfList: [],
    };
  },
  mounted() {
    getPdfList.then((res) => {
      this.pdfList = res;
    });
  },
  methods: {
    updatePdfList() {
      fetch("http://localhost:8000/api/pdfs", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.pdfList = data.data;
        })
        .catch((err) => console.log(err.message));
    },
    changeMode(event) {
      if ((typeof event) === "object") {
        this.mode = event[0];
        this.pdfToEdit = event[1];
      } else {
        this.mode = event;
      }
    },
    goBack() {
      this.mode = 'pdfList';
    }
  },
};
</script>

<style>
</style>