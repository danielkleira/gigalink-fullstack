from django.urls import path

from . import views

urlpatterns = [
    path('fornecedor/<fornecedor_id>/produto/<produto_id>/item/', views.ListCreateItemView.as_view()),
    path('fornecedor/<fornecedor_id>/produto/<produto_id>/item/<item_id>/', views.ListUpdateDeleteItemByID.as_view()),
]
