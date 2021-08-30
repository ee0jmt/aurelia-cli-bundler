define('app',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.App = void 0;

  var App = /*#__PURE__*/function () {
    function App() {}

    var _proto = App.prototype;

    _proto.configureRouter = function configureRouter(config, router) {
      config.title = "Aurelia";
      config.map([{
        route: ["", "menu"],
        name: "menu",
        moduleId: "./menu",
        nav: true,
        title: "Menu"
      } // {
      //   route: "users",
      //   name: "users",
      //   moduleId: "./users",
      //   nav: true,
      //   title: "Github Users",
      // },
      // {
      //   route: "child-router",
      //   name: "child-router",
      //   moduleId: "./child-router",
      //   nav: true,
      //   title: "Child Router",
      // },
      ]);
      this.router = router;
    };

    return App;
  }();

  _exports.App = App;
});;
define('text!app.html',[],function(){return "<template>\n  <h1>${message}</h1>\n</template>\n";});;
define('environment',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var _default = {
    debug: true,
    testing: true
  };
  _exports.default = _default;
});;
define('main',["exports", "./environment"], function (_exports, _environment) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  _environment = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');
    aurelia.use.developmentLogging(_environment.default.debug ? 'debug' : 'warn');

    if (_environment.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});;
define('resources/index',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(config) {//config.globalResources([]);
  }
});;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map