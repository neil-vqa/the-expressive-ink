<template>
  <div>
  	<client-only>
			<StripeNav />
		</client-only>
  	<div>
  		<h1 class="min-h-screen flex items-center justify-center font-semibold 
  				text-2xl text-center text-gray-800 animate-pulse" v-show="loading">
  			Loading story...
  		</h1>
  	</div>
    <div class="container-title">
    	<h1 class="text-4xl md:text-5xl font-semibold">{{ story.title }}</h1>
    	<h2 class="text-xl text-gray-700">{{ story.author }}</h2>
    	<p class="text-xl text-gray-700">{{ story.date }}</p>
    </div>
    <div>
    	<div v-for="content in story.contents" :key="content.index" class="">
    		<div v-if="content.block == 'heading'" class="mb-10 text-3xl text-center font-semibold">{{ content.body }}</div>
    		<div v-if="content.block == 'text'" class="max-w-screen-md mx-auto px-10 mb-10 text-xl scrolly-component">{{ content.body }}</div>
    		<div v-if="content.block == 'image'" class="mb-10 w-3/4 mx-auto flex justify-center"><img :src="content.body"/></div>
    		
    		<!-- scrolly-components -->
    		<div v-if="content.block == 'sider'" class="scrolly-component">
    			<client-only>
    				<SideRside :content="content.body" />
    			</client-only>
    		</div>
    		<div v-if="content.block == 'sidel'" class="scrolly-component">
    			<client-only>
    				<SideLside :content="content.body" />
    			</client-only>
    		</div>
    		<div v-if="content.block == 'overlay'" class="scrolly-component">
    			<client-only>
    				<Overlay :content="content.body" />
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
			loading: true,
			urlFunctions: 'https://inkfunctions.netlify.app/.netlify/functions/stories',
			key: '',
		}
	},
	created() {
		this.getStory();
	},
	methods: {
		getStory() {
			let path = this.$route.params.slug;
			this.key = path.split("-").slice(-1)[0];
			
			this.$axios.$get(`${this.urlFunctions}?key=${this.key}`)
				.then(response => {
					this.story = response;
					this.loading = false;
				});
		},
	},
}
</script>

<style>
.container-title {
	@apply pt-20 mb-20 text-center;
}

.scrolly-component {
	@apply mb-10 tracking-wide leading-relaxed;
}


</style>
