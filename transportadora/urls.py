from django.urls import path

from . import views

urlpatterns = [
    path('transportadoras/', views.ListCreateTransportadoraView.as_view()),
    path('transportadoras/<transportadora_id>/', views.ListUpdateDeleteTransportadoraByID.as_view()),
]