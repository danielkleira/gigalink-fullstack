from .models import Fornecedor
from rest_framework.serializers import ModelSerializer


class FornecedorSerializer(ModelSerializer):
    
    class Meta:
        model= Fornecedor
        fields='__all__'