<template>
  <div>
    <button v-if="mode !== 'snippetsList'" @click="goBack()" class="m-6 flex justify-start cursor-pointer">Back</button>
    <div v-if="mode === 'snippetsList'">
      <snippets-list :list="snippetsList" :type="'admin'" v-on:snippetsListChanged="updateSnippetsList" v-on:changeMode="changeMode($event)"></snippets-list>
    </div>
    <div v-if="mode === 'createSnippet'">
      <create-snippet v-on:snippetsListChanged="updateSnippetsList" v-on:changeMode="changeMode($event)"></create-snippet>
    </div>
    <div v-if="mode === 'editSnippet'">
      <edit-snippet v-on:changeMode="changeMode($event)" v-on:snippetsListChanged="updateSnippetsList" :snippet="snippetToEdit"></edit-snippet>
    </div>
    <div v-if="mode === 'showSnippet'">
      <show-snippet v-on:changeMode="changeMode($event)" v-on:snippetsListChanged="updateSnippetsList" :snippet="snippetToShow"></show-snippet>
    </div>
  </div>
</template>

<script>
import SnippetsList from "../../components/Snippets/SnippetsList.vue";
import CreateSnippet from "../../components/Snippets/CreateSnippet.vue";
import EditSnippet from "../../components/Snippets/EditSnippet.vue";
import ShowSnippet from "../../components/Snippets/ShowSnippet.vue"
import { getSnippetsList } from "../../services/ApiCalls";

export default {
  components: { SnippetsList, CreateSnippet, EditSnippet, ShowSnippet },
  data() {
    return {
      mode: 'snippetsList',
      snippetToEdit: {},
      snippetToShow: {},
      snippetsList: [],
    };
  },  
  mounted() {
    getSnippetsList.then((res) => {
      this.snippetsList = res;
    });
  },
  methods: {
    updateSnippetsList() {
      fetch("http://localhost:8000/api/snippets", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.snippetsList = data.data;
        })
        .catch((err) => console.log(err.message));
    },
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