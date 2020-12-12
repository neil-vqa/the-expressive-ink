<template>
  <div class="container-overlay">
  	<div class="graphic-overlay">
  		<img :src="image"/>
  	</div>
  	<div class="content-overlay space-y-32">
			<div v-for="name in names">
				<div class="step-overlay" data-step="0">{{ name }}</div>
			</div>
  	</div>
  </div>
</template>

<script>
import scrollama from "scrollama";
import "intersection-observer";

export default {
	data() {
		return {
			names: ['Kimi No Nawa is Your Name in English','hyojoo','sora','suzy','sonee'],
			transitionIn: 'animate__fadeInUp',
			offsetVal: 0.7,
			debugVal: false,
			image: 'https://i.pinimg.com/originals/cf/1e/1f/cf1e1f0935d8048f2da4ac4781d8261c.jpg',
			overlayBg: '#ADAEB3',
			stepBg: '#E7E9EF'
		}
	},
	mounted() {
		this.loadComponent();
	},
	methods: {
		loadComponent() {
			const scroller = scrollama();
			
			scroller.setup({
				step: ".step-overlay",
				offset: this.offsetVal,
				debug: this.debugVal,
				progress: true,
			})
			.onStepProgress(this.handleStepProgress);
			
			window.addEventListener("resize", this.handleResize(scroller));
		},
		handleStepProgress(response) {
			// { element, index, progress }
			let opacity = response.element.getAttribute('data-step');
			let level = response.progress;
			
			response.element.style.opacity = level;
			response.element.style.backgroundColor =  this.stepBg;
		},
		handleResize(scroller) {
			let step = document.querySelector('.step-overlay');
			let graphic = document.querySelector('.graphic-overlay');
      
      graphic.style.backgroundColor =  this.overlayBg;
      
      let graphicHeight = window.innerHeight / 1.5;
      let graphicMarginTop = (window.innerHeight - graphicHeight) / 2;
      graphic.style.height =  graphicHeight + "px";
      graphic.style.top =  graphicMarginTop + "px";
      
      scroller.resize();
		},
	},
}
</script>

<style scoped>

.container-overlay {
	@apply relative w-full mx-auto py-16;
}

.graphic-overlay {
	@apply sticky top-0 z-0 flex justify-center items-center w-full overflow-hidden;
}

.graphic-overlay img {
	@apply object-contain h-full;
}

.content-overlay {
	@apply relative w-full flex flex-col justify-center items-center;
}

.step-overlay {
	@apply flex items-center text-base p-10 opacity-0;
	min-width: 300px;
	max-width: 320px;
}

.step-overlay:last-child {
	margin-bottom: 8rem;
}

@media screen and (min-width: 600px) {
	.step-overlay {
		@apply text-xl;
		max-width: 420px;
	}
	
	.step-overlay:last-child {
		margin-bottom: 12rem;
	}
}

@media screen and (min-width: 1024px) {
	.step-overlay {
		@apply text-2xl;
		max-width: 480px;
	}
	
	.step-overlay:last-child {
		margin-bottom: 16rem;
	}
}



</style>
