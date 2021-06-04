Rails.application.routes.draw do
  resources :planets
  resources :tickets
  resources :trips
  resources :users

  post 'signin', to: 'users#sign_in'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
