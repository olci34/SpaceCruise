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
        user = User.find_by(name: params[:user][:name])
        if user && user.authenticate(params[:user][:password])
            render json: user
        elsif user
            render json: {errors: 'Wrong password'}
        else
            render json: {errors: 'Wrong username'}
        end
    end

    def user_params
        params.require(:user).permit(:name, :password)
    end

end
