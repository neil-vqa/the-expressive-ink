<template>
  <div>
    <StripeNav />
    <div class="wall">
      <div class="story-wall lg:mx-auto">
        <h1 class="text-5xl text-center">Support Us</h1>
        <div v-for="(text, index) in texts" :key="index">
          <div class="my-10 px-5 lg:px-32">
            <h2 class="text-2xl font-bold text-gray-800">{{ text.name }}</h2>
            <p class="text-gray-700 text-lg">{{ text.description }}</p>
          </div>
        </div>
        <div class="flex justify-center my-10">
          <a href="https://www.buymeacoffee.com/neilvan">
            <p class="text-center mb-3">Supporting starts here.</p>
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=neilvan&button_colour=FF5F5F&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
            />
          </a>
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
        .$get("https://inkcms.netlify.app/content/serve/support.json")
        .then((response) => {
          this.texts = response.support;
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
