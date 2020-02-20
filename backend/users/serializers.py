from rest_framework import serializers
from . import models


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('email', 'username', 'date_joined' )
