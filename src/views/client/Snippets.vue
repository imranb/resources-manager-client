<template>
  <div>
    <button v-if="mode !== 'snippetsList'" @click="goBack()" class="m-6 flex justify-start cursor-pointer">Back</button>
    <div v-if="mode === 'snippetsList'">
      <snippets-list :list="snippetsList" :type="'client'" v-on:changeMode="changeMode($event)"></snippets-list>
    </div>
    <div v-if="mode === 'showSnippet'">
      <show-snippet v-on:changeMode="changeMode($event)" :snippet="snippetToShow"></show-snippet>
    </div>
  </div>
</template>

<script>
import SnippetsList from "../../components/Snippets/SnippetsList.vue";
import { getSnippetsList } from "../../services/ApiCalls";
import ShowSnippet from "../../components/Snippets/ShowSnippet.vue"


export default {
  components: { SnippetsList, ShowSnippet },
  data() {
    return {
      mode: 'snippetsList',
      snippetsList: [],
      snippetToShow: {},
    };
  },  
  mounted() {
    getSnippetsList.then((res) => {
      this.snippetsList = res;
    });
  },
  methods: {
    changeMode(event) {
      if ((typeof event) === "object") {
        this.mode = event[0];
        this.snippetToEdit = event[1];
        this.snippetToShow = event[1];
      } else {
        this.mode = event;
      }
    },
     goBack() {
      this.mode = 'snippetsList';
    }
  }
}
</script>

<style>

</style>