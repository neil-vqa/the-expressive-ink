<template>
  <div>
  	<div class="my-20 bg-blue-200">
  		<h1 class="text-5xl text-center">Basic Block</h1>
  	</div>
  	<div class="py-20">
  		<client-only>
  			<Basic />
  		</client-only>
  	</div>
    <div class="my-20 bg-blue-200">
  		<h1 class="text-5xl text-center">End</h1>
  	</div>
  </div>
</template>

<script>
export default {
	layout: 'block'
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
