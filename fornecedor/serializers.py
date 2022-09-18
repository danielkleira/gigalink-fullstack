from .models import Fornecedor
from rest_framework.serializers import ModelSerializer
from telefone.serializers import TelefoneSerializer
from rest_framework import serializers
from telefone.models import Telefone
import ipdb

class FornecedorSerializer(ModelSerializer):
    telefone = TelefoneSerializer(many=True, source='telefone_fornecedor')
    class Meta:
        model= Fornecedor
        fields='__all__'
        
    def create(self, validated_data):
        telefones = validated_data.pop('telefone_fornecedor')
        
        fornec = Fornecedor.objects.create(**validated_data)
        for item in telefones:
            Telefone.objects.create(fornecedor=fornec, **item)
        return fornec
        
        
        