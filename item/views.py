from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from pedido.models import Pedido
from produto.models import Produto
from django.shortcuts import get_object_or_404

class ListCreateItemView(generics.ListCreateAPIView):
    queryset= Item.objects.all()
    serializer_class = ItemSerializer
    lookup_url_kwarg = "produto_id"
    
    def perform_create(self, serializer):
        
        produto_id = self.kwargs[self.lookup_url_kwarg]
        produto = get_object_or_404(Produto, id=produto_id)
        serializer.save(produtos = produto)
        
    def get_queryset(self):
        produto_id = self.kwargs[self.lookup_url_kwarg]
        return Item.objects.filter(id=produto_id)
    
class ListItemView(generics.ListAPIView):
    queryset= Item.objects.all()
    serializer_class = ItemSerializer
    
class ListUpdateDeleteItemByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Item.objects.all()
    serializer_class = ItemSerializer
    lookup_url_kwarg = "item_id"