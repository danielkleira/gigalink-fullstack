# Generated by Django 4.1.1 on 2022-09-13 03:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('fornecedor', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Telefone',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('ddd', models.CharField(max_length=255)),
                ('numero', models.CharField(max_length=255)),
                ('referencia', models.CharField(max_length=255)),
                ('fornecedor', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='telefone', to='fornecedor.fornecedor')),
            ],
        ),
    ]
