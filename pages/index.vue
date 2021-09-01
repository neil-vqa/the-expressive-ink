<template>
  <div>
    <div class="upper-section">
      <!-- hero section -->
      <h1 class="title text-lg md:text-3xl">The Expressive Ink</h1>
      <div>
        <h1
          class="
            subtitle
            text-xl
            md:text-5xl
            max-w-sm
            md:max-w-xl
            lg:max-w-5xl
            mx-2
            sm:mx-auto
          "
        >
          Your stories crafted for the modern web.
        </h1>
        <h1
          class="
            copy
            text-base
            md:text-2xl
            max-w-sm
            md:max-w-xl
            lg:max-w-5xl
            mx-2
            sm:mx-auto
          "
        >
          Add visual transition effects as readers scroll through your stories.
        </h1>
        <div class="links space-x-5">
          <a href="https://app.theexpressiveink.com" class="btn-black">
            Sign Up
          </a>
          <nuxt-link to="/stories" class="btn-white"> Read Stories </nuxt-link>
        </div>
        <p class="text-sm text-gray-600 text-center pt-6">
          <span>Already an editor?</span>
          <a
            href="https://app.theexpressiveink.com"
            class="text-blue-700 hover:underline"
          >
            Login here.
          </a>
        </p>
      </div>
      <!-- end hero section -->
    </div>
    <div class="mid-section-blue px-10 py-5 md:py-32 md:px-20">
      <h2 class="text-lg md:text-4xl font-semibold uppercase tracking-widest">
        Scrollytelling
      </h2>
      <h2 class="text-base md:text-3xl">Storytelling for the Web</h2>
    </div>
    <div class="show-component">
      <client-only>
        <SideRside :content="content1.sider" />
      </client-only>
    </div>
    <div class="mid-section-black px-10 py-5 md:py-32 md:px-20">
      <h2 class="text-lg md:text-4xl font-semibold uppercase tracking-widest">
        Craft stories
      </h2>
      <h2 class="text-base md:text-3xl">that will engage your readers</h2>
    </div>
    <div class="show-component">
      <client-only>
        <Overlay :content="content2.overlay" />
      </client-only>
    </div>
    <div class="py-10 md:py-32 md:px-20">
      <h2
        class="
          text-lg
          md:text-4xl
          font-semibold
          text-center
          tracking-wider
          mb-10
        "
      >
        Sign Up now or take your time reading
      </h2>
      <div class="links space-x-3">
        <a href="https://app.theexpressiveink.com" class="btn-black">
          Sign Up
        </a>
        <nuxt-link to="/stories" class="btn-white"> Read Stories </nuxt-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { content1, content2 } from "~/utils/homecontent.js";

export default {
  head() {
    return {};
  },
  data() {
    return {
      content1: content1,
      content2: content2,
    };
  },
};
</script>

<style>
.upper-section {
  @apply relative flex flex-col items-center justify-center w-full min-h-screen;
}

.title {
  @apply font-lora font-bold text-center absolute top-0 w-full py-2 text-white bg-black;
}

.subtitle {
  @apply font-merri font-semibold text-center text-black mb-5;
}

.copy {
  @apply font-merri text-center text-gray-800 mb-10;
}

.links {
  @apply flex justify-center;
}

.mid-section-blue {
  @apply text-white;
  background-color: #2e5995; /*B'dazzled Blue*/
}

.show-component {
  @apply py-10 tracking-wider leading-loose;
}

.mid-section-black {
  @apply text-white;
  background-color: #191919;
}
</style>
