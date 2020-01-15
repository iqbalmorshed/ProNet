from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator

# Create your models here.
MAX_SECONDS_IN_DAY = 86400

class PostStat(models.Model):
    date = models.DateField()
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    time_spent = models.PositiveIntegerField(
        default=0, validators=[MaxValueValidator(MAX_SECONDS_IN_DAY)])  # seconds

    class Meta:
        unique_together = (("date", "user"),)
