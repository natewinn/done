class TasksController < ApplicationController
  # before_filter :authenticate_user!

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
      @tasks = Task.all
    end
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(task_params)
    respond_to do |format|
      format.js
      format.html { redirect_to tasks_path }
    end
  end 

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      @tasks = Task.all
    end
  end
	
  private

  def task_params
    params.require(:task).permit(:name, :complete)
  end
end