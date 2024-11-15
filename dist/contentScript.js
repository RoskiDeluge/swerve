/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
/* TODO: Create an interface to map site/page elements to their respective GAEvent data. Separating the data from the
rendering logic would make the contentScript.ts file more portable in the event of a platform change with new mappings
between site elements and their GAEvents. */
const rules = {
    'https://www.servcotoyota.com/': filterServcoToyotaHomePage,
};
// Add helper functions to transform the event data from the interface into an HTML element to append to the relevant elements.
function filterServcoToyotaHomePage() {
    // const aTags = document.getElementsByTagName('a')
    const viewNewInventory = document.getElementById('cta-baf0f8d3be6aa8f3cd6ae2e47e');
    const viewPreOwnedInventory = document.getElementById('cta-a5371eed7c46f072b1fa71ca37');
    const scheduleService = document.getElementById('cta-8a9644693b4e0be1dd50b9a28a');
    // regex match function
    // for (const tag of aTags) {
    //     if (/\b(The|the)(?!\w)/i.test(tag.textContent)) {
    //         const p = document.createElement("p");
    //         p.textContent = "S-the-content";
    //         p.style.backgroundColor = "yellow"
    //         tag.appendChild(p);
    //     }
    // }
    /* Maybe add a switch case for each element and append the p element to it after enriching it through a typescript
    interface object or json. The interface can be used to do double duty as on site documentation and as
    structured portable documentation. */
    if (viewNewInventory) {
        // viewNewInventory.style.backgroundColor = "red"
        const span = document.createElement("span");
        span.textContent = "ec: S-home-hero; ea: S-new-inventory";
        span.style.backgroundColor = "yellow";
        span.style.textTransform = "none";
        viewNewInventory.appendChild(span);
    }
    if (viewPreOwnedInventory) {
        // viewPreOwnedInventory.style.backgroundColor = "yellow"
        const span = document.createElement("span");
        span.textContent = "ec: S-home-hero; ea: S-preowned-inventory";
        span.style.backgroundColor = "yellow";
        span.style.textTransform = "none";
        viewPreOwnedInventory.appendChild(span);
    }
    if (scheduleService) {
        // scheduleService.style.backgroundColor = "green"
        const span = document.createElement("span");
        span.textContent = "ec: S-home-hero; ea: S-schedule-service";
        span.style.backgroundColor = "yellow";
        span.style.textTransform = "none";
        scheduleService.appendChild(span);
    }
    // Sample for loops to iterate over arrays of tags:
    // for (const span of spans) {
    //     if (span.className.indexOf('ad') != -1) {
    //         span.style.display = 'none'
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
/*
ad blocker function (can be added to rules object above like this:
'https://www.nytimes.com/': filterNYT)
*/
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