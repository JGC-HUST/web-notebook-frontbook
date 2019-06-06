<template>
	<div class="home">
		<!-- particles.js container -->
		<div id="particles-js"></div>
		<!-- stats - count particles -->
		<div class="count-particles"><span class="js-count-particles">--</span> particles</div>
		<!-- particles.js lib (JavaScript CodePen settings): https://github.com/VincentGarreau/particles.js -->
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "home",
	components: {
		HelloWorld
	}
};
</script>
