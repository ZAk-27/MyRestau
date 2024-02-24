from django.urls import path
from . import views

urlpatterns = [
    # CRUD Operations

    # Get all foods or particular food by id
    path('', views.getFood, name='food'), 
    path('<int:id>', views.getFoodByID, name='foodByID'),

    # # create, update, or delete a particular food
    path('create', views.createFood, name='createFood'), 
    path('<int:id>/update', views.updateFood, name='updateFood'), 
    path('<int:id>/delete', views.deleteFood, name='deleteFood'), 
]