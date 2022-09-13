from rest_framework import generics
from .models import Transportadora
from .serializers import TransportadoraSerializer
from pedido.models import Pedido


class ListCreateTransportadoraView(generics.ListCreateAPIView):
    queryset= Transportadora.objects.all()
    serializer_class = TransportadoraSerializer
    
    
class ListUpdateDeleteTransportadoraByID(generics.RetrieveUpdateDestroyAPIView):
    queryset= Transportadora.objects.all()
    serializer_class = TransportadoraSerializer
    lookup_url_kwarg = "transportadora_id"