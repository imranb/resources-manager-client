<template>
  <div>
    <div class="flex justify-between mx-6 items-center mb-8">
      <div class="my-4 text-2xl">Link List</div>
      <div class="bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="openCreate()">Create</div>
    </div>

    <div v-show="!list.length" class="text-xl">The list is empty</div>
    <div v-for="link in list" :key="link" class="flex flex-col mx-5">
      <div class="flex justify-between bg-white p-3 mb-2 shadow rounded">
        <div class="pl-3">{{link.title}}</div>
        <div class="flex pr-3 gap-2 items-center">
          <span class="text-sm text-green-600 cursor-pointer"><a :href="link.url" :target="link.open_in_tab ? '_blank' : ''">Open</a></span>
          <span class="text-sm text-blue-500 cursor-pointer" v-show="type==='admin'" @click="openEditLink(link)">Edit</span>
          <span class="text-sm text-red-500 cursor-pointer" v-show="type==='admin'" @click="removeLink(link.id)">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {   deleteLink } from '../../services/ApiCalls'

export default {
  props: ['list', 'type'],
  emits: ['linkListChanged', 'changeMode'],
  data() {
    return {
    }
  }, 
  methods: {
    async removeLink(id) {
      const res = await deleteLink(id)
      if (!res.errors) {
        console.log(res.message)
        this.$emit('linkListChanged')
      }
      else {
        console.log(res.errors[Object.keys(res.errors)[0]][0])
      }
    },
    openCreate() {
      this.$emit('changeMode', 'createLink'); 
    },
    async openEditLink(link) {
      this.$emit('changeMode', ['editLink', link]);  
    }
  }
}
</script>

<style>

</style>