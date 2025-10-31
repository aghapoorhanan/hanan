from django.urls import path
from . import views

urlpatterns = [
    path('', views.adslots_list, name='adslots-list'),
    path('book', views.book_adslot, name='adslot-book'),
]
