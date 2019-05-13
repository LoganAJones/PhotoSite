class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def all

    render json: User.all
  end

  def index

    render json: current_user_info
  end

  def show

    render json: show_user_info
  end


  def authorize_user
  if !user_signed_in? || !current_user.admin?
    raise ActionController::RoutingError.new("Not Found")
  end
end
  def current_user_info
    {id: current_user.id, first_name:current_user.first_name, last_name: current_user.last_name, user_name:current_user.user_name, posts: current_user.posts, profile_photo: current_user.profile_photo}
  end

  def show_user_info
    @user = User.find(params[:id])

    {id: @user.id, first_name:@user.first_name, last_name: @user.last_name, user_name:@user.user_name, posts: @user.posts, profile_photo: @user.profile_photo}
  end

end
