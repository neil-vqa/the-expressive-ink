<template>
  <vsm-menu
    :menu="menu"
    :base-width="380"
    :base-height="400"
    :screen-offset="10"
    element="header"
    handler="hover"
  >
    <template #default="{ item }">
      <div class="wrap-content">
        <div>
					<a :href="$store.state.editorUrl" class="nav-link-stripe hover:text-gray-600">
					  Sign Up
					</a>
				</div>
				<div>
					<a :href="$store.state.editorUrl" class="nav-link-stripe hover:text-gray-600">
					  Login
					</a>
				</div>
				<div>
					<nuxt-link to="/stories" class="nav-link-stripe hover:text-gray-600">
					  Stories
					</nuxt-link>
				</div>
				<div>
					<nuxt-link to="/getting-started" class="nav-link-stripe hover:text-gray-600">
					  Getting Started
					</nuxt-link>
				</div>
				<hr class="border border-black w-full opacity-75 my-5">
				<div>
					<nuxt-link to="/about-us" class="nav-link-stripe hover:text-gray-600">
					  About Us
					</nuxt-link>
				</div>
				<div>
					<nuxt-link to="/support-us" class="nav-link-stripe hover:text-gray-600">
					  Support Us
					</nuxt-link>
				</div>
				<div>
					<nuxt-link to="/privacy" class="nav-link-stripe hover:text-gray-600">
					  Privacy Policy
					</nuxt-link>
				</div>
				<div>
					<nuxt-link to="/terms" class="nav-link-stripe hover:text-gray-600">
					  Terms
					</nuxt-link>
				</div>
      </div>
    </template>
    <template #before-nav>
      <nuxt-link to="/">
	  		<h1 class="font-lora font-bold text-xl text-white capitalize hover:text-gray-500">The Expressive Ink</h1>
	  	</nuxt-link>
    </template>
    <template #title>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 hover:text-gray-500 cursor-pointer" 
	  		width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" 
	  		stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="4" y1="6" x2="20" y2="6" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="18" x2="20" y2="18" />
			</svg>
    </template>
    <template #after-nav>
      <vsm-mob>
      	<div class="wrap-content-mobile">
		      <div>
						<a :href="$store.state.editorUrl" class="nav-link-stripe hover:text-gray-600">
							Sign Up
						</a>
					</div>
					<div>
						<a :href="$store.state.editorUrl" class="nav-link-stripe hover:text-gray-600">
							Login
						</a>
					</div>
					<div>
						<nuxt-link to="/stories" class="nav-link-stripe hover:text-gray-600">
							Stories
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="/getting-started" class="nav-link-stripe hover:text-gray-600">
							Getting Started
						</nuxt-link>
					</div>
					<hr class="border border-black w-full opacity-75 my-5">
					<div>
						<nuxt-link to="/about-us" class="nav-link-stripe hover:text-gray-600">
							About Us
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="/support-us" class="nav-link-stripe hover:text-gray-600">
							Support Us
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="/privacy" class="nav-link-stripe hover:text-gray-600">
							Privacy Policy
						</nuxt-link>
					</div>
					<div>
						<nuxt-link to="/terms" class="nav-link-stripe hover:text-gray-600">
							Terms
						</nuxt-link>
					</div>
		    </div>
      </vsm-mob>
    </template>
  </vsm-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: 'Menu',
          dropdown: 'menu',
        },
      ],
    }
  },
  methods: {
  }
}
</script>

<style>
.vsm-menu {
  @apply relative w-full py-2;
	background-color: #555;
}

.vsm-root {
	@apply flex items-center justify-between max-w-screen-lg mx-auto px-5;
}

.vsm-section_menu {
  padding: 0 25px;
  font-weight: 500;
  font-family: inherit;
}

.vsm-link {
	color: #fff !important;
}

.wrap-content {
	@apply p-10 text-center;
	width: 300px;
}

.nav-link-stripe {
	@apply text-lg;
}

.wrap-content-mobile {
	@apply py-10 pl-10;
	width: 200px;
}

.vsm-mob-line {
	background: #fff !important;
}

.vsm-mob-close:after, .vsm-mob-close:before {
	background: #000 !important;
}

@media screen and (min-width: 540px) {
	.wrap-content-mobile {
		@apply p-10 text-center w-full;
	}
}
</style>
