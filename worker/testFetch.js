/* fetch() -> http request + returns a promise -> response
url = ''
const response = await fetch(url)
const data = await response.text()
*/

// Basic GET request

import * as cheerio from "cheerio";

const url = process.argv[2]; // 0 & 1 = node & script path, 2 = first input



async function run(url){
    try{ 
        if (!url){
            console.error("No URL provided.");
            process.exit(1); // 1 = general error
        }
        const response = await fetch(url);
        const html_raw = await response.text();

        const html = cheerio.load(html_raw)

        const title = html("title").text();


        console.log("Status: ", response.status);
        console.log("Title: ", title)
        console.log(html_raw.slice(0,200));
    } catch (error) {
        console.error("Worker failed to fetch:", error.message, "\n", "Original URL to Fetch:", url);
    }
}
run(url);

/*
4. Now worker can:
- encounter DNS failure, catch rejection, and log error
- doesn't crash immediatley -> exits cleanly

3. Network Level Faulure = Job lost, no retry, coordinator never 
knows what happened -> needs basic error handling
- added error handling using try-catch block inside async function
- prints error message without completely crashing 

2. When fetch fails : Network Level Failure
- DNS lookup fialed -> domain doesnt exist
- no HTTP request made -> promise or response rejected
- async function threw -> node crashed 

1. Currently, worker can:
- fetch raw HTML
- parse HTML with cheerio
- print specific parsed HTML stuff

*/