from rest_framework import serializers
from .models import Post
from django.utils.timezone import now

from comments.serializers import CommentListSerializer

post_detail_url = serializers.HyperlinkedIdentityField(view_name='post_detail')


class PostListSerializer(serializers.ModelSerializer):

    post_url = post_detail_url
    time_since_created = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    author = serializers.ReadOnlyField(source='author.username')
    
    class Meta:
        model = Post
        fields = ['id', 'post_url', 'title', 'body', 'author',
                  'created_at', 'time_since_created', 'updated_at', 'comments']

    def get_time_since_created(self, obj):
        return (now() - obj.created_at).days

    def get_comments(self, obj):
        serializer = CommentListSerializer(obj.comments(), many=True)
        return serializer.data



class PostDetailSerializer(serializers.ModelSerializer):

    post_url = post_detail_url
    time_since_created = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = ['id', 'post_url', 'title', 'body',
                  'author', 'created_at', 'time_since_created', 'updated_at', 'comments']

    def get_time_since_created(self, obj):
        return (now() - obj.created_at).days

    def get_comments(self, obj):
        serializer = CommentListSerializer(obj.comments(), many=True)
        return serializer.data
