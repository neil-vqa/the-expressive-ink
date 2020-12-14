<template>
	<div>
		<NavBar />
		<div class="max-w-screen-lg lg:mx-auto py-20">
	      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
	      	<div v-for="article in articles">
			      <nuxt-link :to="`/stories/${article.slug}`" class="">
							<div class="article-card hover:shadow-2xl hover:text-gray-700">{{ article.title }}</div>
						</nuxt-link>
					</div>
	      </div>
		</div>
		<Footer />
  </div>
</template>

<script>
const articles = [
	{title: 'Kimi No Nawa', slug: 'kimi-no-nawa', id: 1 },
	{title: '5 Centimeters per Second', slug: '5-centimeters-per-second', id: 2 },
	{title: 'The Garden of Words', slug: 'the-garden-of-words', id: 3 },
	{title: 'Weathering with You', slug: 'weathering-with-you', id: 4 },
	{title: 'Weathering with You', slug: 'weathering-with-you', id: 5 },
	{title: 'Weathering with You', slug: 'weathering-with-you', id: 6 },
	{title: 'Weathering with You', slug: 'weathering-with-you', id: 7 },
	{title: 'Weathering with You', slug: 'weathering-with-you', id: 8 },
]

export default {
	head() {
		return {
			script: [
				{ src: '' },
			]
		}
	},
	data() {
		return {
			articles: articles,
			options: {width: 300, padding: 10}
		}
	},
	methods: {
		append() {
			
		},
	}
}
</script>

<style>
.article-card {
	@apply px-5 py-4 text-2xl border-b border-gray-500 cursor-pointer;
}


</style>
