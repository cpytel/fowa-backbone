App.Views.Task = Backbone.View.extend({
  tagName: "li",

  render: function() {
    $(this.el).html(_.template(templates['tasks/task'], { model: this.model }));

    return this;
  }
});
