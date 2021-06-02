class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :departure
      t.string :arrival
      t.string :destination
      t.string :takeoff
      t.integer :user_id
    end
  end
end
