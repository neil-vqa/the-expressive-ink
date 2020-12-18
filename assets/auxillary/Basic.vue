<template>
  <div class="container-basic space-y-5">
  	<div v-for="name in names">
  		<div class="step-basic animate__animated">{{ name }}</div>
  	</div>
  </div>
</template>

<script>
import scrollama from "scrollama";
import "intersection-observer";

export default {
	data() {
		return {
			names: ['jihyo','hyojoo','sora','suzy','sonee'],
			transitionIn: 'animate__fadeInUp',
			offsetVal: 0.7,
			debugVal: false,
		}
	},
	mounted() {
		this.loadComponent();
	},
	methods: {
		loadComponent() {
			const scroller = scrollama();
			
			scroller.setup({
				step: ".step-basic",
				offset: this.offsetVal,
				debug: this.debugVal
			})
			.onStepEnter(this.handleStepEnter)
			.onStepExit(this.handleStepExit);
			
			window.addEventListener("resize", scroller.resize);
		},
		handleStepEnter(response) {
			// { element, index, direction }
			if (response.direction === 'down') {
				response.element.classList.toggle(this.transitionIn);
				response.element.classList.toggle('is-active');
			}
		},
		handleStepExit(response) {
			if (response.direction === 'up') {
				response.element.classList.toggle(this.transitionIn);
				response.element.classList.toggle('is-active');
			}
		},
	},
}
</script>

<style scoped>

.container-basic {
	@apply w-full flex flex-col justify-center items-center text-center mx-auto py-16;
}

.step-basic {
	@apply w-64 h-64 bg-blue-500 flex justify-center items-center text-3xl opacity-0 px-20;
}

.step-basic.is-active {
	@apply opacity-100;
}

</style>
