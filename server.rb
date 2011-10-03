require 'rubygems'
require 'sinatra'
require 'json'

configure do
  set :method_override, true
  set :tasks, [
    { 'id' => 1, 'title' => "Get Passport" },
    { 'id' => 2, 'title' => "Book tickets" },
    { 'id' => 3, 'title' => "Fly to London" },
    { 'id' => 4, 'title' => "Talk!" }
  ]
end

get '/' do
  erb :index, :locals => { :tasks => settings.tasks }
end

post '/tasks' do
  task = JSON.parse(request.body.read)
  task['id'] = rand(10000);
  settings.tasks << task
  task.to_json
end

get "/tasks/:id" do
  erb :show, :locals => { :task => find_task(params[:id]) }, :layout => false
end

delete "/tasks/:id" do
  settings.tasks.reject! { |task| task["id"] == params[:id].to_i }
  ""
end

helpers do
  def find_task(id)
    settings.tasks.find { |task| task["id"] == id.to_i }
  end
end
