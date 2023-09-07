const rules: {
    [url: string]: () => void
} = {
    'https://www.nytimes.com/':
    filterNYT2,
}

function filterNYT () {
    const app = document.getElementsByClassName("ad dfp-ad-top-wrapper css-rfqw0c")[0];
    const wrapper = document.getElementById("dfp-ad-top");
    if (app && wrapper) {
      app.removeChild(wrapper);
    }
}

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

    for (const tag of aTags) {
        if (tag.textContent.includes("i")) {
            tag.style.backgroundColor = "yellow"
        }
    }
}

if (document.URL in rules) {
    console.log(document.URL)
    rules[document.URL]()
}



