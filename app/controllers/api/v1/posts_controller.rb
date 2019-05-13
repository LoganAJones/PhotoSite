class Api::V1::PostsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]
def index
  @posts = Post.all.order(:created_at).reverse_order
    render json: @posts
  end
def show
    @post = Post.find(params[:id])
    render json: @post.to_json
  end
  def new
    data = params

    post = Post.new(description: data[:description], post_art: data[:post_art])

    #
    # post.save!
    # post.post_art.url # => '/url/to/file.png'
    # post.post_art.current_path # => 'path/to/file.png'
    # post.post_art_identifier # => 'file.png'

    render json: {post: post}
  end

  def create
    data = params
    post = Post.new(post_params)
    post.user = current_user
    if post.save
      render json: {post: post}, adapter: :json
    else
      render json: { error: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.permit(:description, :post_art)
  end
end
