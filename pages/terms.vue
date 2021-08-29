<template>
  <div>
    <client-only>
      <StripeNav />
    </client-only>
    <div class="wall">
      <div class="story-wall lg:mx-auto">
        <h1 class="text-5xl text-center">Terms of Service</h1>
        <div v-for="(text, index) in texts" :key="index">
          <div class="my-10 px-5 lg:px-32">
            <h2 v-if="text.name" class="text-2xl font-bold text-gray-800">
              {{ text.name }}
            </h2>
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
        .$get("https://inkcms.netlify.app/content/serve/terms.json")
        .then((response) => {
          this.texts = response.terms;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
