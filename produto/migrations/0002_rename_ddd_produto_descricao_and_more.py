# Generated by Django 4.1.1 on 2022-09-14 03:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('produto', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='produto',
            old_name='ddd',
            new_name='descricao',
        ),
        migrations.RenameField(
            model_name='produto',
            old_name='numero',
            new_name='nome',
        ),
        migrations.RemoveField(
            model_name='produto',
            name='referencia',
        ),
    ]
