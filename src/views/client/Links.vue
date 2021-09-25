<template>
  <div>
      <link-list :list="linkList" :type="'client'"></link-list>
  </div>
</template>

<script>
import LinkList from "../../components/Links/LinkList.vue";
import { getLinkList } from "../../services/ApiCalls";

export default {
  components: { LinkList },
  data() {
    return {
      linkList: [],
    };
  },
  mounted() {
    getLinkList.then((res) => {
      this.linkList = res;
    });
  }
};
</script>

<style>
</style>