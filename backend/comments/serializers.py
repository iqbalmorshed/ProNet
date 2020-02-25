from rest_framework import serializers
from .models import Comment

# author_username = serializers.CharField(
#     source='author.username', read_only=True)

author_username = serializers.ReadOnlyField(source='author.username')


class ReplyListSerilizer(serializers.ModelSerializer):
    author = author_username

    class Meta:
        model = Comment
        fields = ['id', 'parent',
                  'body', 'author', 'created_at', 'updated_at']


class CommentListSerializer(serializers.ModelSerializer):

    author = author_username
    #item_url = detail_url
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['post', 'id', 'parent',
                  'body', 'author', 'created_at', 'updated_at', 'replies']

    def get_replies(self, obj):
        if obj.is_parent:
            return ReplyListSerilizer(obj.children(), many=True).data
        return None


class CommentCreateSerializer(serializers.ModelSerializer):

    author = author_username
    post = serializers.ReadOnlyField(source='post.id')

    class Meta:
        model = Comment
        fields = ['post', 'id', 'parent',
                  'body', 'author', 'created_at', 'updated_at']

    def validate_parent(self, value):
        """
        If it is a reply (ie. parent is not null),
            then check whether parent is a comment of the post 
        """

        if value is not None:
            if value.post.id != self.context['post_id']:
                raise serializers.ValidationError(
                    "A parent comment of a reply must be from the same post")
            if value.parent is not None:
                raise serializers.ValidationError(
                    "Nested comment more than two layer not allowed")

        return value


class CommentDetailSerializer(serializers.ModelSerializer):

    author = author_username
    post = serializers.ReadOnlyField(source='post.title')
    #parent = serializers.ReadOnlyField(source='parent.id')

    class Meta:
        model = Comment
        fields = ['post', 'id', 'parent',
                  'body', 'author', 'created_at', 'updated_at']
