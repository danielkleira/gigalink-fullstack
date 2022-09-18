from django.urls import path

from . import views

urlpatterns = [
    path('email/<fornecedor_id>/', views.ListCreateEmailView.as_view()),
    path('email/<fornecedor_id>/<email_id>/', views.ListUpdateDeleteEmailByID.as_view()),
]
