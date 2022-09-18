from .models import Emails
from fornecedor.serializers import FornecedorSerializer
from rest_framework.serializers import ModelSerializer


class EmailSerializer(ModelSerializer):
    fornecedor = FornecedorSerializer(read_only=True)
    
    class Meta:
        model= Emails
        fields='__all__'
        read_only_fields = ["fornecedor"]