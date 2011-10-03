templates = {};
templates["tasks/index"]  = "<ul class='tasks'></ul>";
templates["tasks/form"]   = "<form id='new_task' action='/tasks'><ol class='inputs'><li><label for='title_input'>Title</label><input type='text' name='title' id='title_input'/></li></ol><ol class='buttons'><input type='submit' value='Create Task'/></ol></form>";
templates["tasks/task"]   = "<a href='#tasks/<%= model.id %>'><%= model.escape('title') %></a>";
templates["tasks/detail"] = "<div id='task_<%= model.id %>' class='task'><a href='#' class='back'>&laquo; Back</a><a href='#' class='delete'>Delete</a><h1><%= model.escape('title') %></h1></div>";
