<template>
  <div v-if="notifs">
  	<div v-for="notif in notifs">
  		<div class="bg-blue-700 text-white text-base flex space-x-5 justify-center px-10 py-2">
				<p class="font-bold uppercase">{{ notif.name }}</p>
				<p>{{ notif.description }}</p>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			notifs: ''
		}
	},
	created() {
		this.getNotifs();
	},
	methods: {
		getNotifs() {
			this.$axios.$get('https://inkcms.netlify.app/content/serve/generalnotifs.json')
				.then(response => {
					//console.log(response.notification);
					this.notifs = response.notification;
				})
				.catch(error => {
					console.log(error);
				});
		},
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
