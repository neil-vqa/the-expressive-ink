<template>
  <div>
    <span v-if="false" />
  </div>
</template>

<script>
export default {
	props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String,
    }
  },
  head() {
  	return {
  		meta: [
  			{
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
  			{
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
  		]
  	}
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
