class TripSerializer < ActiveModel::Serializer
  attributes :id, :departure
  has_many :planets
  belongs_to :user
end
