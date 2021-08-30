export class App {
  configureRouter(config, router) {
    config.title = "Aurelia";
    config.map([
      {
        route: ["", "menu"],
        name: "menu",
        moduleId: "./menu",
        nav: true,
        title: "Menu",
      }
      // {
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
  }
}
