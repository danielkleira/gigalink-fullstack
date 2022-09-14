from .models import Telefone
from rest_framework.serializers import ModelSerializer


class TelefoneSerializer(ModelSerializer):
    
    class Meta:
        model= Telefone
        fields='__all__'
        read_only_fields = ["fornecedor"]
        