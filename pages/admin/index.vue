<template>
  <div>
    {{ $auth.user.email }}
    <button @click="$auth.logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  middleware: 'auth'
};
</script>

<style></style>
