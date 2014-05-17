class TasksController < ApplicationController
	# before_filter :authenticate_user!, :load

	before_filter :load

	def load
		@tasks = Task.all
		@new_task = Task.new
	end

	def index
	end

	def create
		@new_task = Task.new(task_params)
		if @new_task.save
			redirect_to tasks_path
		else
			flash[:notice] = 'Task load failed'
		end
	end

	def edit
		@task = Task.find(params[:id])
		redirect_to tasks_path
	end

	def update
		@task = Task.find(params[:id])
		if @task.update_attributes(params[:id])
			redirect_to tasks_path
		else
			flash[:notice] = 'Update failed'
		end
	end	

	def destroy
		@task = Task.find(params[:id])
		if @task.destroy
			redirect_to tasks_path
		else
			flash[:notice] = 'Task deleted failed'
		end
	end	

	private

	def task_params
		params.require(:task).permit(:name)
	end

end