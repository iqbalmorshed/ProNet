# Generated by Django 3.0.1 on 2020-01-31 13:09

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('connections', '0002_auto_20200131_1259'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='connection',
            unique_together={('follower', 'followee')},
        ),
    ]
