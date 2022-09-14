from .models import Pedido
from rest_framework.serializers import ModelSerializer
from transportadora.serializers import TransportadoraSerializer
from item.serializers import ItemSerializer, ItemIDSerializer
from item.models import Item
from rest_framework import serializers
import ipdb

class PedidoSerializer(ModelSerializer):
    
    transportadora = TransportadoraSerializer(read_only=True)
    itens = ItemIDSerializer(read_only=True, many=True)
    class Meta:
        model= Pedido
        fields=['id','nota_fiscal','valor_frete','desconto','valor_total','itens','transportadora']
        
        extra_kwargs={'valor_frete':{'min_value':0},
                      'desconto':{'min_value':0},
                      'valor_total':{'min_value':0}}
        
    def create(self, validated_data):
        #item_data= validated_data.pop('itens')
        pedido_criado = Pedido.objects.create(**validated_data)
        
        """ for item in item_data:  
            instance_item = Item.objects.filter(id=2).first()
            instance_item.pedidos_id=='id' 
            
            instance_item.save() """
        
        return pedido_criado