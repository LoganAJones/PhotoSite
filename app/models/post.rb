
class Post < ApplicationRecord
  mount_uploader :post_art, PostArtUploader
  validates :post_art, presence: true
  validates :description, presence: true



  belongs_to :user

end
