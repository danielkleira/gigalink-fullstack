from rest_framework import generics
from .models import Produto
from .serializers import ProdutoSerializer
from fornecedor.models import Fornecedor


class ListCreateProdutoView(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    
    def perform_create(self, serializer):
        fornecedor_id = self.kwargs[self.lookup_url_kwarg]
        fornecedor = get_object_or_404(Fornecedor, id=fornecedor_id)
        serializer.save(fornecedor=fornecedor)
    
    
class ListUpdateDeleteProdutoByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Produto.objects.all()
    serializer_class = ProdutoSerializer
    lookup_url_kwarg = "produto_id"