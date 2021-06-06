class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.string :position
      t.string :description
      t.string :name
    end
  end
end
