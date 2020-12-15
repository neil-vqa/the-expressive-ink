<template>
  <div>
  	<NavBar />
    <div class="container-title">
    	<h1 class="text-4xl md:text-5xl font-semibold">{{ story.title }}</h1>
    	<h2 class="text-xl text-gray-700">{{ story.author }}</h2>
    	<p class="text-xl text-gray-700">{{ story.date }}</p>
    </div>
    <div>
    	<div v-for="content in story.contents" :key="content.index" class="">
    		<div v-if="content.heading" class="mb-10 text-3xl text-center font-semibold">{{ content.heading }}</div>
    		<div v-if="content.text" class="max-w-screen-md mx-auto px-10 mb-10 text-xl tracking-wider leading-loose">{{ content.text }}</div>
    		<div v-if="content.image" class="mb-10 w-3/4 mx-auto flex justify-center"><img :src="content.image"/></div>
    		
    		<!-- scrolly-components -->
    		<div v-if="content.sider" class="scrolly-component">
    			<client-only>
    				<SideRside :content="content.sider" />
    			</client-only>
    		</div>
    		<div v-if="content.sidel" class="scrolly-component">
    			<client-only>
    				<SideLside :content="content.sidel" />
    			</client-only>
    		</div>
    		<div v-if="content.overlay" class="scrolly-component">
    			<client-only>
    				<Overlay :content="content.overlay" />
    			</client-only>
    		</div>
    		<div v-if="content.overlayfull" class="scrolly-component">
    			<client-only>
    				<OverlayFull :content="content.overlayfull" />
    			</client-only>
    		</div>
    		<!-- end scrolly-components -->
    		
    	</div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
	data() {
		return {
			story: '',
		}
	},
	created() {
		this.getStory();
	},
	methods: {
		getStory() {
			this.$axios.$get('https://neil-vqa.github.io/expressive-ink-data/story/')
				.then((response) => {
					this.story = response;
				});
		}
	},
}
</script>

<style>
.container-title {
	@apply pt-20 mb-20 text-center;
}

.scrolly-component {
	@apply mb-10 tracking-wider leading-relaxed;
}


</style>
