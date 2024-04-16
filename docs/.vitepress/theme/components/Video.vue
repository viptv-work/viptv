<template>
  <section id="main">
    <video id="player" ref="vidRef" @ended="videoEnded" :src="src" controls webkit-playsinline playsinline
      autoplay></video>
    <svg width="512" height="512" viewBox="0 0 512 512" @click="togglePlay" v-show="!state.playing">
      <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#fff" />
    </svg>
  </section>
  <section id="buttons" style="text-align: center">
    <button id="switch" @click="switchs">{{ state.message }}</button>
    <button id="next" @click="next">播放下一个</button>
    <a href="/about/support"><button id="next">赞助打赏</button></a>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
const props = defineProps<{
  src: String,
  srn: String
}>()

const vidRef = ref(null);
const state = reactive({
  playing: false,
  message: "连续: 开",
  auto: true,
});
const next = () => {
  vidRef.value.src = props.srn ? props.srn : props.src;
};
const play = () => {
  vidRef.value.play();
  state.playing = true;
};

const pause = () => {
  vidRef.value.pause();
  state.playing = false;
};
const videoEnded = () => {
  if (state.auto) {
    next();
  }
};
const togglePlay = () => {
  if (state.playing) {
    pause();
  } else {
    play();
  }
};
const switchs = () => {
  state.auto = !state.auto;
  state.message = "连续: " + (state.auto ? "开" : "关");
};
</script>

<style scoped>
#main {
  height: calc(100vh - 170px);
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
  background: #fff;
  background: linear-gradient(to bottom, #ff2, #fb0);
  color: #af2e08;
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
