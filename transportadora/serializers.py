from .models import Transportadora
from rest_framework.serializers import ModelSerializer


class TransportadoraSerializer(ModelSerializer):
    
    class Meta:
        model= Transportadora
        fields='__all__'