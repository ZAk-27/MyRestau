from django.urls import path
from . import views
from .views import OrderListCreateView, OrderRetrieveUpdateDestroyView, OrderItemCreateView

urlpatterns = [
    # CRUD Operations

    # Get all foods or particular food by id
    path('', views.getFood, name='food'),
    path('<int:id>', views.getFoodByID, name='foodByID'),

    # # create, update, or delete a particular food
    path('create', views.createFood, name='createFood'),
    path('<int:id>/update', views.updateFood, name='updateFood'),
    path('<int:id>/delete', views.deleteFood, name='deleteFood'),

    # # Get all orders or particular order by id
    path('orders/', OrderListCreateView.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderRetrieveUpdateDestroyView.as_view(),
         name='order-retrieve-update-destroy'),
    path('order-items/', OrderItemCreateView.as_view(), name='order-item-create')
]
