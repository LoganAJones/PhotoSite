class AddPostArtToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :post_art, :string, null: false
  end
end
