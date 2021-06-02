class CreateTripsPlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :trips_planets do |t|
      t.belongs_to :trip
      t.belongs_to :planet
    end
  end
end
