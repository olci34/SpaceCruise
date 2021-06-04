class TripsController < ApplicationController

    def index
        trips = Trip.all
        render json: trips
    end

    def create
        trip = Trip.create(trip_params)
        render json: trip
    end

    def update
        trip = Trip.find_by(id: params[:id])
        trip.update(trip_params)
        render json: trip
    end

    def destroy
        trip = Trip.find_by(id: params[:id])
        trip.destroy
        render json: trip
    end

    def trip_params
        params.require(:trip).permit(:departure, :user_id, planet_ids: [])
    end
end
