from .models import Telefone
from fornecedor.serializers import FornecedorSerializer
from rest_framework.serializers import ModelSerializer


class TelefoneSerializer(ModelSerializer):
    fornecedor = FornecedorSerializer(read_only=True)
    
    class Meta:
        model= Telefone
        fields='__all__'
        read_only_fields = ["fornecedor"]
        depth = 1