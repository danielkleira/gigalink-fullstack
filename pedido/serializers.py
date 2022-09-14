from .models import Pedido
from rest_framework.serializers import ModelSerializer
from transportadora.serializers import TransportadoraSerializer
from item.serializers import ItemSerializer
from item.models import Item

class PedidoSerializer(ModelSerializer):
    
    transportadora = TransportadoraSerializer(read_only=True)
    item= ItemSerializer(read_only=True)
    
    class Meta:
        model= Pedido
        fields='__all__'
        extra_kwargs={'valor_frete':{'min_value':0},
                      'desconto':{'min_value':0},
                      'valor_total':{'min_value':0}}
    