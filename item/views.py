from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from pedido.models import Pedido
from produto.models import Produto


class ListCreateItemView(generics.ListCreateAPIView):
    queryset= Item.objects.all()
    serializer_class = ItemSerializer
    
    def perform_create(self, serializer):
        produto_id = self.kwargs[self.lookup_url_kwarg]
        pedido_id = self.kwargs[self.lookup_url_kwarg]
        
        produto = get_object_or_404(Produto, id=produto_id)
        pedido = get_object_or_404(Pedido, id=pedido_id)
        
        serializer.save(produto = produto, pedido = pedido)
    
    
class ListUpdateDeleteItemByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Item.objects.all()
    serializer_class = ItemSerializer
    lookup_url_kwarg = "item_id"