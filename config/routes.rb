Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  namespace :api do
    namespace :v1 do
      resources :posts
      resources :users do
        get 'all', :on => :collection
      end
    end
  end

get "/posts/new", to: 'homes#index'
get "/posts/:id", to: 'homes#index'
get "/photos", to: 'homes#index'
get "/contact", to: 'homes#index'
get "/user/all", to: 'homes#index'
end
