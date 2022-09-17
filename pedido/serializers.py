from .models import Pedido
from rest_framework.serializers import ModelSerializer
from transportadora.serializers import TransportadoraSerializer
from item.serializers import ItemSerializer, ItemIDSerializer
from item.models import Item
from rest_framework import serializers
import ipdb

class PedidoSerializer(ModelSerializer):
    
    transportadora = TransportadoraSerializer(read_only=True)
    itens = ItemIDSerializer(many=True)
    class Meta:
        model= Pedido
        fields=['id','nota_fiscal','valor_frete','desconto','valor_total','transportadora','itens']
        
        extra_kwargs={'valor_frete':{'min_value':0},
                      'desconto':{'min_value':0},
                      'valor_total':{'min_value':0}}
        
    def create(self, validated_data):
        item_data= validated_data.pop('itens')
        desconto =validated_data.pop('desconto')
        valor_frete= validated_data.pop('valor_frete')
        valor_total=0
        
        for item in item_data:
            numeros= list(item.items())
            instance_item = Item.objects.filter(id=numeros[0][1].pk)
            valores =list(instance_item)
            valor_total += (float(valores[0].valor) * valores[0].quantidade)
        
        valor_total = valor_total - float(desconto) + float(valor_frete)
        pedido_criado = Pedido.objects.create(**validated_data, valor_total=valor_total, valor_frete=valor_frete, desconto=desconto)
        
        for item in item_data:  
            numeros= list(item.items())
            instance_item = Item.objects.filter(id=numeros[0][1].pk)
            instance_item.update(pedidos_id = pedido_criado.id)
            
        return pedido_criado
    
    
    
    def update(self,instance, validated_data):
        instance.nota_fiscal = validated_data.get('nota_fiscal', instance.nota_fiscal)       
        item_data= validated_data.pop('itens')
        
        valor_total=0      
        
        for item in item_data:
            numeros= list(item.items())
            instance_item = Item.objects.filter(id=numeros[0][1].pk)
            valores =list(instance_item)
            valor_total += (float(valores[0].valor) * valores[0].quantidade) 
        desconto = validated_data.pop('desconto')
        valor_frete= validated_data.pop('valor_frete')
        valor_total =valor_total - float(desconto) + float(valor_frete)
        instance.valor_frete= validated_data.get('valor_frete', instance.valor_frete) 
        instance.desconto = validated_data.get('desconto', instance.desconto)
        instance.valor_total=valor_total    
      
        for item in item_data:  
            numeros= list(item.items())
            instance_item = Item.objects.filter(id=numeros[0][1].pk)
            instance_item.update(pedidos_id = instance.id)
        
        instance.save()
        return instance