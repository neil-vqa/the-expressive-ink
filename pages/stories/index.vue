<template>
	<div>
		<client-only>
			<StripeNav />
		</client-only>
		<div class="wall">
			<div class="story-wall lg:mx-auto">
				<div v-show="loading" class="my-10 font-semibold text-2xl text-gray-800 animate-pulse">Loading stories. Please wait.</div>
				  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
				  	<div v-for="story in stories">
						  <nuxt-link :to="`/stories/${story.slug}-${story.key}`">
								<div class="story-card space-y-2">
									<h3 class="text-2xl font-semibold capitalize">{{ story.title }}</h3>
									<p class="text-gray-700">{{ story.author }}</p>
		  						<p class="text-gray-700 text-sm">{{ story.date }}</p>
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
		return {
		}
	},
	data() {
		return {
			stories: '',
			loading: true,
		}
	},
	async fetch() {
		let response = await this.$axios.$get('https://inkfunctions.netlify.app/.netlify/functions/stories');
		this.stories = response.value;
		this.loading = false;
	},
/*	created() {
		this.getStories();
	},
	methods: {
		getStories() {
			this.$axios.$get('https://inkfunctions.netlify.app/.netlify/functions/stories')
				.then(response => {
					this.stories = response.value;
					this.loading = false;
				});
		},
	},*/
}
</script>

<style scoped>
.wall {
	background-color: #fff;
}

.story-wall {
	@apply max-w-screen-lg min-h-screen py-20;
}

.story-card {
	@apply p-10 border border-gray-500;
}

.story-card:hover {
	@apply border-0 transition duration-200;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}


</style>
