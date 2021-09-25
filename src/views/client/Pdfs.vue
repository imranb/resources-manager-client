<template>
  <div>
    <FLashMessage></FLashMessage>
      <pdf-list :list="pdfList" :type="'client'"></pdf-list>  
  </div>
</template>

<script>
import PdfList from "../../components/PDF/PdfList.vue";
import { getPdfList } from "../../services/ApiCalls";

export default {
  components: { PdfList},
  data() {
    return {
      pdfList: [],
    };
  },
  mounted() {
    getPdfList.then((res) => {
      this.pdfList = res;
    });
  }
};
</script>

<style>
</style>