from django.urls import path
from . import views

urlpatterns = [
    path('', views.cTest, name='cTest'),
	path('threejsTest', views.threejsTest, name='threejsTest'),
]
