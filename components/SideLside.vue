<template>
  <div class="container-lside md:flex">
  	<div class="graphic-lside">
  		<div class="graphic-container">
				<div v-for="pic in content.pics">
					<img :src="pic" class="step-pic"/>
				</div>
  		</div>
  	</div>
  	<div class="content-lside space-y-32">
			<div v-for="text in content.texts">
				<div class="step-lside" :data-step="text.pic">{{ text.char }}</div>
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
			stepColor: '',
			stepText: '',
			currentPic: '',
		}
	},
	mounted() {
		this.loadComponent();
	},
	methods: {
		loadComponent() {
			const scroller = scrollama();
			let steps = document.querySelectorAll('.step-lside');
			
			this.stepColor = (this.content.stepbg) ? this.content.stepbg:this.stepBg;
			this.stepText = (this.content.steptext) ? this.content.steptext:this.textColor;
			
			steps.forEach((step) => {
				step.style.backgroundColor =  this.stepColor;
				step.style.color =  this.stepText;
			});
			
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
			let stepImage = response.element.getAttribute('data-step');
			this.currentPic = stepImage;
			
			let activePic = document.querySelector('.now-active');
			if (activePic) {
				activePic.classList.remove('now-active');
			}
			
			let picElement = document.querySelector(`[src="${this.currentPic}"]`);
			picElement.classList.add('now-active');
			
			let level = response.progress;
			response.element.style.opacity = level;
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

.graphic-container {
	@apply relative w-full h-full;
}

.step-pic {
	@apply absolute object-cover w-full h-full opacity-0;
	transition: opacity 1s ease-in-out;
}

.step-pic.now-active {
	opacity: 1;
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
