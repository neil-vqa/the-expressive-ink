<template>
  <div class="container-progress space-y-5">
  	<div v-for="name in names">
  		<div class="step-progress" data-step="0">{{ name }}</div>
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
				step: ".step-progress",
				offset: this.offsetVal,
				progress: true,
				debug: this.debugVal
			})
			.onStepProgress(this.handleStepProgress);
			
			window.addEventListener("resize", scroller.resize);
		},
		handleStepProgress(response) {
			// { element, index, progress }
			let opacity = response.element.getAttribute('data-step');
			let level = response.progress;
			
			response.element.style.opacity = level;
		}
	},
}
</script>

<style scoped>

.container-progress {
	@apply w-full flex flex-col justify-center items-center text-center mx-auto py-16;
}

.step-progress {
	@apply w-64 h-64 bg-gray-500 flex justify-center items-center text-3xl opacity-0 px-20;
}


</style>
