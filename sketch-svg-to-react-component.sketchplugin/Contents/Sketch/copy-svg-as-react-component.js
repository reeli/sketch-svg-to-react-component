var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/copy-svg-as-react-component.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@skpm/child_process/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@skpm/child_process/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.exec = __webpack_require__(/*! ./lib/exec */ "./node_modules/@skpm/child_process/lib/exec.js")
module.exports.execFile = __webpack_require__(/*! ./lib/execFile */ "./node_modules/@skpm/child_process/lib/execFile.js")
module.exports.spawn = __webpack_require__(/*! ./lib/spawn */ "./node_modules/@skpm/child_process/lib/spawn.js")
module.exports.spawnSync = __webpack_require__(/*! ./lib/spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")
module.exports.execFileSync = __webpack_require__(/*! ./lib/execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")
module.exports.execSync = __webpack_require__(/*! ./lib/execSync */ "./node_modules/@skpm/child_process/lib/execSync.js")


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/exec.js":
/*!******************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var execFile = __webpack_require__(/*! ./execFile */ "./node_modules/@skpm/child_process/lib/execFile.js")

function normalizeExecArgs(command, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);
  options.shell = typeof options.shell === 'string' ? options.shell : true;

  return {
    file: command,
    options: options,
    callback: callback
  };
}

module.exports = function(command, options, callback) {
  var opts = normalizeExecArgs(command, options, callback);
  return execFile(opts.file, opts.options, opts.callback);
};


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execFile.js":
/*!**********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execFile.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(clearTimeout, setTimeout) {var spawn = __webpack_require__(/*! ./spawn */ "./node_modules/@skpm/child_process/lib/spawn.js")

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout');
  }
}


function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer');
  }
}

module.exports = function (file, args, options, callback) {
  var defaultOptions = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: undefined,
    env: undefined,
    shell: false
  };

  if (typeof args === 'function') {
    // function (file, callback)
    callback = args
    args = []
    options = defaultOptions
  } else if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options, callback)
    callback = options
    options = Object.assign(defaultOptions, args)
    args = []
  } else {
    // function (file, args, options, callback)
    options = Object.assign(defaultOptions, options)
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout);

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer);

  var child = spawn(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell,
  });

  var encoding;
  var _stdout;
  var _stderr;
  if (options.encoding !== 'buffer' && options.encoding) {
    encoding = options.encoding;
    _stdout = '';
    _stderr = '';
  } else {
    _stdout = [];
    _stderr = [];
    encoding = null;
  }
  var stdoutLen = 0;
  var stderrLen = 0;
  var killed = false;
  var exited = false;
  var timeoutId;

  var ex = null;

  var cmd = file;

  function exithandler(code, signal) {
    if (exited) return;
    exited = true;

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (!callback) return;

    // merge chunks
    var stdout;
    var stderr;
    if (encoding) {
      stdout = _stdout;
      stderr = _stderr;
    } else {
      stdout = _stdout.reduce(function (prev, d) {
        prev.appendData(d)
        return prev
      }, NSMutableData.data());
      stderr = _stderr.reduce(function (prev, d) {
        prev.appendData(d)
        return prev
      }, NSMutableData.data());
    }

    if (!ex && code === 0 && signal === null) {
      callback(null, stdout, stderr);
      return;
    }

    if (args.length !== 0)
      cmd += ' ' + args.join(' ');

    if (!ex) {
      ex = new Error('Command failed: ' + cmd + '\n' + stderr);
      ex.killed = child.killed || killed;
      ex.code = code;
      ex.signal = signal;
    }

    ex.cmd = cmd;
    callback(ex, stdout, stderr);
  }

  function errorhandler(e) {
    ex = e;

    exithandler();
  }

  function kill() {
    killed = true;
    try {
      child.kill(options.killSignal);
    } catch (e) {
      ex = e;
      exithandler();
    }
  }

  if (options.timeout > 0) {
    timeoutId = setTimeout(function delayedKill() {
      kill();
      timeoutId = null;
    }, options.timeout);
  }

  if (child.stdout) {
    if (encoding)
      child.stdout.setEncoding(encoding);

    child.stdout.on('data', function onChildStdout(chunk) {
      stdoutLen += encoding ? chunk.length : chunk.length();

      if (stdoutLen > options.maxBuffer) {
        ex = new Error('ERR_CHILD_PROCESS_STDIO_MAXBUFFER stdout');
        kill();
      } else if (encoding) {
        _stdout += chunk;
      } else {
        _stdout.push(chunk);
      }
    });
  }

  if (child.stderr) {
    if (encoding)
      child.stderr.setEncoding(encoding);

    child.stderr.on('data', function onChildStderr(chunk) {
      stderrLen += encoding ? chunk.length : chunk.length();

      if (stderrLen > options.maxBuffer) {
        ex = new Error('ERR_CHILD_PROCESS_STDIO_MAXBUFFER stderr');
        kill();
      } else if (encoding) {
        _stderr += chunk;
      } else {
        _stderr.push(chunk);
      }
    });
  }

  child.addListener('close', exithandler);
  child.addListener('error', errorhandler);

  return child;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@skpm/timers/timeout.js */ "./node_modules/@skpm/timers/timeout.js")["clearTimeout"], __webpack_require__(/*! ./node_modules/@skpm/timers/timeout.js */ "./node_modules/@skpm/timers/timeout.js")["setTimeout"]))

/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execFileSync.js":
/*!**************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execFileSync.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var spawnSync = __webpack_require__(/*! ./spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout');
  }
}


function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer');
  }
}

module.exports = function (file, args, options) {
  var defaultOptions = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null,
    shell: false
  };

  if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options, callback)
    callback = options
    options = Object.assign(defaultOptions, args)
    args = []
  } else {
    // function (file, args, options, callback)
    options = Object.assign(defaultOptions, options || {})
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout);

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer);

  var child = spawnSync(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell,
    encoding: options.encoding
  });

  if (child.status !== 0) {
    var error = new Error("Failed to run: " + String(child.stderr))
    error.pid = child.pid
    error.status = child.status
    error.stdout = child.stdout
    error.stderr = child.stderr
    throw error
  }

  return child.stdout;
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/execSync.js":
/*!**********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/execSync.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var execFileSync = __webpack_require__(/*! ./execFileSync */ "./node_modules/@skpm/child_process/lib/execFileSync.js")

function normalizeExecArgs(command, options) {
  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);
  options.shell = typeof options.shell === 'string' ? options.shell : true;

  return {
    file: command,
    options: options
  };
}

module.exports = function(command, options) {
  var opts = normalizeExecArgs(command, options);
  return execFileSync(opts.file, opts.options);
};


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/handleData.js":
/*!************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/handleData.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function handleData(data, encoding) {
  switch (encoding) {
    case 'utf8':
      return String(NSString.alloc().initWithData_encoding(data, NSUTF8StringEncoding))
    case 'ascii':
      return String(NSString.alloc().initWithData_encoding(data, NSASCIIStringEncoding))
    case 'utf16le':
    case 'ucs2':
      return String(NSString.alloc().initWithData_encoding(data, NSUTF16LittleEndianStringEncoding))
    case 'base64':
      var nsdataDecoded = NSData.alloc().initWithBase64EncodedData_options(data, 0)
      return String(NSString.alloc().initWithData_encoding(nsdataDecoded, NSUTF8StringEncoding))
    case 'latin1':
    case 'binary':
      return String(NSString.alloc().initWithData_encoding(data, NSISOLatin1StringEncoding))
    case 'hex':
      // TODO: how?
      return data
    default:
      return data
  }
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function normalizeSpawnArguments(file, args, options) {
  if (typeof file !== 'string' || file.length === 0)
    throw new Error('ERR_INVALID_ARG_TYPE');

  if (Array.isArray(args)) {
    args = args.slice(0);
  } else if (args !== undefined && (args === null || typeof args !== 'object')) {
    throw new Error('ERR_INVALID_ARG_TYPE args');
  } else {
    options = args;
    args = [];
  }

  if (options === undefined)
    options = {};
  else if (options === null || typeof options !== 'object')
    throw new Error('ERR_INVALID_ARG_TYPE options');

  // Validate the cwd, if present.
  if (options.cwd != null && typeof options.cwd !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.cwd');
  }

  // Validate detached, if present.
  if (options.detached != null && typeof options.detached !== 'boolean') {
    throw new Error('ERR_INVALID_ARG_TYPE options.detached');
  }

  // Validate the uid, if present.
  if (options.uid != null && !Number.isInteger(options.uid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.uid');
  }

  // Validate the gid, if present.
  if (options.gid != null && !Number.isInteger(options.gid)) {
    throw new Error('ERR_INVALID_ARG_TYPE options.gid');
  }

  // Validate the shell, if present.
  if (options.shell != null &&
      typeof options.shell !== 'boolean' &&
      typeof options.shell !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.shell');
  }

  // Validate argv0, if present.
  if (options.argv0 != null && typeof options.argv0 !== 'string') {
    throw new Error('ERR_INVALID_ARG_TYPE options.argv0');
  }

  // Make a shallow copy so we don't clobber the user's options object.
  options = Object.assign({}, options);

  if (options.shell) {
    var command = [file].concat(args).join(' ');

    if (typeof options.shell === 'string') {
      file = options.shell;
    } else {
      file = '/bin/bash';
    }
    args = ['-l', '-c', command];
  }

  if (typeof options.argv0 === 'string') {
    args.unshift(options.argv0);
  }

  var env = options.env;

  return {
    file: file,
    args: args,
    options: options,
    envPairs: env
  };
}


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/spawn.js":
/*!*******************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/spawn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSPipe, NSTask, NSArray, NSHomeDirectory, NSFileHandleNotificationDataItem, NSUTF8StringEncoding, NSString, NSNotificationCenter, NSSelectorFromString, NSFileHandleReadCompletionNotification, NSDictionary, NSBundle */
var ObjCClass = __webpack_require__(/*! cocoascript-class */ "./node_modules/cocoascript-class/lib/index.js").default
var EventEmitter = __webpack_require__(/*! @skpm/events */ "./node_modules/@skpm/events/index.js")
var spawnSync = __webpack_require__(/*! ./spawnSync */ "./node_modules/@skpm/child_process/lib/spawnSync.js")
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")
var normalizeSpawnArguments = __webpack_require__(/*! ./normalizeSpawnArguments */ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js")
// We create one ObjC class for ourselves here
var ChildProcess

function spawn (_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options);

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync('/bin/bash', ['-l', '-c', 'which ' + opts.file], {encoding: 'utf8'})
    if (whichChild.err) {
      var result = new EventEmitter()

      result.stderr = new EventEmitter()
      result.stdout = new EventEmitter()

      result.stderr.setEncoding = function (encoding) {
        result.stderr.encoding = encoding
      }
      result.stdout.setEncoding = function (encoding) {
        result.stdout.encoding = encoding
      }
      result.emit('error', whichChild.err)
      return result
    }
    return spawn(whichChild.stdout.trim(), _args, _options)
  } else {
    var options = opts.options;
    var result = new EventEmitter()

    result.stderr = new EventEmitter()
    result.stdout = new EventEmitter()

    result.stderr.setEncoding = function (encoding) {
      result.stderr.encoding = encoding
    }
    result.stdout.setEncoding = function (encoding) {
      result.stdout.encoding = encoding
    }

    if (!ChildProcess) {
      ChildProcess = ObjCClass({
        classname: 'ChildProcess',
        listeners: null,
        fileHandle: null,
        errFileHandle: null,
        task: null,

        spawn(args, listeners) {
          this.listeners = NSDictionary.dictionaryWithDictionary(listeners)
          var pipe = NSPipe.pipe()
          var errPipe = NSPipe.pipe()

          this.fileHandle = pipe.fileHandleForReading()
          this.fileHandle.waitForDataInBackgroundAndNotify()

          this.errFileHandle = pipe.fileHandleForReading()
          this.errFileHandle.waitForDataInBackgroundAndNotify()

          this.task = NSTask.alloc().init()
          this.task.setLaunchPath(NSString.stringWithString(opts.file).stringByExpandingTildeInPath())
          this.task.arguments = NSArray.arrayWithArray(args.args || [])
          if (args.envPairs) {
            this.task.environment = args.envPairs
          }
          if (args.cwd) {
            this.task.setCurrentDirectoryPath(NSString.stringWithString(args.cwd).stringByExpandingTildeInPath())
          }

          this.task.setStandardOutput(pipe)
          this.task.setStandardError(errPipe)

          this.task.launch()
        },

        kill() {
          if (this.task) {
            this.task.terminate()
          }
        },

        'readLine:': function readLine(fileHandle) {
          var fileDescriptor = fileHandle.object().fileDescriptor()
          if (fileDescriptor != this.fileHandle.fileDescriptor() &&
              fileDescriptor != this.errFileHandle.fileDescriptor()) {
            return
          }
          var data = fileHandle.object().availableData()
          if (!data) {
            return
          }

          if (fileDescriptor == this.fileHandle.fileDescriptor()) {
            this.listeners.onStdout(data)
            if (this.task) {
              this.fileHandle.waitForDataInBackgroundAndNotify()
            }
          } else if (fileDescriptor == this.errFileHandle.fileDescriptor()) {
            this.listeners.onStderr(data)
            if (this.task) {
              this.errFileHandle.waitForDataInBackgroundAndNotify()
            }
          }
        },

        'taskTerminated:': function taskTerminated(task) {
          if (task.object().processIdentifier() == this.task.processIdentifier()) {
            this.listeners.onEnd(Number(this.task.terminationStatus()), null)
          }
        }
      })
    }

    var child

    try {
      child = ChildProcess.new();
    } catch(err) {
      result.emit('error', err)
      return result
    }

    result.killed = false
    var fiber
    if (coscript.createFiber) {
      fiber = coscript.createFiber()
      fiber.onCleanup(function () {
        NSNotificationCenter.defaultCenter().removeObserver(child)
      })
    } else {
      coscript.shouldKeepAround = true
    }

    function cleanupAsync() {
      if (fiber) {
        fiber.cleanup()
      } else {
        NSNotificationCenter.defaultCenter().removeObserver(child)
        coscript.shouldKeepAround = false
      }
    }

    function onStdout(data) {
      if (data && data.length()) {
        result.stdout.emit('data', handleData(data, result.stdout.encoding))
      }
    }
    function onStderr(data) {
      if (data && data.length()) {
        result.stderr.emit('data', handleData(data, result.stderr.encoding))
      }
    }

    child.spawn({
      file: opts.file,
      args: opts.args,
      cwd: options.cwd,
      detached: !!options.detached,
      envPairs: opts.envPairs,
      stdio: options.stdio,
      uid: options.uid,
      gid: options.gid
    }, {
      onStdout: onStdout,
      onStderr: onStderr,
      onEnd: function (code, signal) {
        if (!result.killed) {
          // flush remaining data
          onStdout(child.fileHandle.readDataToEndOfFile())
          onStderr(child.errFileHandle.readDataToEndOfFile())

          result.emit('close', code, signal)
          result.stderr.emit('close')
          result.stdout.emit('close')

          cleanupAsync()
        }
      }
    })

    NSNotificationCenter.defaultCenter().addObserver_selector_name_object(
      child,
      NSSelectorFromString('readLine:'),
      NSFileHandleDataAvailableNotification,
      null
    )

    NSNotificationCenter.defaultCenter().addObserver_selector_name_object(
      child,
      NSSelectorFromString('taskTerminated:'),
      NSTaskDidTerminateNotification,
      null
    )

    result.kill = function (signal) {
      if (!result.killed) {
        result.killed = true
        result.emit('close', null, signal)
        child.kill()
        cleanupAsync()
      }
    }

    result.pid = String(child.task.processIdentifier())

    return result
  }
}

module.exports = spawn


/***/ }),

/***/ "./node_modules/@skpm/child_process/lib/spawnSync.js":
/*!***********************************************************!*\
  !*** ./node_modules/@skpm/child_process/lib/spawnSync.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals NSPipe, NSTask, NSArray, NSHomeDirectory, NSFileHandleNotificationDataItem, NSUTF8StringEncoding, NSString, NSNotificationCenter, NSSelectorFromString, NSFileHandleReadCompletionNotification, NSDictionary, NSBundle */
var handleData = __webpack_require__(/*! ./handleData */ "./node_modules/@skpm/child_process/lib/handleData.js")
var normalizeSpawnArguments = __webpack_require__(/*! ./normalizeSpawnArguments */ "./node_modules/@skpm/child_process/lib/normalizeSpawnArguments.js")

function spawnSync (_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options);

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync('/bin/bash', ['-l', '-c', 'which ' + opts.file], {encoding: 'utf8'})
    if (whichChild.err) {
      return whichChild
    }
    return spawnSync(whichChild.stdout.trim(), _args, _options)
  } else {
    var options = opts.options;

    var pipe = NSPipe.pipe()
    var errPipe = NSPipe.pipe()

    try {
      var task = NSTask.alloc().init()
      task.setLaunchPath(NSString.stringWithString(opts.file).stringByExpandingTildeInPath())
      task.arguments = NSArray.arrayWithArray(opts.args || [])
      if (opts.envPairs) {
        task.environment = opts.envPairs
      }

      if (options.cwd) {
        task.setCurrentDirectoryPath(NSString.stringWithString(options.cwd).stringByExpandingTildeInPath())
      }

      task.setStandardOutput(pipe)
      task.setStandardError(errPipe)

      task.launch()
      task.waitUntilExit()

      return {
        pid: String(task.processIdentifier()),
        status: Number(task.terminationStatus()),
        get stdout() {
          var data = pipe.fileHandleForReading().readDataToEndOfFile()
          return handleData(data, options.encoding)
        },
        get stderr() {
          var data = errPipe.fileHandleForReading().readDataToEndOfFile()
          return handleData(data, options.encoding)
        },
      }
    } catch (err) {
      return {
        err: err,
      }
    }
  }
}

module.exports = spawnSync


/***/ }),

/***/ "./node_modules/@skpm/events/index.js":
/*!********************************************!*\
  !*** ./node_modules/@skpm/events/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function EventEmitter () {}

// By default, a maximum of 10 listeners can be registered for any single event.
EventEmitter.defaultMaxListeners = 10

// Shortcuts to improve speed and size
var proto = EventEmitter.prototype

proto._maxListeners = EventEmitter.defaultMaxListeners

function indexOfListener (listeners, listener) {
  var i = listeners.length
  while (i--) {
    if (listeners[i].listener === listener) {
      return i
    }
  }

  return -1
}

function alias (name) {
  return function aliasClosure () {
    return this[name].apply(this, arguments)
  }
}

function isValidListener (listener) {
  if (typeof listener === 'function') {
    return true
  } else if (listener && typeof listener === 'object') {
    return isValidListener(listener.listener)
  } else {
    return false
  }
}

proto._getListeners = function _getListeners (evt) {
  var events = this._getEvents()

  return events[evt] || (events[evt] = [])
}

proto._getEvents = function _getEvents () {
  return this._events || (this._events = {})
}

/*
  Alias for emitter.on(eventName, listener).
*/
proto.addListener = alias('on')

/*
  Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

  Returns true if the event had listeners, false otherwise.
*/
proto.emit = function emit (evt) {
  var args = Array.prototype.slice.call(arguments, 1)
  var listeners = this._getListeners(evt) || []
  var listener
  var i
  var key
  var response

  for (i = 0; i < listeners.length; i++) {
    listener = listeners[i]

    if (listener.once === true) {
      this.removeListener(evt, listener.listener)
    }

    response = listener.listener.apply(this, args || [])
  }

  return listeners.length > 0
}

/*
  Returns an array listing the events for which the emitter has registered listeners.
  The values in the array will be strings or Symbols.
*/
proto.eventNames = function eventNames () {
  var events = this._getEvents()
  return Object.keys(events)
}

/*
  Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to EventEmitter.defaultMaxListeners.
*/
proto.getMaxListeners = function getMaxListeners() {
  return this._maxListeners
}

/*
  Returns the number of listeners listening to the event named eventName.
*/
proto.listenerCount = function listenerCount(eventName) {
  return this._getListeners(eventName).length
}

/*
  Returns a copy of the array of listeners for the event named eventName.
*/
proto.listeners = function listeners(eventName) {
  return this._getListeners(eventName).map(function (wrappedListener) {
    return wrappedListener.listener
  })
}

/*
  Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

  Returns a reference to the EventEmitter, so that calls can be chained.

  By default, event listeners are invoked in the order they are added. The emitter.prependListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.
*/
proto.on = function on (evt, listener) {
  if (!isValidListener(listener)) {
    throw new Error('listener must be a function')
  }

  var listeners = this._getListeners(evt)
  var listenerIsWrapped = typeof listener === 'object'

  this.emit('newListener', evt, listenerIsWrapped ? listener.listener : listener)

  listeners.push(
    listenerIsWrapped
    ? listener
    : {
      listener: listener,
      once: false
    }
  )

  return this
}

/*
  Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

  Returns a reference to the EventEmitter, so that calls can be chained.

  By default, event listeners are invoked in the order they are added. The emitter.prependOnceListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.
*/
proto.once = function once (evt, listener) {
  return this.on(evt, {
    listener: listener,
    once: true
  })
}

/*
  Adds the listener function to the beginning of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

  Returns a reference to the EventEmitter, so that calls can be chained.
*/
proto.prependListener = function prependListener (evt, listener) {
  if (!isValidListener(listener)) {
    throw new Error('listener must be a function')
  }

  var listeners = this._getListeners(evt)
  var listenerIsWrapped = typeof listener === 'object'

  this.emit('newListener', evt, listenerIsWrapped ? listener.listener : listener)

  listeners.unshift(
    listenerIsWrapped
    ? listener
    : {
      listener: listener,
      once: false
    }
  )

  return this
}

/*
  Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.

  Returns a reference to the EventEmitter, so that calls can be chained.
*/
proto.prependOnceListener = function prependOnceListener (evt, listener) {
  return this.prependListener(evt, {
    listener: listener,
    once: true
  })
}

/*
  Removes all listeners, or those of the specified eventName.

  Note that it is bad practice to remove listeners added elsewhere in the code, particularly when the EventEmitter instance was created by some other component or module (e.g. sockets or file streams).

  Returns a reference to the EventEmitter, so that calls can be chained.
*/
proto.removeAllListeners = function removeAllListeners (evt) {
  var events = this._getEvents()

  if (typeof evt === 'string') {
    // Remove all listeners for the specified event
    delete events[evt]
  } else {
    // Remove all listeners in all events
    delete this._events
  }

  return this
}

/*
  Removes the specified listener from the listener array for the event named eventName.

  removeListener will remove, at most, one instance of a listener from the listener array. If any single listener has been added multiple times to the listener array for the specified eventName, then removeListener must be called multiple times to remove each instance.

  Note that once an event has been emitted, all listeners attached to it at the time of emitting will be called in order. This implies that any removeListener() or removeAllListeners() calls after emitting and before the last listener finishes execution will not remove them from emit() in progress. Subsequent events will behave as expected.

  Because listeners are managed using an internal array, calling this will change the position indices of any listener registered after the listener being removed. This will not impact the order in which listeners are called, but it means that any copies of the listener array as returned by the emitter.listeners() method will need to be recreated.

  Returns a reference to the EventEmitter, so that calls can be chained.
*/
proto.removeListener = function removeListener (evt, listener) {
  var listeners = this._getListeners(evt)

  var index = indexOfListener(listeners, listener)

  if (index !== -1) {
    listeners.splice(index, 1)

    this.emit('removeListener', evt, listener)
  }

  return this
}

/*
  By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. Obviously, not all events should be limited to just 10 listeners. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.

  Returns a reference to the EventEmitter, so that calls can be chained.
*/
proto.setMaxListeners = function setMaxListeners (n) {
  this._maxListeners = n
  return this
}

/*
  Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once).
*/
proto.rawListeners = function rawListeners (evt) {
  return this._getListeners(evt).slice()
}

module.exports = EventEmitter


/***/ }),

/***/ "./node_modules/@skpm/os/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/os/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.EOL = '\n'
module.exports.arch = function () {
  return 'x64'
}
module.exports.constants = {
  UV_UDP_REUSEADDR: 4,
  dlopen: { RTLD_LAZY: 1, RTLD_NOW: 2, RTLD_GLOBAL: 8, RTLD_LOCAL: 4 },
  errno: {
    E2BIG: 7,
    EACCES: 13,
    EADDRINUSE: 48,
    EADDRNOTAVAIL: 49,
    EAFNOSUPPORT: 47,
    EAGAIN: 35,
    EALREADY: 37,
    EBADF: 9,
    EBADMSG: 94,
    EBUSY: 16,
    ECANCELED: 89,
    ECHILD: 10,
    ECONNABORTED: 53,
    ECONNREFUSED: 61,
    ECONNRESET: 54,
    EDEADLK: 11,
    EDESTADDRREQ: 39,
    EDOM: 33,
    EDQUOT: 69,
    EEXIST: 17,
    EFAULT: 14,
    EFBIG: 27,
    EHOSTUNREACH: 65,
    EIDRM: 90,
    EILSEQ: 92,
    EINPROGRESS: 36,
    EINTR: 4,
    EINVAL: 22,
    EIO: 5,
    EISCONN: 56,
    EISDIR: 21,
    ELOOP: 62,
    EMFILE: 24,
    EMLINK: 31,
    EMSGSIZE: 40,
    EMULTIHOP: 95,
    ENAMETOOLONG: 63,
    ENETDOWN: 50,
    ENETRESET: 52,
    ENETUNREACH: 51,
    ENFILE: 23,
    ENOBUFS: 55,
    ENODATA: 96,
    ENODEV: 19,
    ENOENT: 2,
    ENOEXEC: 8,
    ENOLCK: 77,
    ENOLINK: 97,
    ENOMEM: 12,
    ENOMSG: 91,
    ENOPROTOOPT: 42,
    ENOSPC: 28,
    ENOSR: 98,
    ENOSTR: 99,
    ENOSYS: 78,
    ENOTCONN: 57,
    ENOTDIR: 20,
    ENOTEMPTY: 66,
    ENOTSOCK: 38,
    ENOTSUP: 45,
    ENOTTY: 25,
    ENXIO: 6,
    EOPNOTSUPP: 102,
    EOVERFLOW: 84,
    EPERM: 1,
    EPIPE: 32,
    EPROTO: 100,
    EPROTONOSUPPORT: 43,
    EPROTOTYPE: 41,
    ERANGE: 34,
    EROFS: 30,
    ESPIPE: 29,
    ESRCH: 3,
    ESTALE: 70,
    ETIME: 101,
    ETIMEDOUT: 60,
    ETXTBSY: 26,
    EWOULDBLOCK: 35,
    EXDEV: 18
  },
  signals: {
    SIGHUP: 1,
    SIGINT: 2,
    SIGQUIT: 3,
    SIGILL: 4,
    SIGTRAP: 5,
    SIGABRT: 6,
    SIGIOT: 6,
    SIGBUS: 10,
    SIGFPE: 8,
    SIGKILL: 9,
    SIGUSR1: 30,
    SIGSEGV: 11,
    SIGUSR2: 31,
    SIGPIPE: 13,
    SIGALRM: 14,
    SIGTERM: 15,
    SIGCHLD: 20,
    SIGCONT: 19,
    SIGSTOP: 17,
    SIGTSTP: 18,
    SIGTTIN: 21,
    SIGTTOU: 22,
    SIGURG: 16,
    SIGXCPU: 24,
    SIGXFSZ: 25,
    SIGVTALRM: 26,
    SIGPROF: 27,
    SIGWINCH: 28,
    SIGIO: 23,
    SIGINFO: 29,
    SIGSYS: 12
  }
}
module.exports.cpus = function () {
  return (new Array(NSProcessInfo.processInfo().processorCount())).map(function (x) {
    return {
      model: 'cpu',
      speed: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0
      }
    }
  })
}
module.exports.endianness = function () { return 'LE' }
module.exports.freemem = function () { return 0 }
module.exports.homedir = function () { return String(NSHomeDirectory()) }
module.exports.hostname = function () { return String(NSProcessInfo.processInfo().hostName()) }
module.exports.loadavg = function () { return [0, 0, 0] }
module.exports.networkInterfaces = function () { return {} }
module.exports.platform = function () { return 'darwin' }
module.exports.release = function () { return String(NSProcessInfo.processInfo().operatingSystemVersionString()) }
module.exports.tmpdir = function () { return String(NSTemporaryDirectory()) }
module.exports.totalmem = function () { return Number(NSProcessInfo.processInfo().physicalMemory()) }
module.exports.type = function () { return 'Darwin' }
module.exports.uptime = function () { return Number(NSProcessInfo.processInfo().systemUptime()) }
module.exports.userInfo = function () {
  var info = NSProcessInfo.processInfo()
  return {
    uid: Number(info.processIdentifier()),
    gid: -1,
    username: String(info.userName()),
    homedir: String(NSHomeDirectory()),
    shell: null
  }
}


/***/ }),

/***/ "./node_modules/@skpm/timers/test-if-fiber.js":
/*!****************************************************!*\
  !*** ./node_modules/@skpm/timers/test-if-fiber.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  return typeof coscript !== 'undefined' && coscript.createFiber
}


/***/ }),

/***/ "./node_modules/@skpm/timers/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/@skpm/timers/timeout.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* globals coscript, sketch */
var fiberAvailable = __webpack_require__(/*! ./test-if-fiber */ "./node_modules/@skpm/timers/test-if-fiber.js")

var setTimeout
var clearTimeout

var fibers = []

if (fiberAvailable()) {
  var fibers = []

  setTimeout = function (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
    // fibers takes care of keeping coscript around
    var id = fibers.length
    fibers.push(coscript.scheduleWithInterval_jsFunction(
      (delay || 0) / 1000,
      function () {
        func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
      }
    ))
    return id
  }

  clearTimeout = function (id) {
    var timeout = fibers[id]
    if (timeout) {
      timeout.cancel() // fibers takes care of keeping coscript around
      fibers[id] = undefined // garbage collect the fiber
    }
  }
} else {
  setTimeout = function (func, delay, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
    coscript.shouldKeepAround = true
    var id = fibers.length
    fibers.push(true)
    coscript.scheduleWithInterval_jsFunction(
      (delay || 0) / 1000,
      function () {
        if (fibers[id]) { // if not cleared
          func(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10)
        }
        clearTimeout(id)
        if (fibers.every(function (_id) { return !_id })) { // if everything is cleared
          coscript.shouldKeepAround = false
        }
      }
    )
    return id
  }

  clearTimeout = function (id) {
    fibers[id] = false
  }
}

module.exports = {
  setTimeout: setTimeout,
  clearTimeout: clearTimeout
}


/***/ }),

/***/ "./node_modules/cocoascript-class/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuperCall = undefined;
exports.default = ObjCClass;

var _runtime = __webpack_require__(/*! ./runtime.js */ "./node_modules/cocoascript-class/lib/runtime.js");

exports.SuperCall = _runtime.SuperCall;

// super when returnType is id and args are void
// id objc_msgSendSuper(struct objc_super *super, SEL op, void)

const SuperInit = (0, _runtime.SuperCall)(NSStringFromSelector("init"), [], { type: "@" });

// Returns a real ObjC class. No need to use new.
function ObjCClass(defn) {
  const superclass = defn.superclass || NSObject;
  const className = (defn.className || defn.classname || "ObjCClass") + NSUUID.UUID().UUIDString();
  const reserved = new Set(['className', 'classname', 'superclass']);
  var cls = MOClassDescription.allocateDescriptionForClassWithName_superclass_(className, superclass);
  // Add each handler to the class description
  const ivars = [];
  for (var key in defn) {
    const v = defn[key];
    if (typeof v == 'function' && key !== 'init') {
      var selector = NSSelectorFromString(key);
      cls.addInstanceMethodWithSelector_function_(selector, v);
    } else if (!reserved.has(key)) {
      ivars.push(key);
      cls.addInstanceVariableWithName_typeEncoding(key, "@");
    }
  }

  cls.addInstanceMethodWithSelector_function_(NSSelectorFromString('init'), function () {
    const self = SuperInit.call(this);
    ivars.map(name => {
      Object.defineProperty(self, name, {
        get() {
          return getIvar(self, name);
        },
        set(v) {
          (0, _runtime.object_setInstanceVariable)(self, name, v);
        }
      });
      self[name] = defn[name];
    });
    // If there is a passsed-in init funciton, call it now.
    if (typeof defn.init == 'function') defn.init.call(this);
    return self;
  });

  return cls.registerClass();
};

function getIvar(obj, name) {
  const retPtr = MOPointer.new();
  (0, _runtime.object_getInstanceVariable)(obj, name, retPtr);
  return retPtr.value().retain().autorelease();
}

/***/ }),

/***/ "./node_modules/cocoascript-class/lib/runtime.js":
/*!*******************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/runtime.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuperCall = SuperCall;
exports.CFunc = CFunc;
const objc_super_typeEncoding = '{objc_super="receiver"@"super_class"#}';

// You can store this to call your function. this must be bound to the current instance.
function SuperCall(selector, argTypes, returnType) {
  const func = CFunc("objc_msgSendSuper", [{ type: '^' + objc_super_typeEncoding }, { type: ":" }, ...argTypes], returnType);
  return function (...args) {
    const struct = make_objc_super(this, this.superclass());
    const structPtr = MOPointer.alloc().initWithValue_(struct);
    return func(structPtr, selector, ...args);
  };
}

// Recursively create a MOStruct
function makeStruct(def) {
  if (typeof def !== 'object' || Object.keys(def).length == 0) {
    return def;
  }
  const name = Object.keys(def)[0];
  const values = def[name];

  const structure = MOStruct.structureWithName_memberNames_runtime(name, Object.keys(values), Mocha.sharedRuntime());

  Object.keys(values).map(member => {
    structure[member] = makeStruct(values[member]);
  });

  return structure;
}

function make_objc_super(self, cls) {
  return makeStruct({
    objc_super: {
      receiver: self,
      super_class: cls
    }
  });
}

// Due to particularities of the JS bridge, we can't call into MOBridgeSupport objects directly
// But, we can ask key value coding to do the dirty work for us ;)
function setKeys(o, d) {
  const funcDict = NSMutableDictionary.dictionary();
  funcDict.o = o;
  Object.keys(d).map(k => funcDict.setValue_forKeyPath(d[k], "o." + k));
}

// Use any C function, not just ones with BridgeSupport
function CFunc(name, args, retVal) {
  function makeArgument(a) {
    if (!a) return null;
    const arg = MOBridgeSupportArgument.alloc().init();
    setKeys(arg, {
      type64: a.type
    });
    return arg;
  }
  const func = MOBridgeSupportFunction.alloc().init();
  setKeys(func, {
    name: name,
    arguments: args.map(makeArgument),
    returnValue: makeArgument(retVal)
  });
  return func;
}

/*
@encode(char*) = "*"
@encode(id) = "@"
@encode(Class) = "#"
@encode(void*) = "^v"
@encode(CGRect) = "{CGRect={CGPoint=dd}{CGSize=dd}}"
@encode(SEL) = ":"
*/

function addStructToBridgeSupport(key, structDef) {
  // OK, so this is probably the nastiest hack in this file.
  // We go modify MOBridgeSupportController behind its back and use kvc to add our own definition
  // There isn't another API for this though. So the only other way would be to make a real bridgesupport file.
  const symbols = MOBridgeSupportController.sharedController().valueForKey('symbols');
  if (!symbols) throw Error("Something has changed within bridge support so we can't add our definitions");
  // If someone already added this definition, don't re-register it.
  if (symbols[key] !== null) return;
  const def = MOBridgeSupportStruct.alloc().init();
  setKeys(def, {
    name: key,
    type: structDef.type
  });
  symbols[key] = def;
};

// This assumes the ivar is an object type. Return value is pretty useless.
const object_getInstanceVariable = exports.object_getInstanceVariable = CFunc("object_getInstanceVariable", [{ type: "@" }, { type: '*' }, { type: "^@" }], { type: "^{objc_ivar=}" });
// Again, ivar is of object type
const object_setInstanceVariable = exports.object_setInstanceVariable = CFunc("object_setInstanceVariable", [{ type: "@" }, { type: '*' }, { type: "@" }], { type: "^{objc_ivar=}" });

// We need Mocha to understand what an objc_super is so we can use it as a function argument
addStructToBridgeSupport('objc_super', { type: objc_super_typeEncoding });

/***/ }),

/***/ "./node_modules/sketch-utils/to-array.js":
/*!***********************************************!*\
  !*** ./node_modules/sketch-utils/to-array.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function toArray(object) {
  if (Array.isArray(object)) {
    return object
  }
  var arr = []
  for (var j = 0; j < (object || []).length; j += 1) {
    arr.push(object[j])
  }
  return arr
}


/***/ }),

/***/ "./src/copy-svg-as-react-component.js":
/*!********************************************!*\
  !*** ./src/copy-svg-as-react-component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/messages.js");


/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  try {
    // export selected layers as svg
    var targetDesc = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["exportSelectedLayersAsSvg"])();
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["showMessage"])(_messages__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].TRANSFORMING);
    var result = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["transformSvgToReactComponent"])(targetDesc, Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getSvgrPathByContext"])(context)); // copy result to clipboard

    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["copyStrToClipboard"])(result);
    result ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["showMessage"])(_messages__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].COPY_TO_CLIPBOARD_SUCCESS) : Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["showMessage"])(_messages__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].COPY_TO_CLIPBOARD_FAILED);
  } catch (e) {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["showMessage"])(_messages__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].GENERAL_ERROR);
  }
});

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: showMessage, getDuplicateSelection, copyStrToClipboard, createWrapper, transformSvgToReactComponent, transformSvgToRNComponent, transformSvgsToReactComponent, getSvgrPathByContext, exportSelectedLayersAsSvg, getExportedSvgPathsByContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuplicateSelection", function() { return getDuplicateSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyStrToClipboard", function() { return copyStrToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWrapper", function() { return createWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformSvgToReactComponent", function() { return transformSvgToReactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformSvgToRNComponent", function() { return transformSvgToRNComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformSvgsToReactComponent", function() { return transformSvgsToReactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvgrPathByContext", function() { return getSvgrPathByContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSelectedLayersAsSvg", function() { return exportSelectedLayersAsSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExportedSvgPathsByContext", function() { return getExportedSvgPathsByContext; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/messages.js");
/* harmony import */ var _skpm_os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skpm/os */ "./node_modules/@skpm/os/index.js");
/* harmony import */ var _skpm_os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skpm_os__WEBPACK_IMPORTED_MODULE_2__);




var _require = __webpack_require__(/*! @skpm/child_process */ "./node_modules/@skpm/child_process/index.js"),
    execSync = _require.execSync;

var toArray = __webpack_require__(/*! sketch-utils/to-array */ "./node_modules/sketch-utils/to-array.js");

var showMessage = function showMessage(str) {
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(str);
};
var getDuplicateSelection = function getDuplicateSelection(selection) {
  var duplicateSelection = [];
  selection.forEach(function (layer) {
    var duplicatedLayer = layer.duplicate();
    duplicateSelection.push(duplicatedLayer);
  });
  return duplicateSelection;
};
var copyStrToClipboard = function copyStrToClipboard(str) {
  var pasteboard = NSPasteboard.generalPasteboard();
  pasteboard.clearContents();
  pasteboard.writeObjects(["".concat(str)]);
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message([str]);
};
var createWrapper = function createWrapper(svgString) {
  return "\n    import * as React from \"react\";\n    \n    export const IconSvg:React.SFC = (props) => (\n        ".concat(svgString, "\n    )\n    ");
};
function transformSvgToReactComponent(svgPath, svgrPath) {
  return execSync("".concat(svgrPath, " \"").concat(svgPath, "\""));
}
function transformSvgToRNComponent(svgPath, svgrPath) {
  return execSync("".concat(svgrPath, " --native \"").concat(svgPath, "\""));
}
function transformSvgsToReactComponent(svgPaths, svgrPath, targetDesc) {
  return execSync("".concat(svgrPath, " --ext=tsx --out-dir=").concat(targetDesc) + " " + "\"".concat(svgPaths.join('" "'), "\""));
}
var getSvgrPathByContext = function getSvgrPathByContext(context) {
  return context.plugin.urlForResourceNamed('node_modules/@svgr/cli/bin/svgr').path();
};
var exportSelectedLayersAsSvg = function exportSelectedLayersAsSvg() {
  var name = "sketch-selected-svg";
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Document.getSelectedDocument();
  var page = document.selectedPage; // get selected layers

  var selection = document.selectedLayers;

  if (selection.isEmpty) {
    return showMessage(_messages__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].NO_LAYER_SELECTED);
  } // duplicate selected layers and group them


  var duplicateSelection = getDuplicateSelection(selection);
  var group = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Group({
    name: name,
    layers: duplicateSelection,
    parent: page
  });
  group.adjustToFit(); // export group to svg file

  var homeDir = _skpm_os__WEBPACK_IMPORTED_MODULE_2___default.a.homedir();
  var targetPath = "/Documents/SketchExports";
  var targetDesc = "".concat(homeDir).concat(targetPath, "/").concat(name, ".svg");
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.export(group, {
    formats: "svg",
    output: "~/Documents/SketchExports"
  }); // remove the group after we exported it to svg, otherwise it still shows in the sketch file

  group.remove();
  return targetDesc;
};
var getExportedSvgPathsByContext = function getExportedSvgPathsByContext(context) {
  var exportRequests = toArray(context.actionContext.exports);
  return exportRequests.filter(function (currentExport) {
    // can not use "===" here, case the type of "currentExport.request.format()" is object
    return currentExport.request.format() == "svg";
  }).map(function (currentExport) {
    return currentExport.path;
  });
};

/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/*! exports provided: MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
var MESSAGES = {
  NO_LAYER_SELECTED: "Please select a layer!",
  GENERAL_ERROR: "Something went wrong!",
  COPY_TO_CLIPBOARD_SUCCESS: "Copy svg to clipboard successfully!",
  COPY_TO_CLIPBOARD_FAILED: "Copy svg to clipboard failed!",
  TRANSFORMING: "Transforming...",
  EXPORT_SUCCESS: "Export successfully!",
  EXPORT_FAILED: "Export failed!",
  NO_SVG_EXPORTED: "No svg exported!"
};

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=copy-svg-as-react-component.js.map