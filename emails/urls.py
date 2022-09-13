from django.urls import path

from . import views

urlpatterns = [
    path('fornecedor/<fornecedor_id>/email/', views.ListCreateEmailView.as_view()),
    path('fornecedor/<fornecedor_id>/<email_id>/', views.ListUpdateDeleteEmailByID.as_view()),
]
