Rails.application.routes.draw do
  resources :tweets
  get 'profile' => 'profile#index' # show the profile page
  patch 'profile' => 'profile#update' # update the profile

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
