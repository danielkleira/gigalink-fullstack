from django.db import models

class Emails(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255)
    referencia = models.CharField(max_length=255)
    fornecedor = models.ForeignKey("fornecedor.Fornecedor", on_delete=models.CASCADE, related_name="email")
