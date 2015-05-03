Rails.application.routes.draw do

  scope '/api' do
    post 'validate/test'
  end

end
