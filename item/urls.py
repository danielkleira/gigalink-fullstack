from django.urls import path

from . import views

urlpatterns = [
    path('produto/<int:produto_id>/item/', views.ListCreateItemView.as_view()),
    path('item/', views.ListItemView.as_view()),
    path('item/<item_id>/', views.ListUpdateDeleteItemByID.as_view()),
]
