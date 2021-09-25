<template>
  <div>
    <button v-if="mode !== 'linkList'" @click="goBack()" class="m-6 flex justify-start cursor-pointer">Back</button>
    <div v-if="mode === 'linkList'">
      <link-list :list="linkList" :type="'admin'" v-on:linkListChanged="updateLinkList" v-on:changeMode="changeMode($event)"></link-list>
    </div>
    <div v-if="mode === 'createLink'">
      <create-link v-on:linkListChanged="updateLinkList" v-on:changeMode="changeMode($event)"></create-link>
    </div>
    <div v-if="mode === 'editLink'">
      <edit-link :link="linkToEdit" v-on:linkListChanged="updateLinkList" v-on:changeMode="changeMode($event)"></edit-link>
    </div>
  </div>
</template>

<script>
import LinkList from "../../components/Links/LinkList.vue";
import CreateLink from "../../components/Links/CreateLink.vue";
import EditLink from "../../components/Links/EditLink.vue"
import { getLinkList } from "../../services/ApiCalls";

export default {
  components: { LinkList, CreateLink, EditLink },
  data() {
    return {
      mode: 'linkList',
      linkToEdit: {},
      linkList: [],
    };
  },
  mounted() {
    getLinkList.then((res) => {
      this.linkList = res;
    });
  },
  methods: {
    updateLinkList() {
      fetch("http://localhost:8000/api/links", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.linkList = data.data;
        })
        .catch((err) => console.log(err.message));
    },
    changeMode(event) {
      if ((typeof event) === "object") {
        this.mode = event[0];
        this.linkToEdit = event[1];
      } else {
        this.mode = event;
      }
    },
    goBack() {
      this.mode = 'linkList';
    }
  },
};
</script>

<style>
</style>