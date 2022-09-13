from rest_framework import generics
from .models import Emails
from .serializers import EmailSerializer
from fornecedor.models import Fornecedor
from django.shortcuts import get_object_or_404


class ListCreateEmailView(generics.ListCreateAPIView):
    queryset= Emails.objects.all()
    serializer_class = EmailSerializer
    lookup_url_kwarg = "fornecedor_id"
    
    def perform_create(self, serializer):
        
        fornecedor_id = self.kwargs[self.lookup_url_kwarg]
        fornecedor = get_object_or_404(Fornecedor, id=fornecedor_id)
        serializer.save(fornecedor = fornecedor)
        
    
    
class ListUpdateDeleteEmailByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Emails.objects.all()
    serializer_class = EmailSerializer
    lookup_url_kwarg = "email_id"