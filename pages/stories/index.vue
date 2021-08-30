<template>
  <div>
    <NavBar />
    <div class="wall">
      <NotifBar />
      <div class="story-wall lg:mx-auto">
        <div
          class="
            inline-block
            space-y-2
            sm:flex
            sm:space-y-0
            justify-between
            items-center
            mb-10
            px-5
          "
        >
          <div class="font-semibold text-2xl text-gray-800">
            Trending Stories
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 px-5">
          <div v-for="story in stories" :key="story.key">
            <nuxt-link :to="`/stories/${story.slug}-${story.key}`">
              <div class="story-card">
                <div class="p-8 space-y-1 w-2/3">
                  <h3 class="text-lg font-semibold capitalize clamp-2">
                    {{ story.title }}
                  </h3>
                  <p class="text-gray-700 text-sm">{{ story.author }}</p>
                  <p class="text-gray-700 text-sm">{{ story.date }}</p>
                </div>
                <div class="w-1/3 thumb">
                  <img
                    :src="story.cover_img"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {};
  },
  data() {
    return {
      stories: "",
    };
  },
  created() {
    this.fetchStories();
  },
  methods: {
    fetchStories() {
      this.$axios
        .$get(
          "https://inkfunctions.netlify.app/.netlify/functions/stories?status=published"
        )
        .then((response) => {
          this.stories = response.value;
        });
    },
  },
};
</script>

<style scoped>
.story-card {
  @apply border border-gray-500 flex justify-between h-40 overflow-hidden;
}

.story-card:hover {
  @apply border-0 transition duration-200;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.story-card:hover > .thumb {
  @apply transition duration-700;
  transform: scale(1.1);
}
</style>
