import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import BaseCard from './components/ui/BaseCard.vue';
import CircleButton from './components/ui/CircleButton.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faPhone, faHome, faPlus, faList, faCog
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faHome);
library.add(faPlus);
library.add(faList);
library.add(faCog);

const app = createApp(App);

app.use(store).use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('circle-button', CircleButton);
app.component('base-dialog', BaseDialog);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
