from django.db import models

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    quantidade = models.FloatField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    produtos = models.ForeignKey("produto.Produto", on_delete=models.CASCADE, related_name="itens")
    pedidos = models.ForeignKey("pedido.Pedido", on_delete=models.CASCADE, related_name="itens", null=True)