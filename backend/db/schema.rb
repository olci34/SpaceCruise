# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_02_164024) do

  create_table "planets", force: :cascade do |t|
    t.string "position"
    t.string "description"
    t.string "name"
  end

  create_table "planets_trips", force: :cascade do |t|
    t.integer "trip_id"
    t.integer "planet_id"
    t.index ["planet_id"], name: "index_planets_trips_on_planet_id"
    t.index ["trip_id"], name: "index_planets_trips_on_trip_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.string "passcode"
    t.integer "trip_id"
    t.index ["trip_id"], name: "index_tickets_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "departure"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
  end

end
