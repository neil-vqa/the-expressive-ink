<template>
  <div>
    <NavBar />
    <div class="wall">
      <div class="story-wall lg:mx-auto">
        <h1 class="text-5xl text-center">Privacy Policy</h1>
        <div v-for="(text, index) in texts" :key="index">
          <div class="my-10 px-5 lg:px-32">
            <h2 class="text-2xl font-bold text-gray-800">{{ text.name }}</h2>
            <p class="text-gray-700 text-lg">{{ text.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: "",
    };
  },
  created() {
    this.getTexts();
  },
  methods: {
    getTexts() {
      this.$axios
        .$get("https://inkcms.netlify.app/content/serve/privacy.json")
        .then((response) => {
          this.texts = response.privacy;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>