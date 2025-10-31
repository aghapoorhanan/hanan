from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.signup, name='affiliate-signup'),
    path('dashboard', views.dashboard, name='affiliate-dashboard'),
    path('click', views.track_click, name='affiliate-click'),
]
