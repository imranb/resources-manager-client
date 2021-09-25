<template>
  <div class="flex justify-center mt-6 text-2xl">Snippet</div>
  <div class="mt-5 md:mt-0 md:col-span-2">
      <div class="sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5  space-y-6 sm:p-6">
          <!-- Description Field -->
          <div>
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div class="mt-1">
              <textarea disabled
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
              <textarea disabled
                v-model="content"
                id="content"
                name="content"
                rows="3"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Content snippet..."
              />
            </div>
          </div>
          <div>
              <button @click="copyToClipboard" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Copy to clipboard</button>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
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
      readOnly: "nocursor"
    }).setValue(this.content);
  },
  methods: {
      copyToClipboard() {
          navigator.clipboard.writeText(this.content)
          alert('Content copied to clipboard')
      }
  }
};
</script>

<style></style>
