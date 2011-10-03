var App = {
  Models: {},
  Views: {},
  Routers: {},
  Collections: {},
  init: function(init_tasks) {
    this.tasks = new App.Collections.Tasks(init_tasks);

    new App.Routers.Tasks();
    Backbone.history.start();
  }
};
