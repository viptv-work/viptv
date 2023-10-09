<v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
	<v-carousel-item v-for="(slide, i) in slides" :key="i">
		<v-sheet :color="colors[i]" height="100%">
			<div class="d-flex fill-height justify-center align-center">
				<div class="text-h2">
					{{ slide }} Slide
				</div>
			</div>
		</v-sheet>
	</v-carousel-item>
</v-carousel>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          :color="isSelected ? 'primary' : 'grey-lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>

<v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
	<div class="d-flex flex-column fill-height justify-center align-center text-white">
		<h1 class="text-h4 font-weight-thin mb-4">
			Vuetify
		</h1>
		<h4 class="subheading">
			Build your application today!
		</h4>
	</div>
</v-parallax>

<script>
	
	export default {
		data() {
			return {
			    tab: null,
			    model: null,
				colors: [
					'indigo',
					'warning',
					'pink darken-2',
					'red lighten-1',
					'deep-purple accent-4',
				],
				slides: [
					'First',
					'Second',
					'Third',
					'Fourth',
					'Fifth',
				],
			}
		},
	}
</script>

<v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>

<v-card>
	<v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
		<v-tab :value="1">Landscape</v-tab>
		<v-tab :value="2">City</v-tab>
		<v-tab :value="3">Abstract</v-tab>
	</v-tabs>
	<v-window v-model="tab">
		<v-window-item v-for="n in 3" :key="n" :value="n">
			<v-container fluid>
				<v-row>
					<v-col v-for="i in 6" :key="i" cols="12" md="4">
						<v-img :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
							:lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`" aspect-ratio="1"></v-img>
					</v-col>
				</v-row>
			</v-container>
		</v-window-item>
	</v-window>
</v-card>

VAudioPlayer: () => import("@woodydark/vuetify-audio-player"),
<v-btn color="indigo">Here is a button!</v-btn>
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

```js{4}
export default {
data () {
return {
msg: 'Highlighted!'
}
}
}
```

::: v-pre
`{{ This will be displayed as-is }}`
:::
<component> <span v-for="i in 3">{{ i }} </span> </component>
