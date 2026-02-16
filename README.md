# dstributed-scraper
Webscrapper using Distributed System Task Queues

# tech stack
- Node.js
- axios (HTTP requests)
- cheerio (HTML parsing)
- child_process OR seperate terminal workers
- JSON (output)
- Redis (later)

# useful commands
`npm init -y`

# commit conentions
`feat` : new feature
`fix` : bug fix
`doc`: documentation only changes
`refactor`: code change with no bug fix or new feature added
`chore`: intiial project setup, changes to build process/libraries/tools

# Phase 0
- intial project setup and downloading dependencies
- initial coordinator and worker output tests
- **problem**: 
     ```
     \\ shared/queue.js
    let queue = []; 
    module.exports=queue;
    ```
    - both Coordinator and Worker will not share in memeory queue just by importing a module -> need other solution
- **solution(s)**:
    1. **HTTP** (Coordinator runs server, worker calls it) (Phase 1)
    2. IPC (child_process fork with message passing)
    3. **Redis** (Phase 2)

# Phase 1 - HTTP

1. Can worker fetch public page and extract something?
    - use `fetch` on node vs using custom solution
    - use `cheerio` to parse through raw html
    - add error handling to prevent node crash for every invalid link
    - added custom URL inputs for worker to fetch via terminal -> `npm run testFetchWorker <url>`
2. Can coordinator give a job to worker and it be successful, OR handled gracefuly?
    - let coordinator spawn worker process
    - send a URL
    - recieve JSON result back -> no crashes
3. 

# Phase 2 - Redis