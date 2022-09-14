from .models import Item
from produto.serializers import ProdutoSerializer
from rest_framework.serializers import ModelSerializer
from produto.models import Produto

class ItemSerializer(ModelSerializer):
    produtos = ProdutoSerializer(read_only=True)
    
    class Meta:
        model= Item
        fields='__all__'
        read_only_fields = ["pedidos","produtos",'id']
        write_only_fields = ['pedidos','produtos','id']
        
    def create(self, validated_data):
        prod = Item.objects.create(**validated_data)
        return prod