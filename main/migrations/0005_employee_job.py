# Generated by Django 4.2.23 on 2025-06-24 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_contactmessage'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='job',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
