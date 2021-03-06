(function (e, a) {
  for (var i in a) e[i] = a[i];
})(
  exports,
  /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator["throw"](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        const coc_nvim_1 = __webpack_require__(1);
        const floaterm_1 = __importDefault(__webpack_require__(2));
        function activate(context) {
          return __awaiter(this, void 0, void 0, function* () {
            const { nvim } = coc_nvim_1.workspace;
            const { subscriptions } = context;
            subscriptions.push(
              coc_nvim_1.commands.registerCommand("floaterm.new", () =>
                nvim.call("floaterm#run", ["new", 0, ""])
              )
            );
            subscriptions.push(
              coc_nvim_1.commands.registerCommand("floaterm.prev", () =>
                nvim.call("floaterm#prev")
              )
            );
            subscriptions.push(
              coc_nvim_1.commands.registerCommand("floaterm.next", () =>
                nvim.call("floaterm#next")
              )
            );
            subscriptions.push(
              coc_nvim_1.commands.registerCommand("floaterm.toggle", (name) =>
                nvim.call("floaterm#toggle", name)
              )
            );
            subscriptions.push(
              coc_nvim_1.commands.registerCommand("floaterm.update", (opts) =>
                nvim.call("floaterm#run", ["update", 0, opts])
              )
            );
            subscriptions.push(
              coc_nvim_1.commands.registerCommand("floaterm.send", (name) =>
                nvim.call("floaterm#send", name)
              )
            );
            subscriptions.push(
              coc_nvim_1.listManager.registerList(new floaterm_1.default(nvim))
            );
          });
        }
        exports.activate = activate;

        /***/
      },
      /* 1 */
      /***/ function (module, exports) {
        module.exports = require("coc.nvim");

        /***/
      },
      /* 2 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var __awaiter =
          (this && this.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator["throw"](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        const coc_nvim_1 = __webpack_require__(1);
        class Floaterm extends coc_nvim_1.BasicList {
          constructor(nvim) {
            super(nvim);
            this.name = "floaterm";
            this.description = "CocList for vim-floaterm";
            this.defaultAction = "open";
            this.actions = [];
            this.addAction("open", (item) =>
              __awaiter(this, void 0, void 0, function* () {
                yield this.nvim.call(
                  "floaterm#terminal#open_existing",
                  item.data
                );
              })
            );
            this.addAction("preview", (item, context) =>
              __awaiter(this, void 0, void 0, function* () {
                const bufnr = item.data;
                const bufinfo = yield this.nvim.call("getbufinfo", bufnr);
                const lnum = bufinfo[0]["lnum"];
                let lines = yield this.nvim.call("getbufline", [
                  bufnr,
                  Math.max(lnum - 10, 0),
                  "$",
                ]);
                lines = lines.slice(Math.max(lines.length - 10, 0));
                yield this.preview(
                  {
                    sketch: true,
                    filetype: "floaterm_preview",
                    lines,
                  },
                  context
                );
              })
            );
          }
          loadItems(_context) {
            return __awaiter(this, void 0, void 0, function* () {
              const list = [];
              const loaded_floaterm = yield this.nvim.eval(
                'exists("*floaterm#buflist#gather")'
              );
              if (loaded_floaterm.valueOf() == 0) return [];
              const buffers = yield this.nvim.call("floaterm#buflist#gather");
              for (const bufnr of buffers) {
                const term_title = yield this.nvim.call("getbufvar", [
                  bufnr,
                  "term_title",
                ]);
                list.push({
                  label: bufnr.toString().padEnd(5) + term_title,
                  data: bufnr,
                });
              }
              return list;
            });
          }
          doHighlight() {
            let { nvim } = coc_nvim_1.workspace;
            nvim.pauseNotification();
            nvim.command("syntax match FloatermBufnr /\\v^.*\\v%4v/", true);
            nvim.command("hi def link FloatermBufnr Constant", true);
            nvim.command("syn match FloatermInfo /\\v%4v.*$/", true);
            nvim.command("hi def link FloatermInfo Statement", true);
            nvim.resumeNotification().catch((_e) => {
              // nop
            });
          }
        }
        exports.default = Floaterm;

        /***/
      },
      /******/
    ]
  )
);
