class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :description, null: false
      t.belongs_to :user
      t.timestamps null: false
    end
  end
end
