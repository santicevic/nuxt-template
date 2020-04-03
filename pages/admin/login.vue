<template>
  <form @submit.prevent="onSubmit">
    <input v-model="email" type="text" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  name: 'Login',
  fetch({ redirect, $auth }) {
    if ($auth.loggedIn) {
      redirect('/admin');
    }
  },
  data() {
    return {
      email: 'sergije@gmail.com',
      password: 'volintehajduce'
    };
  },
  methods: {
    async onSubmit() {
      const { email, password } = this;
      try {
        await this.$auth.loginWith('local', {
          data: { email, password }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
