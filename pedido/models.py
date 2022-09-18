from django.db import models

class Pedido(models.Model):
    id = models.AutoField(primary_key=True)
    data_hora = models.DateTimeField((), auto_now=True)
    nota_fiscal = models.CharField(max_length=255)
    valor_frete = models.DecimalField(max_digits=10, decimal_places=2)
    desconto = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    valor_total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    transportadora = models.ForeignKey("transportadora.Transportadora", on_delete=models.CASCADE, related_name="pedidos")