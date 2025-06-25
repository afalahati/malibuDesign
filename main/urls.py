from django.urls import path
from .views import home,blog_detail

urlpatterns = [
    path('', home, name='home'),
    path('blog/<int:id>/', blog_detail, name='blog_detail'),
]
