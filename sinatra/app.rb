require 'sinatra'

set :bind, '0.0.0.0'
set :port, 80

get '/ruby' do
    "Hello from sinatra"
end