class TripSerializer < ActiveModel::Serializer
  attributes :id, :departure
  has_many :planets
end
