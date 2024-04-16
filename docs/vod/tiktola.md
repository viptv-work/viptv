---
 layout: page
---
<section id="main">
	<video :src="video" id="player" ref="vidRef" @click="togglePlay" controls webkit-playsinline playsinline autoplay x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true' controlslist="nodownload"></video>
	<svg width="512" height="512" viewBox="0 0 512 512" @click="togglePlay" v-show="!state.playing">
		<path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#fff" />
	</svg>
</section>
<section id="buttons" style="text-align: center;">
  <button id="switch">连播: 开</button>
	<button id="next" @click="next">换下一个</button>
	<a href="/about/support"><button id="next">赞助我们</button></a>
</section>


<script lang="ts" setup>	
	import { defineComponent, ref, reactive } from "vue";
	const video = ref('https://jiejie.uk/xjj/get/get1.php');
	const vidRef = ref(null);

	const state = reactive({
		playing: true,
	});
 	const switch = () =>{
		state.playing = !state.playing;
    this.innerText = '连续: ' + (auto ? '开' : '关');

	};
	const play = () => {
		vidRef.value.play();
		state.playing = true;
	};
  const next = () =>{
		vidRef.value.src='https://jiejie.uk/xjj/get/get1.php'
	};
	const pause = () => {
		vidRef.value.pause();
		state.playing = false;
	};
  bind(player, 'ended', function () {
     if (auto) randomm();
  });
	const togglePlay = () => {
		if (state.playing) {
			pause();
		} else {
			play();
		}
	}
	
</script>

<style scoped>
	* {
		border: 0;
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
	}
	
	body {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#main {
		height: calc(100vh - 165px);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#player {
		width: 100%;
		height: auto;
		max-height: 100%;
	}

	#buttons {
		height: 60px;
		padding: 10px;
	}

	#switch,
	#next {
		background: #FFF;
		background: linear-gradient(to bottom, #FF2, #FB0);
		color: #AF2E08;
		font-size: 16px;
		font-weight: bold;
		height: 40px;
		padding: 0px 20px;
		margin: 0px 5px;
		border-radius: 20px;
	}

	svg {
		position: absolute;
		top: calc(50% - 35px);
		left: calc(50% - 35px);
		width: 90px;
		height: 90px;
		z-index: 10;
	}
</style>