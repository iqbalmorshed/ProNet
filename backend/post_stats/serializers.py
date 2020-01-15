from rest_framework import serializers
from .models import PostStat


class PostStatSerializer(serializers.ModelSerializer):

    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = PostStat
        fields = '__all__'
