from django.urls import path

from . import views

urlpatterns = [
    path('transportadora/pedidos/<transportadora_id>/<item_id>/', views.ListCreatePedidoView.as_view()),
    path('pedidos/<pedido_id>/', views.ListUpdateDeletePedidoByID.as_view()),
]
