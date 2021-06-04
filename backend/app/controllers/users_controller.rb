class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end
    
    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors.full_messages
        end
    end

    def sign_in
        user = User.find_by(name: params[:username])
        render json: user
    end

    def user_params
        params.require(:user).permit(:name, :password)
    end

end
