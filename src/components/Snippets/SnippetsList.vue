<template>
  <div>
    <div class="flex justify-between mx-6 items-center mb-8">
      <div class="my-4 text-2xl">Snippets List</div>
      <div class="bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="openCreate()">Create</div>
    </div>

    <div v-show="!list.length" class="text-xl">The snippet list is empty</div>
    <div v-for="snippet in list" :key="snippet" class="flex flex-col mx-5">
      <div class="flex justify-between bg-white p-3 mb-2 shadow rounded">
        <div class="pl-3">{{snippet.title}}</div>
        <div class="flex pr-3 gap-2 items-center">
          <span class="text-sm text-blue-500 cursor-pointer" @click="openShowSnippet(snippet)">Show</span>
          <span class="text-sm text-blue-500 cursor-pointer" v-show="type==='admin'" @click="openEditSnippet(snippet)">Edit</span>
          <span class="text-sm text-red-500 cursor-pointer" v-show="type==='admin'" @click="removeSnippet(snippet.id)">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteSnippet } from '../../services/ApiCalls'

export default {
  props: ['list', 'type'],
  emits: ['snippetsListChanged', 'changeMode'],
  data() {
    return {
    }
  }, 
  methods: {
    removeSnippet(id) {
      deleteSnippet(id)
      this.$emit('snippetsListChanged')
    },
    openCreate() {
      this.$emit('changeMode', 'createSnippet'); 
    },
    async openEditSnippet(snippet) {
      this.$emit('changeMode', ['editSnippet', snippet]);  
    },
    async openShowSnippet(snippet) {
      this.$emit('changeMode', ['showSnippet', snippet])
    }
  }
}
</script>

<style>

</style>