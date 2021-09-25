<template>
  <div class="flex justify-center mt-6 text-2xl">Edit Snippet</div>
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
                  placeholder="Snippet title"
                />
              </div>
            </div>
          </div>
          <!-- Description Field -->
          <div>
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div class="mt-1">
              <textarea
                v-model="description"
                id="description"
                name="description"
                rows="3"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Describe snippet..."
              />
            </div>
          </div>

          <!-- Content Field -->
          <div>
            <label
              for="content"
              class="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <div class="mt-1">
              <textarea
                v-model="content"
                id="content"
                name="content"
                rows="3"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Content snippet..."
              />
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
import { updateSnippet } from "../../services/ApiCalls";
import * as CodeMirror from "codemirror";
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
 import 'codemirror/addon/hint/anyword-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';

export default {
  props: ["snippet"],
  emits: ["changeMode", "snippetsListChanged"],
  data() {
    return {
      id: "",
      title: "",
      description: "",
      content: "",
      cm: null,
    };
  },
  mounted() {
    this.id = this.snippet.id;
    this.title = this.snippet.title;
    this.description = this.snippet.description;
    this.content = this.snippet.content;

    this.cm = CodeMirror.fromTextArea(document.getElementById("content"), {
      mode: "text/html",
      extraKeys: { "Ctrl-Space": "autocomplete" }
    }).setValue(this.content);
  },
  methods: {
    async processForm() {
      const snippet = {
        title: this.title,
        description: this.description,
        content: this.content2,
      };
      console.log(snippet);
      
      const res = await updateSnippet(snippet, this.id);
      if (!res.errors) {
        console.log(res.message);
        this.$emit("snippetsListChanged");
        this.$emit("changeMode", "snippetsList");
      } else {
        console.log(res.errors[Object.keys(res.errors)[0]][0]);
      }
    },
  },
};
</script>

<style></style>
