class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :passcode
      t.belongs_to :trip
    end
  end
end
