import { createApp } from "vue";
import App from "./App.vue";

// Import our Font Awesome setup
import { FontAwesomeIcon } from "./icons";

// Import styles
import "./style.css";

const app = createApp(App);

// Make <font-awesome-icon> available globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
