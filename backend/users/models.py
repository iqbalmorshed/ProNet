from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    date_of_birth = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.username
