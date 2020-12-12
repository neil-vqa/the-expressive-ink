<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
	@apply font-merri;
}

.button--grey-inverted {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
}

.button--grey-inverted:hover {
  color: #fff;
  background-color: #35495e;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #fff;
  background-color: #35495e;
  
  text-decoration: none;
  padding: 10px 30px;
}

.button--grey:hover {
  color: #35495e;
  background-color: #fff;
}
</style>
