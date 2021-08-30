<template>
  <div class="navbar">
    <div class="flex justify-between max-w-screen-lg lg:mx-auto px-5">
      <!-- site logo - on left -->
      <div class="flex justify-center sm:justify-start items-center">
        <nuxt-link to="/">
          <h1
            class="
              font-lora font-bold
              capitalize
              hover:text-gray-400
              text-lg
              md:text-3xl
            "
          >
            The Expressive Ink
          </h1>
        </nuxt-link>
      </div>
      <!-- primary links - on right -->
      <div class="flex justify-center sm:justify-end items-center space-x-6">
        <span>
          <nuxt-link to="/stories" class="nav-link-stripe hover:underline">
            Stories
          </nuxt-link>
        </span>
        <button class="btn-white-navbar hover:bg-black hover:text-white">
          <a href="https://app.theexpressiveink.com">Sign Up or Login</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeNav() {
      this.$store.commit("toggleNav", false);
    },
    openNav() {
      this.$store.commit("toggleNav", true);
    },
  },
  computed: {
    navStatus() {
      return this.$store.state.navOverlay;
    },
  },
};
</script>

<style>
.navbar {
  @apply relative w-full py-2 text-white bg-black;
}

.nav-link {
  @apply text-4xl;
}

.btn-white-navbar {
  @apply rounded px-3 py-1 bg-white text-black flex justify-center items-center transition duration-300;
}
</style>
