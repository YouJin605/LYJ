from django.urls import path

from . import views

urlpatterns = [
    path('post/', views.ListPost.as_view()),
    path('post/<int:pk>/', views.DetailPost.as_view()),
    path('good/',views.ListGood.as_view()),
    path('good/<int:pk>/',views.DetailGood.as_view()),
    path('forMainpage/',views.ListforMainpage.as_view()),
    path('forMainpage/<int:pk>/',views.DetailforMainpage.as_view()),
    path('mainpageImage/',views.ListMainpageImage.as_view()),
    
]