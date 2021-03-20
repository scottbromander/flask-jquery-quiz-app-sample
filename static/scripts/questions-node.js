const title = `LinkedIn Node.js`;
const questions = [
  {
    question: `Which core module in Node provides an API to register callbacks to
        track asynchronous resources created inside a Node.js application?`,
    correct_answer: `async_hooks`,
    incorrect_answers: [`dgram`, `cluster`, `inspector`],
  },
  {
    question: `Which Node.js module should you use when you need to decode raw data into strings?`,
    correct_answer: `string_decoder`,
    incorrect_answers: [`util`, `buffer`, `string_buffer`],
  },
  {
    question: `Which choice is not a valid method on event emitters?`,
    correct_answer: `start`,
    incorrect_answers: [`on`, `off`, `once`],
  },
  {
    question: `What is the purpose of N-API?`,
    correct_answer: `to insulate Addons from changes in the underlying JavaScript engine`,
    incorrect_answers: [
      `to execute multi-threaded code in the Node environment`,
      `to provide a quick way for users to create REST APIs`,
      `to allow users to make requests to the server`,
    ],
    resources: [
      {
        title: `What is N-API? N-API Resource`,
        link: `https://nodejs.github.io/node-addon-examples/about/what/`,
      },
    ],
  },
  {
    question: `Which statement about event emitters is false?`,
    correct_answer: `Event names must be camelCase strings`,
    incorrect_answers: [
      `Any values returned by the listeners for an emmited event are ignored`,
      `The emit method allows an arbitrary set of arguments to be passed to the listeners functions`,
      `When an event emitter object emits an event, all of the functions 
            attached to that specific event are called synchronously`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `How do you start a Node application, if the entry file is index.js?`,
    correct_answer: `node index.js`,
    incorrect_answers: [`node start`, `nodemon start`, `start index.js`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Is it possible to write tests in Node.js without an external library?`,
    correct_answer: `yes, through the assert module`,
    incorrect_answers: [
      `yes, through the debugger module`,
      `yes, through the console module`,
      `no`,
    ],
    resources: [
      {
        title: `Making a Testing Framework in Node.js (Without any External Libraries)`,
        link: `https://www.sohamkamani.com/blog/javascript/making-a-node-js-test-runner/#:~:text=If%20you've%20ever%20written,run%20unit%20tests%20in%20Javascript.`,
      },
    ],
  },
  {
    question: `How do you make an HTTP server object active and listen to requests on certain ports?`,
    correct_answer: `server.listen`,
    incorrect_answers: [`server.run`, `server.activate`, `server.start`],
    resources: [
      {
        title: `Node Documentation - Server Listen`,
        link: `https://nodejs.org/api/net.html#net_server_listen`,
      },
    ],
  },
  {
    question: `What is one way to install npm packages?`,
    correct_answer: `npm install [package name]`,
    incorrect_answers: [
      `npm init [package name]`,
      `install npm [package name]`,
      `npm add [package name]`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the purpose of the file system (fs) module?`,
    correct_answer: `to provide methods to work with files`,
    incorrect_answers: [
      `to provide methods to work with databases`,
      `to add encryption to files`,
      `to provide methods to work with requests and responses`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `How can you delay the execution of the function fn by at least one second?`,
    correct_answer: `setTimeout(fn,1000)`,
    incorrect_answers: [
      `delay(1000,fn)`,
      `setDelay(fn,1000)`,
      `sleep(1000); fn;`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the Node LTS version?`,
    correct_answer: `It is the safest version for long-term support`,
    incorrect_answers: [
      `It is the version with the latest features`,
      `It is an unstable version and is to be avoided`,
      `It is the version that will be retired soon`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `When you run JavaScript in a Node.js application, which element in a Node.js stack actually
    executes that JavaScript?`,
    correct_answer: `the VM (like V8 or Chakra)`,
    incorrect_answers: [
      `the c-res library`,
      `the libuv library`,
      `the repl module`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Is it possible to cluster multiple node processes?`,
    correct_answer: `yes, through the cluster module`,
    incorrect_answers: [
      `yes, through the assert module`,
      `yes, through the console module`,
      `no`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the purpose of the path module?`,
    correct_answer: `to provide utilities to play with file and directory paths`,
    incorrect_answers: [
      `to provide utilities to test files`,
      `to make network requests`,
      `to provide utilities to add and remove files`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which console method can be used to print the stack trace to the point of its execution?`,
    correct_answer: `trace`,
    incorrect_answers: [`stack`, `debug`, `print`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which of the following is a core module of Node?`,
    correct_answer: `crypto`,
    incorrect_answers: [`webpack`, `request`, `chalk`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which special object is an instance of EventEmitter?`,
    correct_answer: `require`,
    incorrect_answers: [`process`, `Buffer`, `root`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the shortest way to obtain the path name of the directory where your application is?`,
    correct_answer: `console.log(__dirname)`,
    incorrect_answers: [
      `console.log(path.dirname(__filename))`,
      `console.log(dirname)`,
      `console.log(__filename)`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which global object acts like a bridge between a Node script and the host operating system?`,
    correct_answer: `process`,
    incorrect_answers: [`env`, `v8`, `child_process`],
    resources: [
      {
        title: `Node.js Documentation - Process`,
        link: `https://nodejs.org/api/process.html`,
      },
    ],
  },
  {
    question: `Which DNS module method uses the underlying OS facilities and does not
    necessarily perform any network communication?`,
    correct_answer: `lookup`,
    incorrect_answers: [`reverse`, `resolve4`, `resolve`],
    resources: [
      {
        title: `Node.js Documentation - DNS Methods - Lookup`,
        link: `https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback`,
      },
    ],
  },
  {
    question: `Which choice is a method on the console object?`,
    correct_answer: `time`,
    incorrect_answers: [`print`, `test`, `exit`],
    resources: [
      {
        title: `Node.js Documentation - Console Methods - Time`,
        link: `https://nodejs.org/api/console.html#console_console_time_label`,
      },
    ],
  },
  {
    question: `What command would you use to count the number of logical CPUs on the machine that is 
    running Node?`,
    correct_answer: `node -p "os.cpus().length"`,
    incorrect_answers: [
      `node -p "util.cpus().size"`,
      `node -p "process.cpus"`,
      `node -p "process.os.cpus"`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `If you run script.js with the following code, how do you access the value
    passed to VAR inside script.js? >> VAR=value node script.js`,
    correct_answer: `process.argv[0]`,
    incorrect_answers: [
      `process.argv[VAR]`,
      `process.env.VAR`,
      `environment.VAR`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Using ES6 imports, how would you import a module into a file?`,
    correct_answer: `import thismodule from ./thismodule`,
    incorrect_answers: [
      `exports.thisModule = {...}`,
      `npm install thisModule`,
      `const thismodule = require(./thismodule)`,
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What module would you use to encrypt data?`,
    correct_answer: `Crypto`,
    incorrect_answers: [`Encrypt`, `Cryptic`, `HTTP`],
    resources: [
      {
        title: `How to encrypt and decrypt data in Node.js`,
        link: `https://attacomsian.com/blog/nodejs-encrypt-decrypt-data`,
      },
    ],
  },
  {
    question: `Which object holds all arguments passed after executing a script with the node command?`,
    correct_answer: `process.argv`,
    incorrect_answers: [`or.arguments`, `process.arguments`, `cli.args`],
    resources: [
      {
        title: `How to parse command line arguments`,
        link: `https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/`,
      },
    ],
  },
  {
    question: `Which choice is not a valid stream in Node?`,
    correct_answer: `process.stdinfo`,
    incorrect_answers: [`process.stdin`, `process.stderr`, `process.stdout`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which assert module method is usually used to test the error-first argument in callbacks?`,
    correct_answer: `ifError`,
    incorrect_answers: [`doesNotThrow`, `deepStrictEqual`, `fail`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `When a JavaScript function is invoked in Node, where is a new frame placed?`,
    correct_answer: `the call stack`,
    incorrect_answers: [`the events queue`, `the event loop`, `the poll phase`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which line imports a promise-based version of the readFile method?`,
    correct_answer: `const {readFile} = require(fs).promises`,
    incorrect_answers: [`const {readFile} = require(promises)`, `const {readFile} = require(fs)`, `const {readFilePromise: readFile} = require(fs)`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which file does node-gyp use to read the build configuration of a module?`,
    correct_answer: `binding.gyp`,
    incorrect_answers: [`gyp.json`, `.gyprc`, `package.gyp`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the use of require?`,
    correct_answer: `to load a module`,
    incorrect_answers: [`to create an object literal`, `to create an application`, `to add a callback function to an object`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the package manager that comes with node?`,
    correct_answer: `npm`,
    incorrect_answers: [`Gulp`, `Grunt`, `GitHub`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What library provides the Node.js with the event loop?`,
    correct_answer: `libuv`,
    incorrect_answers: [`c-ares`, `events`, `V8`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is one way to check that a value is a date object in Node?`,
    correct_answer: `utils.types.isDate(value)`,
    incorrect_answers: [`assert.isDate(value)`, `util.date(value)`, `console.isDate(value)`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which CLI option can you use to debug a node script in Chrome DevTools?`,
    correct_answer: `--inspect`,
    incorrect_answers: [`--chrome`, `--dev-tools`, `--debug`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What object is used to manage the cache of required modules?`,
    correct_answer: `require.cache`,
    incorrect_answers: [`process.cache`, `module.cache`, `global.cache`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `If the child_process module methods are in scope, what is a current way to execute
              the command ps -ef using a child process?`,
    correct_answer: `exec("ps -ef")`,
    incorrect_answers: [`spawn("ps -ef")`, `exec("ps", "-ef")`, `fork("ps -ef")`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `When a request event is received in the HTTP module, what is the type of the first
              argument passed to that event, usually named req?`,
    correct_answer: `http.IncomingMessage`,
    incorrect_answers: [`http.ServerRequest`, `http.ClientRequest`, `http.ServerResponse`],
    resources: [
      {
        title: `Node Docs - Incoming Message`,
        link: `https://nodejs.org/api/http.html#http_class_http_incomingmessage`,
      },
    ],
  },
  {
    question: `You have a script.js file with the single line of code shown here. What will be the 
              output of executing script.js with the node command? 'console.log(arguments)`,
    correct_answer: `an object representing an array that has five elements`,
    incorrect_answers: [`ReferenceError: arguments is not defined`, `an empty string`, `undefined`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `If EventEmitter is in scope, which line of code will have an event emitter emitting
              a change event`,
    correct_answer: `EventEmitter.emit('change')`,
    incorrect_answers: [`EventEmitter.new().emit('change')`, `new EventEmitter('change')`, `(new EventEmitter()).emit('change')`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which fs module method can be used to read the content of a file without buffering it in
              memory?`,
    correct_answer: `createReadStream`,
    incorrect_answers: [`read`, `readFile`, `readFileSync`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What can you export with module.exports?`,
    correct_answer: `functions, objects, arrays, or anything you assign to the module`,
    incorrect_answers: [`only variables and arrays`, `only functions`, `only objects`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What are the arguments passed to the module wrapper function?`,
    correct_answer: `exports, require, module, __filename__, __dirname`,
    incorrect_answers: [`exports, process, require, module, __filename, __dirname`, `exports, __filename, __dirname`, `exports, module, __filename, __dirname`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `How can you use the Promise API with a callback-based function such as child_process.exec?`,
    correct_answer: `util.promisify(child_process.exec)`,
    incorrect_answers: [`util.promisfy(child_process.exec())`, `new Promise(child_process.exec())`, `new Promise(child_process.exec)`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which choice is null a valid method on event emitters?`,
    correct_answer: `start`,
    incorrect_answers: [`on`, `once`, `off`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which choice is not a Node repl command?`,
    correct_answer: `.history`,
    incorrect_answers: [`.break`, `.editor`, `.save`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which object is a stream?`,
    correct_answer: `process.stdout`,
    incorrect_answers: [`process`, `process.uptime`, `Buffer`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the command to run the index.js file and silence all process warnings?`,
    correct_answer: `node --no-warnings`,
    incorrect_answers: [`node --trace-warnings`, `node index.js --no-warnings`, `node index.js --trace-warnings`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which statement is true when you run the code shown? "require('child_process').fork('script.js')"`,
    correct_answer: `The forked process will have its own VM instance`,
    incorrect_answers: [
      `The forked process shares the event loop wiht the parent process`, 
      `A new VM instance is created and the two VM isntances will be shared between the forked process and the parent process`, 
      `The forked process shares the same VM thread with the parent process`
    ],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which core module in Node can you use to take advantage of multicore systems?`,
    correct_answer: `cluster`,
    incorrect_answers: [`os`, `util`, `net`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which of the following Buffer class methods returns an uninitialized buffer?`,
    correct_answer: `allocUnsafe`,
    incorrect_answers: [`concat`, `from`, `alloc`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the command to get a list of available commands for Node.js?`,
    correct_answer: `node -h`,
    incorrect_answers: [`node -v`, `node index.js -x`, `node index.js -h`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Is it possible to create an https web server with Node.js?`,
    correct_answer: `Yes, you can use the https or http2 module`,
    incorrect_answers: [`Yes, you can use the http module`, `No, there are no modules supporting it yet`, `Yes, you can use the path module`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which module variable holds the resolved absolute path of the current module file?`,
    correct_answer: `__pathname`,
    incorrect_answers: [`__location`, `__filename`, `__location`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `What is the Api that is designed to insulate Addons from changes in the underlying JavaScript engine?`,
    correct_answer: `N-API`,
    incorrect_answers: [`Z-API`, `A-API`, `X-API`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
  {
    question: `Which of the following modules is NOT a built-in module in Node?`,
    correct_answer: `ftp`,
    incorrect_answers: [`events`, `dgram`, `http2`],
    resources: [
      {
        title: ``,
        link: ``,
      },
    ],
  },
];
