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

.wall {
	background-color: #fff;
}

.story-wall {
	@apply max-w-screen-lg min-h-screen py-20;
}

.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 0.4s ease-in;
}
</style>
