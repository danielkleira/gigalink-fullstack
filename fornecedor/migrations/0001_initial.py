# Generated by Django 4.1.1 on 2022-09-13 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fornecedor',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=255)),
                ('descricao', models.CharField(max_length=255)),
                ('cidade', models.CharField(max_length=255)),
                ('endereco', models.CharField(max_length=255)),
                ('bairro', models.CharField(max_length=255)),
                ('numero', models.IntegerField()),
            ],
        ),
    ]
