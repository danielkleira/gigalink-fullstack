from rest_framework import generics
from .models import Telefone
from .serializers import TelefoneSerializer
from fornecedor.models import Fornecedor


class ListTelefoneView(generics.ListAPIView):
    queryset= Telefone.objects.all()
    serializer_class = TelefoneSerializer
    
    def perform_create(self, serializer):
        fornecedor_id = self.kwargs[self.lookup_url_kwarg]
        fornecedor = get_object_or_404(Fornecedor, id=fornecedor_id)
        serializer.save(fornecedor=fornecedor)
    
    
class UpdateTelefoneByID(generics.UpdateAPIView):
    queryset= Telefone.objects.all()
    serializer_class = TelefoneSerializer
    lookup_url_kwarg = "telefone_id"