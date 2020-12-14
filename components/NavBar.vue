<template>
  <div class="relative w-full py-2 border-b-2 border-black">
		<div class="flex justify-between max-w-screen-lg lg:mx-auto px-5">
		  <div class="flex justify-center sm:justify-start items-center">
		  	<nuxt-link to="/">
		  		<h1 class="font-lora font-bold text-xl uppercase hover:text-gray-600">The Expressive Ink</h1>
		  	</nuxt-link>
		  </div>
		  <div class="flex justify-end items-center space-x-3">
		  	<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 hover:text-gray-600 cursor-pointer" 
		  		width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" 
		  		stroke-linejoin="round" @click="expandNav">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<line x1="4" y1="6" x2="20" y2="6" />
					<line x1="4" y1="12" x2="20" y2="12" />
					<line x1="4" y1="18" x2="20" y2="18" />
				</svg>
		  </div>
		</div>
		<div v-show="navOverlay" class="navOverlayEl absolute top-0 w-full min-h-screen overflow-auto z-50">
			<div class="max-w-screen-lg h-full lg:mx-auto text-white">
				<div class="float-right p-5">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x hover:text-gray-600 cursor-pointer" 
						width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
						stroke-linejoin="round" @click="expandNav">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<rect x="4" y="4" width="16" height="16" rx="2" />
						<path d="M10 10l4 4m0 -4l-4 4" />
					</svg>
				</div>
				<div class="flex flex-col h-full w-full items-center justify-center space-y-5 py-10">
					<div>
						<nuxt-link to="#" class="nav-link hover:text-gray-600">
						  Sign Up
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="#" class="nav-link hover:text-gray-600">
						  Login
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="/stories" class="nav-link hover:text-gray-600">
						  Stories
						</nuxt-link>
					</div>
					<hr class="border border-white w-3/5 opacity-75">
					<div>
						<nuxt-link to="#" class="nav-link hover:text-gray-600">
						  About Us
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="#" class="nav-link hover:text-gray-600">
						  Support Us
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			navOverlay: false,
		}
	},
	methods: {
		expandNav() {
			this.navOverlay = !this.navOverlay;
		}
	},
}
</script>

<style>
.navOverlayEl {
	background-color: rgba(0,0,0, 0.96);
}

.nav-link {
	@apply text-4xl;
}


</style>
