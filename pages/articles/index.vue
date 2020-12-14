<template>
	<div>
		<NavBar />
		<div class="max-w-screen-lg lg:mx-auto py-20">
			<vue-masonry-wall :items="articles" :options="options" @append="append">
				<template v-slot:default="{item}">
		      <div class="">
		        <nuxt-link :to="`/articles/${item.slug}`" class="">
							<div class="px-10 py-5 text-2xl bg-blue-200 cursor-pointer hover:bg-blue-600">{{ item.title }}</div>
						</nuxt-link>
		      </div>
		    </template>
			</vue-masonry-wall>
		</div>
  </div>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";

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
	components: {VueMasonryWall},
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
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
