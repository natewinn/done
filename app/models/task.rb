class Task < ActiveRecord::Base
	belongs_to 	:user
	validates 	:name, presence: 'true'

	scope :incomplete, -> { where.not(complete: true) }
end
