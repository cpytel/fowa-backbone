App.Views.TaskDetail = Backbone.View.extend({
  events: {
    "click a.delete": "destroy"
  },

  initialize: function() {
    _.bindAll(this, "remove");
    this.model.bind("destroy", this.remove)
  },

  render: function() {
    $(this.el).html(_.template(templates['tasks/detail'], { model: this.model }));

    return this;
  },

  destroy: function(event) {
    event.preventDefault();
    event.stopPropagation();

    this.model.destroy({
      success: function(data) {
        window.location.hash = "";
      }
    });

    return false;
  }
});
