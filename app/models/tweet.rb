class Tweet < ApplicationRecord
  belongs_to :user

  def as_json(options = {})
    super(methods: [:name, :email])
  end
  def name
    user.display_name
  end

  def email
    user.email
  end
end
