class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

	mount_uploader :avatar, AvatarUploader  

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  
  validates_presence_of 	:name
  validates_presence_of 	:email
  validates_presence_of 	:encrypted_password
  validates_presence_of 	:avatar
  validates_integrity_of 	:avatar
  validates_processing_of :avatar
end
