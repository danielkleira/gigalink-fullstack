from django.urls import path

from . import views

urlpatterns = [
    path('fornecedor/<fornecedor_id>/telefone/', views.ListTelefoneView.as_view()),
    path('fornecedor/<fornecedor_id>/telefone/', views.UpdateTelefoneByID.as_view()),
]
