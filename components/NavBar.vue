<template>
  <div class="w-full py-2 border-b-2 border-black">
		<div class="flex flex-col sm:flex-row justify-between max-w-screen-lg lg:mx-auto sm:px-5">
		  <div class="flex justify-center sm:justify-start items-center">
		  	<nuxt-link to="/">
		  		<h1 class="font-lora font-bold text-xl uppercase hover:text-gray-600">The Expressive Ink</h1>
		  	</nuxt-link>
		  </div>
		  <div class="flex justify-center sm:justify-end items-center space-x-3">
		  	<div>
		  		<nuxt-link to="#" class="text-base hover:text-gray-600">
				    Login
				  </nuxt-link>
		  	</div>
		  	<div>
		  		<nuxt-link to="#" class="btn-black text-base">
				    Sign Up
				  </nuxt-link>
		  	</div>
		  </div>
		</div>
  </div>
</template>

<script>
export default {
	
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
