import { createApp } from 'vue'
import App from './App.vue'
import router from '@/scripts/router.js'

import store from '@/scripts/vuex/parentStore.js'
import '@/scripts/fa_icons.js'
// global imports
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseHeading from '@/components/UI/BaseHeading';
import BaseButton from '@/components/UI/BaseButton';
import BaseHeader from '@/components/UI/BaseHeader.vue';
import BaseSvg from '@/components/UI/BaseSvg.vue';
import BaseDrawer from '@/components/UI/BaseDrawer.vue';
import BaseOverlay from '@/components/UI/BaseOverlay.vue';
import BaseInput from '@/components/UI/BaseInput.vue';


const app = createApp(App)

app.component("BaseHeading", BaseHeading)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("BaseButton", BaseButton)
    .component("BaseHeader", BaseHeader)
    .component("BaseSvg", BaseSvg)
    .component("BaseDrawer", BaseDrawer)
    .component("BaseOverlay", BaseOverlay)
    .component("BaseInput", BaseInput)

app.use(store)
app.use(router)
app.mount('#app')
