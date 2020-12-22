<template>
  <div>
    <Nuxt keep-alive />
  </div>
</template>

<style>
html {
	@apply font-merri;
}

.btn-black {
	@apply border border-black rounded-lg bg-black text-white flex justify-center items-center transition duration-300;
	padding: 15px 20px;
}

.btn-black:hover {
	@apply bg-white text-black;
}

.btn-white {
	@apply border border-black rounded-lg bg-white text-black flex justify-center items-center transition duration-300;
	padding: 15px 20px;
}

.btn-white:hover {
	@apply bg-black text-white; 
}
</style>
