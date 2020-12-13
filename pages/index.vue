<template>
	<div>
		<div class="upper-section">
		  <div>
		    <h1 class="title text-4xl sm:text-6xl">
		      The Expressive Ink
		    </h1>
		    <h1 class="subtitle text-2xl sm:text-3xl">
		      Tell stories in the way of the modern web.
		    </h1>
		    <h1 class="copy text-xl sm:text-2xl">
		      Add visual transition effects as your readers scroll through your stories.
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
		<div class="custom-shape-divider-bottom-1607820808">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
				</svg>
		</div>
		<div class="mid-section">
			<h2 class="text-4xl font-semibold uppercase tracking-widest">Scrollytelling</h2>
			<h2 class="text-3xl">The Web's Way of Visual Storytelling</h2>
		</div>
		<div class="">
			
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
.upper-section {
	@apply flex items-center justify-center min-h-screen w-full;
}

.title {
	@apply font-lora font-semibold text-center mb-5;
}

.subtitle {
	@apply font-merri text-center text-gray-700 mb-5;
}

.copy {
	@apply font-merri text-center text-gray-700 mb-10;
}

.links {
	@apply flex justify-center;
}

.custom-shape-divider-bottom-1607820808 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1607820808 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 110px;
}

.custom-shape-divider-bottom-1607820808 .shape-fill {
  fill: #333;
}

.mid-section {
	@apply py-32 px-20 text-white;
	background-color: #333;
}



</style>
