class TasksController < ApplicationController
  # before_filter :authenticate_user!, :load

  before_filter :this_is_trash

  def this_is_trash
    @tasks = Task.all
    @new_task = Task.new
  end

  def index
  end

  def create
    @new_task = Task.new(task_params)
    if @new_task.save
      @tasks = Task.all
    end
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(task_params)
      @tasks = Task.all
  end 

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      @tasks = Task.all
    end
  end

  def toggle
  	@task = Task.find(params[:id])
		@task.update_attributes(:complete => params[:complete])
	end
	
  private

  def task_params
    params.require(:task).permit(:name, :complete)
  end
end