App.Routers.Tasks = Backbone.Router.extend({
  routes: {
    "": "index",
    "tasks/:id": "detail"
  },

  index: function() {
    console.log("index");
    var tasksView = new App.Views.Tasks();

    $("body").html(tasksView.render().el);

    return false;
  },

  detail: function(task_id) {
    var task = App.tasks.get(task_id);
    var taskDetailView = new App.Views.TaskDetail({ model: task });

    $("body").html(taskDetailView.render().el);

    return false;
  },
});
