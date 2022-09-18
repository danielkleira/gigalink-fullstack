from .models import Item
from produto.serializers import ProdutoSerializer
from rest_framework.serializers import ModelSerializer
from produto.models import Produto
from rest_framework import serializers

class ItemSerializer(ModelSerializer):
    produtos = ProdutoSerializer(read_only=True)
    
    class Meta:
        model= Item
        fields='__all__'
        read_only_fields = ["produtos,pedidos"]
        
    def create(self, validated_data):
        prod = Item.objects.create(**validated_data)
        return prod
    
    
class ItemIDSerializer(serializers.Serializer):
    id =serializers.PrimaryKeyRelatedField(queryset=Item.objects.all())
    """ class Meta:
        model= Item
        fields=['id'] """