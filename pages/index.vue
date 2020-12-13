<template>
	<div>
		<div class="upper-section">
		  <div>
		    <h1 class="title text-4xl sm:text-6xl">
		      The Expressive Ink
		    </h1>
		    <h1 class="subtitle text-2xl sm:text-3xl">
		    	You already have great stories. Let's craft them for the modern web.
		    </h1>
		    <h1 class="copy text-xl sm:text-2xl">
		      Add visual transition effects as readers scroll through your stories.
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
		<div class="custom-shape-divider-bottom-1607834695">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
				</svg>
		</div>
		<div class="mid-section">
			<h2 class="text-4xl font-semibold uppercase tracking-widest">Scrollytelling</h2>
			<h2 class="text-3xl">The Web's Way of Visual Storytelling</h2>
		</div>
		<div class="show-component">
			<client-only>
				<SideRside :content="content.sider" />
			</client-only>
		</div>
		<div class="mid-section-2">
			<h2 class="text-4xl font-semibold uppercase tracking-widest">Scrollytelling</h2>
			<h2 class="text-3xl">The Web's Way of Visual Storytelling</h2>
		</div>
  </div>
</template>

<script>
const content = {
	sider: {
		pic: "/stargazing.svg",
		stepbg: '#F59599',
		picbg: '#333',
		steptext: '#fff',
		texts: [
			{ char: "As you gaze upon the night sky to find inspiration for your next story, meteors start to fall.", pic: "/stargazing.svg" },
			{ char: "'Meteor showers!' You exclaimed with excitement.", pic: "/stargazing.svg" },
			{ char: "You wonder how far these meteors will travel. 'Where will they land?'", pic: "/stargazing.svg" },
			{ char: "You pointed your finger up to the vast starry sky.", pic: "/stargazing.svg" },
			{ char: "You start swiping the night sky like scrolling through a smartphone...", pic: "/stargazing.svg" },
			{ char: "wishing you can see where they go.", pic: "/stargazing.svg" },
			{ char: "Scroll, scroll, scroll...", pic: "/camp.svg" },
			{ char: "If you made it this far, thank you! You have just experienced what scrollytelling is.", pic: "/camp.svg" },
			{ char: "Hello! Welcome to the world of scrollytelling. Let's craft your stories for the modern web.", pic: "/camp.svg" },
		]
}};

export default {
	head() {
		return {
		}
	},
	data() {
		return {
			content: content
		}
	}
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
	@apply font-lora font-bold text-center text-black mb-1;
}

.subtitle {
	@apply font-merri font-semibold text-center text-black mb-5;
}

.copy {
	@apply font-merri text-center text-gray-800 mb-10;
}

.links {
	@apply flex justify-center;
}

.custom-shape-divider-bottom-1607834695 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1607834695 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 111px;
}

.custom-shape-divider-bottom-1607834695 .shape-fill {
  fill: #333333;
}

.mid-section {
	@apply pt-32 px-20 text-white;
	background-color: #333;
}

.show-component {
	@apply pb-32;
	background-color: #333;
}

.mid-section-2 {
	@apply py-32 px-20;
	background-color: #fff;
}

</style>
