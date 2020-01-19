from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from posts.models import Post
from comments.models import Comment


class SummaryStatsSerializer(serializers.Serializer):
    total_posts_made = serializers.SerializerMethodField()
    total_comments_made = serializers.SerializerMethodField()

    def get_total_posts_made(self, obj):
        user = self.context['request'].user
        return Post.objects.filter(author=user).count()

    def get_total_comments_made(self, obj):
        user = self.context['request'].user
        return Comment.objects.filter(author=user).count()
