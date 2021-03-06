# Generated by Django 3.0.1 on 2020-01-18 20:52

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PostStat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('last_update_time', models.TimeField()),
                ('isMounted', models.BooleanField(default=True)),
                ('elapsed_time', models.PositiveIntegerField(default=0, validators=[django.core.validators.MaxValueValidator(86400)])),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('date', 'user')},
            },
        ),
    ]
