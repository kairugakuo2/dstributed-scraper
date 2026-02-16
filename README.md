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
    2. **IPC** (child_process fork with message passing) (Phase 2)
    3. **Redis** (Phase 3)