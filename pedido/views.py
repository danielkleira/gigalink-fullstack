from rest_framework import generics
from .models import Pedido
from .serializers import PedidoSerializer
from transportadora.models import Transportadora


class ListCreatePedidoView(generics.ListCreateAPIView):
    queryset= Pedido.objects.all()
    serializer_class = PedidoSerializer
    
    def perform_create(self, serializer):
        transportadora_id = self.kwargs[self.lookup_url_kwarg]
        transportadora = get_object_or_404(Transportadora, id=transportadora_id)
        serializer.save(transportadora = transportadora)
    
    
class ListUpdateDeletePedidoByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Pedido.objects.all()
    serializer_class = PedidoSerializer
    lookup_url_kwarg = "pedido_id"