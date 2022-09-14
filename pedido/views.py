from rest_framework import generics
from .models import Pedido
from .serializers import PedidoSerializer
from transportadora.models import Transportadora
from django.shortcuts import get_object_or_404
from item.models import Item

class ListCreatePedidoView(generics.ListCreateAPIView):
    queryset= Pedido.objects.all()
    serializer_class = PedidoSerializer
    lookup_url_kwarg= "transportadora_id"
    
    def perform_create(self, serializer):
        transportadora_id = self.kwargs[self.lookup_url_kwarg]
        transportadora = get_object_or_404(Transportadora, id=transportadora_id)
        item_id = self.kwargs[self.lookup_url_kwarg]
        item = get_object_or_404(Item, id=item_id)
        serializer.save(transportadora = transportadora, pedidos_id=item)
        
    
    
class ListUpdateDeletePedidoByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Pedido.objects.all()
    serializer_class = PedidoSerializer
    lookup_url_kwarg = "pedido_id"