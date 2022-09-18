from django.db import models

class Telefone(models.Model):
    id = models.AutoField(primary_key=True)
    ddd = models.CharField(max_length=255)
    numero = models.CharField(max_length=255)
    referencia = models.CharField(max_length=255)
    fornecedor = models.ForeignKey("fornecedor.Fornecedor", on_delete=models.CASCADE, related_name="telefone_fornecedor")
