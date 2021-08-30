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
          You already have great stories. <br />
          Let's craft them for the modern web.
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
        <a :href="$store.state.editorUrl" class="btn-black"> Sign Up </a>
        <nuxt-link to="/stories" class="btn-white"> Read Stories </nuxt-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
const content1 = {
  sider: {
    pics: [
      "/innovation_1.svg",
      "/coworking__monochromatic.svg",
      "/hiking_monochromatic.svg",
      "/news_presenter_monochromatic.svg",
      "/brainstorming__monochromatic.svg",
      "/diversity__monochromatic.svg",
      "/world_wide_web_monochromatic.svg",
      "/revenue_.svg",
      "/flying_kite_monochromatic.svg",
    ],
    stepbg: "#191919",
    picbg: "#C4D0DF",
    steptext: "#fff",
    imageheight: "center",
    texts: [
      { char: "What is scrollytelling?", pic: "/innovation_1.svg" },
      {
        char: "Basically, new content appears or changes through 'transitions' as readers scroll down or up the web page of your story.",
        pic: "/innovation_1.svg",
      },
      {
        char: "Stories in scrollytelling format engage the readers easier than the usual static article page format.",
        pic: "/coworking__monochromatic.svg",
      },
      {
        char: "Readers can control the pace by scrolling, and you give them a strong reading experience as they feel they are 'exploring' your story.",
        pic: "/hiking_monochromatic.svg",
      },
      {
        char: "Though the technology and concept are not totally new, there are still barriers why scrollytelling isn't prevalent as what we could have expected.",
        pic: "/flying_kite_monochromatic.svg",
      },
      {
        char: "Big names such as ABC News, The New York Times, BBC, and National Geographic have created visually stunning stories thru scrollytelling.",
        pic: "/news_presenter_monochromatic.svg",
      },
      {
        char: "Creating such stories require a lot of resources: writers, researchers, designers, and developers.",
        pic: "/brainstorming__monochromatic.svg",
      },
      {
        char: "Resources that might not be available for a small organization, let alone an individual.",
        pic: "/brainstorming__monochromatic.svg",
      },
      {
        char: "Moreover, platforms that have scrollytelling features are way too expensive for small players.",
        pic: "/revenue_.svg",
      },
      {
        char: "Therefore, The Expressive Ink exists for that individual, for that school club, for that small organization, for that aspiring storyteller.",
        pic: "/diversity__monochromatic.svg",
      },
      {
        char: "Hello! Welcome to the world of scrollytelling. Let's craft your stories for the modern web.",
        pic: "/world_wide_web_monochromatic.svg",
      },
    ],
  },
};

const content2 = {
  overlay: {
    pics: [
      "/search_engine__flatline.svg",
      "/coding__flatline.svg",
      "/user_group_flatline.svg",
      "/authentication_flatline.svg",
      "/report_analysis__flatline.svg",
      "/idea_applications_flatline.svg",
      "/book_lover_flatline.svg",
    ],
    stepbg: "#C4D0DF",
    picbg: "#fff",
    steptext: "#000",
    imagefit: "cover",
    imageheight: "full",
    texts: [
      {
        char: "What is The Expressive Ink?",
        pic: "/search_engine__flatline.svg",
      },
      {
        char: "The Expressive Ink is a 'new' platform for crafting stories in the scrollytelling format.",
        pic: "/coding__flatline.svg",
      },
      {
        char: "Our goal is to make scrollytelling easy for (1) content creators, writers, storytellers, and (2) for the general public as well.",
        pic: "/user_group_flatline.svg",
      },
      {
        char: "Users can sign up and use the platform for FREE. It is part of our vision of making scrollytelling open.",
        pic: "/authentication_flatline.svg",
      },
      {
        char: "We currently have 3 scrollytelling components:",
        pic: "/report_analysis__flatline.svg",
      },
      {
        char: "(1) the 'Right Side Text' component you've seen above.",
        pic: "/report_analysis__flatline.svg",
      },
      {
        char: "(2) the 'Left Side Text' component which is the opposite of right side??",
        pic: "/report_analysis__flatline.svg",
      },
      {
        char: "And (3) the 'Overlay' component that you are seeing right now.",
        pic: "/report_analysis__flatline.svg",
      },
      {
        char: "We are continually developing more components for you and your readers to experience awesomeness. We welcome your awesome suggestions as well.",
        pic: "/idea_applications_flatline.svg",
      },
      {
        char: "Be inspired by reading stories featured right now!",
        pic: "/book_lover_flatline.svg",
      },
    ],
  },
};

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
