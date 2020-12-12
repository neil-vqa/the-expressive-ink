<template>
  <div>
    <div v-for="article in articles" :key="article.id">
    	<div class="px-10 py-5 text-2xl bg-blue-200 cursor-pointer hover:bg-blue-600">
    		<nuxt-link :to="`/articles/${article.slug}`" class="">{{ article.title }}</nuxt-link>
    	</div>
    </div>
  </div>
</template>

<script>
const articles = [
	{title: 'The Awesome Universe', slug: 'The-Awesome-Universe', id: 1 },
	{title: 'The Awesome Earth', slug: 'The-Awesome-Earth', id: 2 },
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
