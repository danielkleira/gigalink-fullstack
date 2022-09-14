from django.db import models

class Produto(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    fornecedor = models.ForeignKey("fornecedor.Fornecedor", on_delete=models.CASCADE, related_name="produtos")
