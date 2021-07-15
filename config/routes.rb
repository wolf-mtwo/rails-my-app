Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "articles#index"
  root "users#index"

  # get "/articles", to: "articles#index"
  # get "/articles/:id", to: "articles#show"
  # resources :articles

  resources :users
  get "/users/:user_id/new-post", to: "posts#new"
  get "/users/:user_id/posts", to: "posts#index"
  post "/users/:user_id/posts", to: "posts#create"

  resources :articles do
    resources :comments
  end
end
