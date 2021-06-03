class CreatePlanetsTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :planets_trips do |t|
      t.belongs_to :trip
      t.belongs_to :planet
    end
  end
end
