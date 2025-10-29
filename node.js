/*what is node js ?
    node is not a language or framework,
    it is an runtime environment to for js outside the browser.

    normally js runs inside browser
    node.js allow you run js on your computer/server


what is difference between browser and node.js ?

    main difference is in Node.js there is no access to browser , 
    there in no dom , there in no fetch etc.

    in node we built server side apps
        -it consist of pure logic.


notes
----

    .node built on V8, the same js engine used by Google chrome
    .it also include c++ library called libuv that handles things like :
        -file system
        -networking
        -thread pool
        -asynchrounous I/O



    V8 Engine -> Compiles JavaScript code into fast machine code.
    libuv ->Handles async I/O operations and the event loop (written in C++).
    Event Loop -> Continuously checks for events and executes callbacks.
    Thread Pool -> Handles background tasks (file read/write, DNS, crypto, etc.).
    Bindings -> Bridge between JS and C++ code (lets JS talk to OS features).
    Node APIs -> Built-in modules like fs, http, crypto, etc. built on libuv.

working
-------
🧩 Step 1 — Your Code Enters the V8 Engine

Node passes your JS file to V8, which:
    .Parses your JS code
    .Compiles it to machine code
    .Starts running it line by line

🔄 Step 2 — Asynchronous Work Goes to libuv

Node doesn’t block the main thread.

Instead:

.Node delegates the asunchronous function to libuv
.libuv uses a thread from the thread pool to read the file in the       background

🕓 Step 3 — The Event Loop Takes Over

While libuv completed asynchrouns operation:

.The main JS thread is free to continue executing
.Once the background operation finishes, the callback is pushed to a callback queue

🔁 Step 4 — The Event Loop Checks the Queue

The event loop constantly checks:

“Is the main thread free? Any callback waiting in the queue?”

When your file read finishes, and the main thread is idle, it runs:



 What is a Thread?

    A thread is like a worker that executes code inside a program.

    Think of your program as a factory:

    The factory = your process (e.g., Node app)

    The workers = threads
    Each worker can execute instructions.

     In simple words:

    A thread is the smallest unit of execution in a program.


what is REPL?
    is an environment where you can type js code and see the result immediatley(look like comand line)
   
is there WINDOW in node.js?
    no because there in no browser so there is not WINDOW object

              