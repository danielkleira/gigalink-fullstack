from rest_framework import generics
from .models import Fornecedor
from .serializers import FornecedorSerializer


class ListCreateFornecedorView(generics.ListCreateAPIView):
    queryset= Fornecedor.objects.all()
    serializer_class = FornecedorSerializer
    
    
    
class ListUpdateDeleteFornecedorByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Fornecedor.objects.all()
    serializer_class = FornecedorSerializer
    lookup_url_kwarg = "fornecedor_id"