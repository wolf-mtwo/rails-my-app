class PostsController < ApplicationController
  def index
    @aux = User.find(params[:user_id])
    @data = { posts: @aux.posts.as_json }
  end

  def new
    @user = User.find(params[:user_id])
    @post = Post.new
  end

  def create
    @user = User.find(params[:user_id])
    @post = @user.posts.create(comment_params)
    # redirect_to post_path(@post)
    redirect_to root_path
  end

  private
  def comment_params
    params.require(:post).permit(:title, :description)
  end
end
