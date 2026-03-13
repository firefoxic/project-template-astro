import { activateNavigation } from "./Navigation.js"

let navigations = document.querySelectorAll(`.Navigation`)

for (let navigation of navigations) activateNavigation(navigation)
