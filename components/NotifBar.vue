<template>
  <div class="hidden sm:block">
    <div v-if="notifs">
      <transition appear name="fade">
        <div v-for="(notif, index) in notifs" :key="index">
          <div
            class="
              bg-blue-700
              text-white text-base
              flex
              space-x-5
              justify-center
              px-10
              py-2
            "
          >
            <p class="font-bold uppercase">{{ notif.name }}</p>
            <p>{{ notif.description }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifs: "",
    };
  },
  created() {
    this.getNotifs();
  },
  methods: {
    getNotifs() {
      this.$axios
        .$get("https://inkcms.netlify.app/content/serve/generalnotifs.json")
        .then((response) => {
          //console.log(response.notification);
          this.notifs = response.notification;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
