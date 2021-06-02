class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :departure
      t.string :arrival
      t.string :destination
      t.string :from
      t.integer :trip_id
    end
  end
end
