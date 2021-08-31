<template>
  <div class="bg-black">
    <div class="md:flex justify-center py-5 px-2 text-center text-white">
      The Expressive Ink by
      <nuxt-link
        to="/support-us"
        class="px-1 font-bold text-white hover:underline"
        >Neil Van,
      </nuxt-link>
      2021
    </div>
    <div
      class="
        flex flex-col
        items-center
        md:flex-row
        md:justify-center
        md:space-x-4
        pb-5
      "
    >
      <nuxt-link to="/stories" class="text-white hover:underline">
        Stories
      </nuxt-link>
      <nuxt-link to="/getting-started" class="text-white hover:underline">
        Getting Started
      </nuxt-link>
      <nuxt-link to="/about-us" class="text-white hover:underline">
        About Us
      </nuxt-link>
      <nuxt-link to="/privacy" class="text-white hover:underline">
        Privacy
      </nuxt-link>
      <nuxt-link to="/support-us" class="text-white hover:underline">
        Support Us
      </nuxt-link>
      <nuxt-link to="/terms" class="text-white hover:underline">
        Terms
      </nuxt-link>
    </div>
  </div>
</template>