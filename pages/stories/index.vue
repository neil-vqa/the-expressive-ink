<template>
	<div>
		<client-only>
			<StripeNav />
		</client-only>
		<div class="wall">
			<NotifBar />
			<div class="story-wall lg:mx-auto">
				<div class="inline-block space-y-2 sm:flex sm:space-y-0 justify-between items-center mb-10 px-5">
					<div class="font-semibold text-2xl text-gray-800">Trending Stories</div>
					<div class="flex items-center space-x-1 cursor-pointer hover:text-gray-500" @click="$fetch">
						<p>Refresh list</p>
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="20" height="20" 
							viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
							<path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
						</svg>
					</div>
				</div>
				<div v-if="$fetchState.pending" class="my-10 font-semibold text-2xl text-gray-800 animate-pulse px-5">Loading stories. Please wait.</div>
				<div v-else-if="$fetchState.error" class="my-10 font-semibold text-2xl text-gray-800 animate-pulse px-5">Sorry. Please reload the page.</div>
				  <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 px-5">
				  	<div v-for="story in stories">
						  <nuxt-link :to="`/stories/${story.slug}-${story.key}`">
								<div class="story-card">
									<div class="p-8 space-y-1 w-2/3">
										<h3 class="text-lg font-semibold capitalize clamp-2">{{ story.title }}</h3>
										<p class="text-gray-700 text-sm">{{ story.author }}</p>
										<p class="text-gray-700 text-sm">{{ story.date }}</p>
									</div>
									<div class="w-1/3 thumb">
										<img :src="story.cover_img" class="w-full h-full object-cover"/>
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
		return {
		}
	},
	data() {
		return {
			stories: '',
		}
	},
	async fetch() {
		let response = await this.$axios.$get('https://inkfunctions.netlify.app/.netlify/functions/stories?status=published');
		this.stories = response.value;
	},
	created() {
	},
	methods: {
	},
}
</script>

<style scoped>
.story-card {
	@apply border border-gray-500 flex justify-between h-40 overflow-hidden;
}

.story-card:hover {
	@apply border-0 transition duration-200;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.story-card:hover > .thumb {
	@apply transition duration-700;
	transform: scale(1.1);
}

</style>
