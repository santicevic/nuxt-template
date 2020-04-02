<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .post('/api/authentication/login', {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
