import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  ssr: true,
  components,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})