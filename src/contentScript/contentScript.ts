/* TODO: write functions that check for regex matches on servcotoyota.com class or id selectors and add a span 
on elements that fire the GAEvent */

const rules: {
    [url: string]: () => void
} = {
    'https://www.nytimes.com/':
    filterNYT2,
}

// ad blocker function 
function filterNYT () {
    const app = document.getElementsByClassName("ad dfp-ad-top-wrapper css-rfqw0c")[0];
    const wrapper = document.getElementById("dfp-ad-top");
    if (app && wrapper) { 
      app.removeChild(wrapper);
    }
}

// regex match function
function filterNYT2() {
    const aTags = document.getElementsByTagName('a')
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

    for (const tag of aTags) {
        if (/\b(The|the)(?!\w)/i.test(tag.textContent)) {
            const span = document.createElement("span");
            span.textContent = "S-the-content";
            span.style.backgroundColor = "yellow"
            tag.appendChild(span);
        }
    }
}

if (document.URL in rules) {
    // console.log("Filtered URL:", document.URL)
    rules[document.URL]()
}



