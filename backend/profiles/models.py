from django.db import models
from django.contrib.auth import get_user_model
from annoying.fields import AutoOneToOneField
# Create your models here.


class BasicInfo(models.Model):
    user = AutoOneToOneField(
        get_user_model(), on_delete=models.CASCADE, related_name='basic_info')
    intro_quote = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.intro_quote


class Address(models.Model):
    user = AutoOneToOneField(get_user_model(), on_delete=models.CASCADE)
    city = models.CharField(max_length=30, blank=True)
    country = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.city+', '+self.country


class Interest(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    topic = models.CharField(max_length=30, blank=True)
