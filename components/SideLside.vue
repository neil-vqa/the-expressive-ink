<template>
  <div class="container-lside md:flex">
    <div class="graphic-lside">
      <div class="graphic-container">
        <div v-for="(pic, index) in picList" :key="index">
          <img :src="pic" class="step-pic" />
        </div>
      </div>
    </div>
    <div class="content-lside space-y-32">
      <div v-for="(text, index) in content.texts" :key="index">
        <div class="step-lside" :data-step="text.pic">{{ text.char }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import scrollama from "scrollama";
import "intersection-observer";

export default {
  props: ["content"],
  data() {
    return {
      offsetVal: 0.7,
      debugVal: false,
      overlayBgDef: "#E7E9EF",
      stepBgDef: "#E7E9EF",
      stepTextDef: "#000",
      stepBg: "",
      stepRGBA: "",
      stepText: "",
      currentPic: "",
      imageFitDef: "contain",
      imageFit: "",
    };
  },
  mounted() {
    this.loadComponent();
  },
  methods: {
    loadComponent() {
      const scroller = scrollama();
      let steps = this.$el.querySelectorAll(".step-lside");
      let images = this.$el.querySelectorAll(".step-pic");

      this.stepBg = this.content.stepbg ? this.content.stepbg : this.stepBgDef;
      this.stepText = this.content.steptext
        ? this.content.steptext
        : this.stepTextDef;
      this.imageFit = this.content.imagefit
        ? this.content.imagefit
        : this.imageFitDef;

      this.hexToRgba(this.stepBg);

      steps.forEach((step) => {
        step.style.backgroundColor = this.stepRGBA;
        step.style.color = this.stepText;
      });

      images.forEach((image) => {
        image.style.objectFit = this.imageFit;
      });

      scroller
        .setup({
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
      let stepImage = response.element.getAttribute("data-step");
      this.currentPic = stepImage;

      let activePic = this.$el.querySelector(".now-active");
      if (activePic) {
        activePic.classList.remove("now-active");
      }

      let picElement = this.$el.querySelector(`[src="${this.currentPic}"]`);
      picElement.classList.add("now-active");

      let level = response.progress;
      response.element.style.opacity = level;
    },
    handleResize(scroller) {
      let step = this.$el.querySelector(".step-lside");
      let graphic = this.$el.querySelector(".graphic-lside");

      let overlayBg = this.content.picbg
        ? this.content.picbg
        : this.overlayBgDef;
      graphic.style.backgroundColor = overlayBg;

      if (this.content.imageheight == "full") {
        graphic.style.height = window.innerHeight + "px";
      } else {
        let graphicHeight = window.innerHeight / 1.5;
        let graphicMarginTop = (window.innerHeight - graphicHeight) / 2;
        graphic.style.height = graphicHeight + "px";
        graphic.style.top = graphicMarginTop + "px";
      }

      scroller.resize();
    },
    hexToRgba(hex) {
      let color = hex.replace("#", "");
      let r = parseInt(color.substring(0, 2), 16);
      let g = parseInt(color.substring(2, 4), 16);
      let b = parseInt(color.substring(4, 6), 16);
      let result = "rgba(" + r + "," + g + "," + b + "," + 0.85 + ")";
      this.stepRGBA = result;
    },
  },
  computed: {
    picList() {
      let pics = [];

      this.content.texts.forEach((text) => {
        pics.push(text.pic);
      });

      return [...new Set(pics)];
    },
  },
};
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
