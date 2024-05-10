/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
/* TODO: write functions that check for regex matches on servcotoyota.com class or id selectors and add a p
on elements that fire the GAEvent */
const rules = {
    'https://www.servcotoyota.com/': filterServcoHomePage,
};
// regex match function
function filterServcoHomePage() {
    // const aTags = document.getElementsByTagName('a')
    const scheduleService = document.getElementById('cta-8a9644693b4e0be1dd50b9a28a');
    const viewNewInventory = document.getElementById('cta-baf0f8d3be6aa8f3cd6ae2e47e');
    const viewPreOwnedInventory = document.getElementById('cta-a5371eed7c46f072b1fa71ca37');
    // for (const tag of aTags) {
    //     if (/\b(The|the)(?!\w)/i.test(tag.textContent)) {
    //         const p = document.createElement("p");
    //         p.textContent = "S-the-content";
    //         p.style.backgroundColor = "yellow"
    //         tag.appendChild(p);
    //     }
    // }
    if (viewNewInventory) {
        // viewNewInventory.style.backgroundColor = "red"
        const p = document.createElement("p");
        p.textContent = "S-new-inventory";
        p.style.backgroundColor = "yellow";
        viewNewInventory.appendChild(p);
    }
    if (viewPreOwnedInventory) {
        // viewPreOwnedInventory.style.backgroundColor = "yellow"
        const p = document.createElement("p");
        p.textContent = "S-preowned-inventory";
        p.style.backgroundColor = "yellow";
        viewPreOwnedInventory.appendChild(p);
    }
    if (scheduleService) {
        // scheduleService.style.backgroundColor = "green"
        const p = document.createElement("p");
        p.textContent = "S-schedule-service";
        p.style.backgroundColor = "yellow";
        scheduleService.appendChild(p);
    }
    // Sample conditionals:
    // for (const div of divs) {
    //     if (div.className.indexOf('ad') != -1) {
    //         div.style.display = 'none'
    //     }
    // }
    // for (const tag of aTags) {
    //     tag.textContent = "hello world!"
    // }
    // for (const tag of aTags) {
    //     if (tag.textContent.includes("i")) {
    //         tag.style.backgroundColor = "yellow"
    //     }
    // }
}
// ad blocker function 
// function filterNYT () {
//     const app = document.getElementsByClassName("ad dfp-ad-top-wrapper css-rfqw0c")[0];
//     const wrapper = document.getElementById("dfp-ad-top");
//     if (app && wrapper) { 
//       app.removeChild(wrapper);
//     }
// }
if (document.URL in rules) {
    // console.log("Filtered URL:", document.URL)
    rules[document.URL]();
}

/******/ })()
;
//# sourceMappingURL=contentScript.js.map