<template>
  <div>
    <client-only>
      <transition appear name="fade">
        <StripeNav />
      </transition>
    </client-only>

    <!-- loaders -->
    <div class="">
      <div v-if="$fetchState.pending" class="loading-state">
        Loading story. Please wait.
      </div>
      <div v-else-if="$fetchState.error" class="loading-state">
        Sorry. Please reload the page.
      </div>
    </div>

    <!-- head -->
    <div class="container-title">
      <h1 class="text-4xl md:text-5xl font-semibold">{{ story.title }}</h1>
      <h2 class="text-xl text-gray-700">{{ story.author }}</h2>
      <p class="text-xl text-gray-700">{{ story.date }}</p>
    </div>

    <!-- body -->
    <div>
      <div v-for="content in story.contents" :key="content.index" class="">
        <div
          v-if="content.block == 'heading'"
          class="mb-10 text-3xl text-center font-semibold"
        >
          {{ content.body }}
        </div>
        <div
          v-if="content.block == 'text'"
          class="max-w-screen-md mx-auto px-10 mb-10 text-xl scrolly-component"
        >
          {{ content.body }}
        </div>
        <div
          v-if="content.block == 'image'"
          class="mb-10 w-3/4 mx-auto flex justify-center"
        >
          <img :src="content.body" />
        </div>

        <!-- scrolly-components -->
        <div v-if="content.block == 'sider'" class="scrolly-component">
          <client-only>
            <SideRside :content="content.body" />
          </client-only>
        </div>
        <div v-if="content.block == 'sidel'" class="scrolly-component">
          <client-only>
            <SideLside :content="content.body" />
          </client-only>
        </div>
        <div v-if="content.block == 'overlay'" class="scrolly-component">
          <client-only>
            <Overlay :content="content.body" />
          </client-only>
        </div>
        <!-- end scrolly-components -->
      </div>
    </div>

    <!-- social share buttons 
    <div class="flex justify-center mb-20 space-x-2">
    	<ShareNetwork
					network="facebook"
					:url="shareURL"
					:title="story.title"
					class="share-btn space-x-2 hover:bg-gray-800"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="20" height="20" 
						viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
					</svg>
					<div>Share</div>
			</ShareNetwork>
			<ShareNetwork
					network="twitter"
					:url="shareURL"
					:title="story.title"
					class="share-btn space-x-2 hover:bg-gray-800"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="20" height="20" 
						viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
					</svg>
					<div>Tweet</div>
			</ShareNetwork>
    </div> 
     
    <SocialHead
      :title="story.title"
      :description="story.excerpt"
      :image="story.cover_img"
    />		-->

    <Footer />
  </div>
</template>

<script>
import { metaTags } from "../../utils/meta";

export default {
  head() {
    return {
      title: `${this.story.title} | The Expressive Ink`,
      meta: metaTags({
        title: this.story.title,
        excerpt: this.story.excerpt,
        cover_img: this.story.cover_img,
      }),
      /*meta: [
			{ hid: 'description', name: 'description', content: this.story.excerpt },
				{ hid: 'og:title', name: 'og:title', content: `${this.story.title} | The Expressive Ink` },
				{ hid: 'og:description', name: 'og:description', content: this.story.excerpt },
				{ hid: 'og:image', name: 'og:image', content: this.story.cover_img },
				{ hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
				{ hid: 'twitter:title', name: 'twitter:title', content: this.story.title },
				{ hid: 'twitter:description', name: 'twitter:description', content: this.story.excerpt },
				{ hid: 'twitter:image', name: 'twitter:image', content: this.story.cover_img },
			] */
    };
  },
  data() {
    return {
      story: "",
    };
  },
  /*async asyncData({ params, $axios }) {
		let path = params.slug;
		let key = path.split("-").slice(-1)[0];
		let baseAPI = 'https://inkfunctions.netlify.app/.netlify/functions/stories';
		const story = await $axios.$get(`${baseAPI}?key=${key}`);
		
		if (!story.error) {
			return { story }
		} else {
			console.log(story.error);
		}
	},*/
  async fetch() {
    let path = this.$route.params.slug;
    let key = path.split("-").slice(-1)[0];
    this.story = await this.$axios.$get(
      `https://inkfunctions.netlify.app/.netlify/functions/stories?key=${key}`
    );
  },
  created() {
    this.$fetch();
  },
  methods: {},
  computed: {
    //	shareURL() {
    //		return `https://theexpressiveink.com/stories/${this.$route.params.slug}`;
    //	}
  },
};
</script>

<style>
.container-title {
  @apply pt-20 mb-20 text-center max-w-screen-lg mx-auto;
}

.scrolly-component {
  @apply mb-10 tracking-wide leading-relaxed;
}

.share-btn {
  @apply flex cursor-pointer items-center bg-gray-600 p-4 text-white text-sm;
}

.loading-state {
  @apply flex flex-col justify-center items-center font-semibold text-2xl text-gray-800 animate-pulse min-h-screen;
}
</style>
