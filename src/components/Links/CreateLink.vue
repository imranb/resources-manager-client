<template>
  <div class="flex justify-center mt-6 text-2xl">Create Link</div>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <form @submit.prevent="processForm()">
      <div class="sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 space-y-6 sm:p-6">
          <div>
            <div class="col-span-3 sm:col-span-2">
                  <label for="title" class="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" name="title" id="title" v-model="title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Link title" />
                  </div>
                </div>
          </div>
          <div>
            <div class="col-span-3 sm:col-span-2">
              <label for="url" class="block text-sm font-medium text-gray-700">
                Url
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input type="url" name="url" id="url" v-model="url" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="http://example.com" />
              </div>
            </div>
          </div>

          <div class="block">
            <div class="mt-2">
              <div class="flex justify-items-start">
                <label for="open_in_tab" class="inline-flex items-center">
                  <input type="checkbox" name="open_in_tab" v-model="openInTab" class="form-checkbox">
                  <span class="ml-2">Open in new tab</span>
                </label>
              </div>
            </div>
          </div>

        </div>
        
        <div class="px-4 py-3 text-right sm:px-6">
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
      
    </form>
  </div>

</template>

<script>
import { storeLink } from '../../services/ApiCalls';
export default {
  emits: ['linkListChanged', 'changeMode'],
  data() {
    return {
      title: '',
      url: '',
      openInTab: false
    }
  }, 
  methods: {
    async processForm() {
      const link = {
        title: this.title,
        url: this.url,
        open_in_tab: this.openInTab
      }
      const res = await storeLink(link)
      if(!res.errors) {
        console.log(res.message)
        this.$emit('linkListChanged')
        this.$emit('changeMode', 'linkList')
      } 
      else {
        console.log(res.errors[Object.keys(res.errors)[0]][0])
      }
    }
  }
};
</script>

<style>
</style>