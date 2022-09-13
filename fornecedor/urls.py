from django.urls import path

from . import views

urlpatterns = [
    path('fornecedor/', views.ListCreateFornecedorView.as_view()),
    path('fornecedor/<fornecedor_id>/', views.ListUpdateDeleteFornecedorByID.as_view()),
]
