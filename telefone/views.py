from rest_framework import generics
from .models import Telefone
from .serializers import TelefoneSerializer
from django.shortcuts import get_object_or_404
from fornecedor.models import Fornecedor


class ListTelefoneView(generics.ListCreateAPIView):
    queryset= Telefone.objects.filter(ddd=21)
    serializer_class = TelefoneSerializer
    lookup_url_kwarg = "fornecedor_id"
    
    def perform_create(self, serializer):
        
        fornecedor_id = self.kwargs[self.lookup_url_kwarg]
        fornecedor = get_object_or_404(Fornecedor, id=fornecedor_id)
        serializer.save(fornecedor = fornecedor)
        
    def get_queryset(self):
        fornecedor_id = self.kwargs[self.lookup_url_kwarg]
        return Telefone.objects.filter(fornecedor_id=fornecedor_id)
    
    
    
class UpdateTelefoneByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Telefone.objects.all()
    serializer_class = TelefoneSerializer
    lookup_url_kwarg= "telefone_id"
    
    
        