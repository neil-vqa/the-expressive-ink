<template>
  <div class="container-home">
    <div>
      <h1 class="title text-4xl sm:text-6xl">
        The Expressive Ink
      </h1>
      <h1 class="subtitle text-2xl sm:text-3xl">
        Tell stories in the way of the modern web.
      </h1>
      <div class="links space-x-5">
        <nuxt-link to="/" class="button--grey sign-up"
        	v-tippy="{ placement : 'top', arrow : true }" content="We'll be delighted to have you here.">
          Sign Up
        </nuxt-link>
        <nuxt-link to="/articles" class="button--grey-inverted read-btn"
        	v-tippy="{ placement : 'right', arrow : true }" content="Engaging stories by great storytellers.">
          Read Stories
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	head() {
		return {
			script: [
				{ src: '' },
				{ src: '' },
			]
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
.container-home {
	@apply flex items-center justify-center min-h-screen w-full;
}

.title {
	@apply font-lora font-semibold text-center mb-5;
}

.subtitle {
	@apply font-merri text-center text-gray-700 mb-10;
}

.links {
	@apply flex justify-center;
}
</style>
