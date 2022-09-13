from .models import Produto
from fornecedor.serializers import FornecedorSerializer
from rest_framework.serializers import ModelSerializer


class ProdutoSerializer(ModelSerializer):
    fornecedor = FornecedorSerializer(read_only=True)
    
    class Meta:
        model= Produto
        fields='__all__'
        read_only_fields = ["fornecedor"]
        depth = 1