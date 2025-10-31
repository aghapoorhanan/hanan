from django.urls import path
from . import views

urlpatterns = [
    path('', views.products_list, name='products-list'),
    path('<slug:slug>/', views.product_detail, name='product-detail'),
]
