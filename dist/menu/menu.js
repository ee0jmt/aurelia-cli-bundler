define('menu/menu',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.Menu = void 0;

  var Menu = function Menu() {
    this.message = 'Hello World!';
  };

  _exports.Menu = Menu;
});;
define('text!menu/menu.html',[],function(){return "<template>\n  <h1>${message}</h1>\n</template>\n";});
//# sourceMappingURL=menu.js.map