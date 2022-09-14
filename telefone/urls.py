from django.urls import path

from . import views

urlpatterns = [
    path('telefone/<fornecedor_id>/list/', views.ListTelefoneView.as_view()),
    path('telefone/<telefone_id>/', views.UpdateTelefoneByID.as_view()),
]
