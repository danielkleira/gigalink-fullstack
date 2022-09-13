from django.db import models

class Transportadora(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField( max_length=255)
    
