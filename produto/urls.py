from django.urls import path

from . import views

urlpatterns = [
    path('fornecedor/<fornecedor_id>/produto/', views.ListCreateProdutoView.as_view()),
    path('produto/<produto_id>/', views.ListUpdateDeleteProdutoByID.as_view()),
]
