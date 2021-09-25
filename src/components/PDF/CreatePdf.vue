<template>
  <div class="flex justify-center mt-6 text-2xl">Create Pdf</div>
  <FlashMessage :position="'right bottom'"></FlashMessage>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <form @submit.prevent="processForm()">
      <div class="sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5  space-y-6 sm:p-6">
          <div class="w-full">
            <div class="col-span-3 sm:col-span-2">
              <label
                for="company-website"
                class="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="title"
                  id="title"
                  v-model="title"
                  class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder="PDF title"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              PDF
            </label>
            <div
              class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
            >
              <div class="space-y-1 text-center">
                <svg
                  class="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="path"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="path"
                      name="path"
                      type="file"
                      accept=".pdf"
                      @change="onFileChange"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">
                  PDF up to 10MB
                </p>
                <span class="text-xs text-gray-500">{{ fileName }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["changeMode", "pdfListChanged"],
  data() {
    return {
      title: "",
      path: null,
      fileName: "",
    };
  },
  methods: {
    processForm() {
      const formData = new FormData();
      formData.append("title", this.title);
      
      if (this.path === undefined || this.path === null) {
        console.log('file is required')
        return;
      }
      if (this.path.size / 1048576 > 10) { // file size is larger than 10mb
        console.log('file size exceeded', this.path.size / 1048576) 
        return;
      }
      formData.append("path", this.path);

      fetch("http://localhost:8000/api/pdfs/store", {
        method: "post",
        headers: {},
        body: formData,
      })
        .then((res) => res.json())
        .then(() => {
          this.$emit("changeMode", "pdfList");
          this.$emit("pdfListChanged");
        })
        .catch((err) => console.log(err));
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.path = files[0];
      this.fileName = this.path.name;
    },
  },
};
</script>

<style></style>
