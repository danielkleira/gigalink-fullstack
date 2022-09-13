from .models import Item
from produto.serializers import ProdutoSerializer
from pedido.serializers import PedidoSerializer
from rest_framework.serializers import ModelSerializer


class ItemSerializer(ModelSerializer):
    produtos = ProdutoSerializer(read_only=True)
    pedidos = PedidoSerializer(read_only=True)
    
    class Meta:
        model= Item
        fields='__all__'
        read_only_fields = ["produtos","pedidos"]