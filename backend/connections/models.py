from django.db import models
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

# Create your models here.


class Connection(models.Model):
    follower = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='my_followee_set')
    followee = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='my_follower_set')
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        unique_together = (("follower", "followee"),)

    def clean(self, *args, **kwargs):
        if self.follower == self.followee:
            raise ValidationError(_('follower and followee can not be same'))
        super().clean(*args, **kwargs)

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
