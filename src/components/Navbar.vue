<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="isLogin">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const sotre = useStore();
    const handleClick = () => {
      sotre.dispatch("logout");
    };
    return {
      handleClick,
      user: computed(() => sotre.state.user),
      isLogin: computed(() => sotre.state.isLogin),
    };
  },
};
</script>