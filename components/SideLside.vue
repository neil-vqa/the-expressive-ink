<template>
  <div class="container-lside md:flex">
  	<div class="graphic-lside">
  		<img :src="content.pic"/>
  	</div>
  	<div class="content-lside space-y-32">
			<div v-for="text in content.texts">
				<div class="step-lside" data-step="0">{{ text }}</div>
			</div>
  	</div>
  </div>
</template>

<script>
import scrollama from "scrollama";
import "intersection-observer";

export default {
	props: ['content'],
	data() {
		return {
			offsetVal: 0.7,
			debugVal: false,
			overlayBg: '#E7E9EF',
			stepBg: '#E7E9EF',
			textColor: '#000',
		}
	},
	mounted() {
		this.loadComponent();
	},
	methods: {
		loadComponent() {
			const scroller = scrollama();
			
			scroller.setup({
				step: ".step-lside",
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
			
			let stepColor = (this.content.stepbg) ? this.content.stepbg:this.stepBg;
			response.element.style.backgroundColor =  stepColor;
			
			let stepText = (this.content.steptext) ? this.content.steptext:this.textColor;
			response.element.style.color =  stepText;
		},
		handleResize(scroller) {
			let step = document.querySelector('.step-lside');
			let graphic = document.querySelector('.graphic-lside');
			
			let overlayColor = (this.content.picbg) ? this.content.picbg:this.overlayBg;
			graphic.style.backgroundColor =  overlayColor;
      
      let graphicHeight = window.innerHeight / 1.5;
      let graphicMarginTop = (window.innerHeight - graphicHeight) / 2;
      graphic.style.height =  graphicHeight + "px"
      graphic.style.top =  graphicMarginTop + "px"
      
      scroller.resize();
		},
	},
}
</script>

<style scoped>

.container-lside {
	@apply relative w-full mx-auto py-16;
}

.graphic-lside {
	@apply sticky top-0 z-0 flex justify-center items-center w-full bg-gray-300 overflow-hidden;
}

.graphic-lside img {
	@apply object-cover w-full;
}

.content-lside {
	@apply relative w-full flex flex-col justify-center items-center;
}

.step-lside {
	@apply flex items-center text-base p-10 opacity-0;
	min-width: 300px;
	max-width: 320px;
}

.step-lside:last-child {
	margin-bottom: 8rem;
}

@media screen and (min-width: 600px) {
	.step-lside {
		@apply text-xl;
		max-width: 420px;
	}
}

@media screen and (min-width: 768px) {
	.graphic-lside {
		@apply w-3/5 order-last;
	}
	
	.content-lside {
		@apply w-2/5 order-first;
	}
	
	.step-lside {
		max-width: 280px;
	}
	
	.step-lside:first-child {
		margin-top: 10rem;
	}
	
	.step-lside:last-child {
		margin-bottom: 12rem;
	}
}

@media screen and (min-width: 1024px) {
	.step-lside {
		max-width: 460px;
	}	
}

@media screen and (min-width: 1560px) {
	.step-lside:last-child {
		margin-bottom: 16rem;
	}
}



</style>
