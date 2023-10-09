<template>
	<video v-if="src" :id="videoId" class="video-js vjs-default-skin my-video" autoplay muted preload="auto"
		style='width: 100%;height: 100%'>
		<source :src="src" type="application/x-mpegURL" style='width: 100%;height: 100%'>
	</video>
</template>

<script lang="ts">
	import videojs from 'video.js/dist/video.min'
	import 'video.js/dist/video-js.min.css'
	import { defineComponent, watch, onMounted, onBeforeUnmount, computed } from "vue"

	export default defineComponent({
		name: 'VideoItem',

		props: {
			// 视频地址
			src: {
				type: String,
				required: true
			},

			// 视频列表中每个视频的索引值
			index: {
				type: Number,
				default: 0
			},
		},

		setup(props) {
			// 监听视频地址变化
			watch(
				() => props.src,
				(n) => {
					changeVideoSource(n)
				}
			)

			// 在onMounted阶段进行初始化
			onMounted(() => {
				initVideo()
			})

			// 在onBeforeUnmount阶段释放资源
			onBeforeUnmount(() => {
				disposeVideo()
			})

			// 用于多视频列表区分每个视频的id
			const videoId = computed(() => {
				return 'my-video' + props.index
			})
			// 初始化视频
			function initVideo() {
				if (!props.src) return

				videojs(videoId.value, {
					bigPlayButton: false,
					textTrackDisplay: false,
					posterImage: false,
					errorDisplay: false,
					controlBar: false
				}, () => {
					const myPlayer = videojs(videoId.value)
					myPlayer.play()
					myPlayer.on('error', () => {
          ...
        })
			})
    }
	// 视频地址发生变化时的处理
	function changeVideoSource(src) {
		if (!src) return

		const myPlayer = videojs(videoId.value)
		myPlayer.src([
			{
				type: "application/x-mpegURL",
				src: src
			}
		])
		myPlayer.play()
	}
	function disposeVideo() {
		const myPlayer = videojs(videoId.value)
		myPlayer.dispose()
	}

	return {
		videoId,
	}
  }
})
</script>




// VideoComponentA.vue
<template>
	// id：用于获取video对象
	// class：video-js vjs-default-skin为video内置的样式名称，样式可根据具体项目进行调整
	// autoplay：自动播放
	//
	muted：设置静音。在最新版的Chrome浏览器（以及所有以Chromium为内核的浏览器）中，已不再允许自动播放音频和视频，设置静音是一种hack手段，参考：https://www.mzwu.com/article.asp?id=4411
	// preload：提前加载
	<video id="my-video" class="video-js vjs-default-skin" autoplay muted preload="auto">
		// src：视频流地址
		// type：视频类型
		<source
			src="http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8"
			type="application/x-mpegURL" style='width: 100%;height: 100%'>
	</video>
</template>

<script lang="ts">
	// 引入videojs以及样式文件
	import videojs from 'video.js/dist/video.min'
	import 'video.js/dist/video-js.min.css'
	import { defineComponent, onMounted } from "vue"

	setup() {
		// 在onMounted阶段进行初始化
		onMounted(() => {
			initVideoSourc()
		})

		function initVideoSourc() {
			videojs('my-video', {
				bigPlayButton: false,
				textTrackDisplay: false,
				posterImage: false,
				errorDisplay: false,
				controlBar: true,
				// ...其他配置参数
			}, function () {
				this.play()
			})
		}
	}
</script>