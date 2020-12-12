<template>
  <div class="container-home">
    <div>
      <h1 class="title">
        The Expressive Ink
      </h1>
      <h1 class="subtitle">
        Tell stories in the way of the Modern Web.
      </h1>
      <div class="links space-x-5">
        <nuxt-link
        	to="/basic"
          class="button--grey"
        >
          Basic
        </nuxt-link>
        <nuxt-link
        	to="/progress"
          class="button--grey"
        >
          Progress
        </nuxt-link>
        <nuxt-link
        	to="/overlay"
          class="button--grey"
        >
          Overlay
        </nuxt-link>
        <nuxt-link
        	to="/side"
          class="button--grey"
        >
          Side by Side
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
	@apply font-lora font-semibold text-center text-6xl mb-5;
}

.subtitle {
	@apply font-merri text-center text-3xl text-gray-700 mb-10;
}

.links {
	@apply flex justify-center;
}
</style>
