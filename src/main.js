import { createApp } from 'vue'
import App from './App.vue'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret,
    faUsers,
    faBuilding,
    faArrowsRotate,
    faHouse,
    faTruck,
    faBox,
    faGlobe,
    faGear,
}   
    from '@fortawesome/free-solid-svg-icons'

    import { 

        faLightbulb,
    }   
    
        from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faUsers)
library.add(faBuilding)
library.add(faArrowsRotate)
library.add(faHouse)
library.add(faTruck)
library.add(faBox)
library.add(faGlobe)
library.add(faGear)
library.add(faLightbulb)







window.vue = {};
window.vue.App = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
