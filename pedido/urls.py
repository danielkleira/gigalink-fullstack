from django.urls import path

from . import views

urlpatterns = [
    path('transportadora/pedidos/<transportadora_id>/', views.ListCreatePedidoView.as_view()),
    path('transportadora/pedidos/',views.ListPedidoView.as_view()),
    path('pedidos/<pedido_id>/', views.ListUpdateDeletePedidoByID.as_view()),
]
