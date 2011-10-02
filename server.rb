require 'rubygems'
require 'sinatra'

configure do
  set :tasks, [
    { 'id' => 1, 'title' => "Get Passport" },
    { 'id' => 2, 'title' => "Book tickets" },
    { 'id' => 3, 'title' => "Fly to London" },
    { 'id' => 4, 'title' => "Talk!" }
  ]
end

get '/' do
  p settings.tasks
  erb :index, :locals => { :tasks => settings.tasks }
end

post '/tasks.json' do
  params['id'] = rand(10000);
  settings.tasks << params
  p settings.tasks
  "<li><a href='/tasks/#{params['id']}'>#{params['title']}</a></li>"
end
