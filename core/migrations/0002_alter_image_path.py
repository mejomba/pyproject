# Generated by Django 4.2.7 on 2024-08-09 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='path',
            field=models.ImageField(blank=True, null=True, upload_to='media/image'),
        ),
    ]
