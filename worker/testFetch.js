/* fetch() -> http request + returns a promise -> response
url = ''
const response = await fetch(url)
const data = await response.text()
*/

// Basic GET request

import * as cheerio from "cheerio";

const url = 'https://fakewebsitelolz.com';



async function run(url){
    const response = await fetch(url);
    const html_raw = await response.text();

    const $ = cheerio.load(html_raw)

    const title = $("title").text();


    console.log("Status: ", response.status);
    console.log("Title: ", title)
    console.log(html_raw.slice(0,200));
}
run(url);

/*
Currently, worker can:

- fetch raw HTML
- parse HTML with cheerio
*/