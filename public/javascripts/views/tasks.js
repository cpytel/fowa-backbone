App.Views.Tasks = Backbone.View.extend({
  events: {
    "submit form#new_task": "addTask"
  },
  initialize: function() {
    _.bindAll(this, "taskAdded");
    App.tasks.bind('add', this.taskAdded);
  },

  render: function() {
    $(this.el).html(_.template(templates['tasks/index'], {}));

    var tasksView = this;
    App.tasks.each(function(task) {
      var taskView = new App.Views.Task({ model: task });
      tasksView.$("ul").append(taskView.render().el);
    });

    this.$('ul').after(_.template(templates['tasks/form'], {}));
    return this;
  },

  taskAdded: function(task) {
    var taskView = new App.Views.Task({model: task});
    this.$(".tasks").append(taskView.render().el);
  },

  addTask: function(event) {
    event.preventDefault();
    event.stopPropagation();

    var task = new App.Models.Task();

    var attributes = {};
    _.each($(this.el).find('form input, form textarea, form select'), function(element) {
      element = $(element);
      if(element.attr('type') != "submit") {
        if(element.attr('type') == 'checkbox') {
          attributes[element.attr('name')] = element.is(':checked');
        } else {
          attributes[element.attr('name')] = element.val();
        }
      }
    });

    task.save(attributes, {
      success: function(model, response) {
        App.tasks.add(model);
        this.$("#title_input").val("");
      }
    });

    return false;
  }
});
