<template>
  <div class="home">
    <p class="justify-center flex text-5xl mt-16 mb-12">Resources Manager</p>
    <div class="text-2xl text-gray-500">
      <router-link to="/admin" class="hover:text-gray-900">Admin</router-link> |
      <router-link to="/client" class="hover:text-gray-900">Client</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>