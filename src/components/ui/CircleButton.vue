<template>
  <button v-if="!link" :class="mode" style="outline: none">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  display:block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 26px;
  /* border: 1px solid red; */
  /* font: inherit; */
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
/* button:active {
  background-color: #270041;
  border-color: #270041;
} */

.nooutline {
  outline: none;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border-width: 3px;
}

.green {
  background-color: #00cf00;
  color: #ffffff;
  border: none;
}

.red {
  background-color: #c20000;
  color: #ffffff;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>