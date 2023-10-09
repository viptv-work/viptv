---
layout: page
---
<div id="xgplayer" ref="xgpayerRef" class="xgplayer player"></div>


<script setup lang="ts">
	import Player, { Events } from 'xgplayer';
	import LivePreset from 'xgplayer/es/presets/live'

	import FlvPlugin from 'xgplayer-flv'
	import HlsPlugin from 'xgplayer-hls'
	import Mp4Plugin from 'xgplayer-mp4'
	import 'xgplayer-livevideo';

	import "xgplayer/dist/index.min.css"
	import { watch, ref, onMounted } from "vue";
	import axios from "axios";
	const skipConfig = ref({
		skipTimeInStart: 30,
		skipTimeInEnd: 30,
	});

	const commonConfig = {
		url: 'https://cdntube2.b-cdn.net/mp4/83e322ec5b4ccf925201992ac1f4c406060a73ca.mp4',
		autoplay: true,
		pip: true,
		cssFullscreen: false,
		enableContextmenu: true,
		topBarAutoHide: false,
		closeVideoDblclick: true,
		lastPlayTimeHideDelay: 5,
		startTime: 0,
		playbackRate: {
			list: [
				2,
				1.5,
				1.25,
				{
					rate: 1,
					iconText: {
						zh: '倍速',
					},
				},
				0.75,
				0.5,
			],
			index: 7,
		},


		commonStyle: {
			playedColor: '#45c58b',
			sliderBtnStyle: {
				backgroundColor: '#45c58b',
			},
			volumeColor: '#45c58b',
		},
		plugins: [],
	}; // 西瓜、火山公共部分


	const config = ref({
		...commonConfig,
		id: 'xgplayer',
		hls: {
			preloadTime: 90,
			retryCount: 3,
			retryDelay: 1000,
			loadTimeout: 10000,
			fetchOptions: {
				mode: 'cors',
			},
		},
		mp4plugin: {
			maxBufferLength: 30,
			minBufferLength: 10,
			reqOptions: {
				mode: 'cors',
			},
		},
		flv: {},
		width: 'auto',
		height: 'calc(100vh - 60px)',
	}); // 西瓜播放器参数

	const xg = ref(null); // 西瓜播放器
	const xgpayerRef = ref(null); // 西瓜播放器dom节点

	// 根据不同类型加载不同播放器
	const createPlayer = (videoType) => {
		switch (videoType) {
			case 'mp4':
				config.value.plugins = [Mp4Plugin];
				break;
			case 'flv':
				config.value.plugins = [FlvPlugin];
				break;
			case 'm3u8':
				config.value.plugins = [HlsPlugin];
				break;
			default:
				config.value.plugins = [HlsPlugin];
				break;
		}
		xg.value = new Player({ ...config.value });
	}
	const destroyPlayer = () => {
		if (xg.value) {
			xg.value.destroy();
			xg.value = null;
		}

	};

	const initPlayer = () => {
		destroyPlayer();
		if (config.value.url.includes('mp4')) {
			createPlayer('mp4');
		} else if (config.value.url.includes('flv')) {
			createPlayer('flv');
		} else {
			createPlayer('m3u8');
		}
	};
	// 添加画中画事件
	watch(
		() => xg.value,
		(val) => {
			if (val?.hasStart) {
				val.on(Events.PIP_CHANGE, (isPip) => {
					console.log('isPip', isPip);
					ipcRenderer.send('toggle-playerPip', isPip);
				});
			}
		},
	);


	onMounted(() => {
		initPlayer();
	});
</script>
<style scoped>
	#mse {
		flex: auto;
	}
</style>