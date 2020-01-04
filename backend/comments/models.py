from django.db import models
from django.contrib.auth import get_user_model

from posts.models import Post
# Create your models here.


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    body = models.CharField(max_length=500)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    parent = models.ForeignKey(
        "self", null=True, blank=True, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.body[:20]

    class Meta:
        ordering = ['created_at']

    # def save(self, *args, **kwargs):
    #     if self.parent is not None and self.parent.parent is not None:
    #         print("Nested comment more than two layer not allowed")
    #         return
    #     else:
    #         super().save(*args, **kwargs)
    
    def children(self):  # replies
        return Comment.objects.filter(parent=self)

    @property
    def is_parent(self):
        return self.parent is None