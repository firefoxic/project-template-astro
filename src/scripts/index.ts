import { activateNavigation } from "./Navigation.js"

let navigations = document.querySelectorAll(`.navigation`)

for (let navigation of navigations) activateNavigation(navigation)
