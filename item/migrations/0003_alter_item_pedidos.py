# Generated by Django 4.1.1 on 2022-09-14 22:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pedido', '0001_initial'),
        ('item', '0002_alter_item_pedidos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='pedidos',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='all_itens', to='pedido.pedido'),
        ),
    ]
