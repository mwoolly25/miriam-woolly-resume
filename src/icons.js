// src/icons.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Brand icons
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Solid icons
import { faFilePdf, faMoon, faSun, faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

// Add all icons to the library
library.add(faLinkedin, faGithub, faFilePdf, faMoon, faSun, faPhone, faEnvelope, faHome);

export { FontAwesomeIcon };
