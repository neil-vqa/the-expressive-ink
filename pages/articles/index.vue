<template>
  <div>
    <div v-for="article in articles" :key="article.id">
  		<nuxt-link :to="`/articles/${article.slug}`" class="">
  			<div class="px-10 py-5 text-2xl bg-blue-200 cursor-pointer hover:bg-blue-600">{{ article.title }}</div>
  		</nuxt-link>
    </div>
  </div>
</template>

<script>
const articles = [
	{title: 'Kimi No Nawa', slug: 'kimi-no-nawa', id: 1 },
	{title: '5 Centimeters per Second', slug: '5-centimeters-per-second', id: 2 },
]

export default {
	data() {
		return {
			articles: articles
		}
	},
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
