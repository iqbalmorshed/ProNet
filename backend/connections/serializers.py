from rest_framework import serializers
from .models import Connection
from django.contrib.auth import get_user_model

followee_username = serializers.ReadOnlyField(source='followee.username')
follower_username = serializers.ReadOnlyField(source='follower.username')


class FolloweeSerializer(serializers.ModelSerializer):

    followee = followee_username
    profile_url = serializers.HyperlinkedRelatedField(
        view_name='profile_detail', read_only=True, lookup_field='username', source='followee')
    since = serializers.ReadOnlyField(source='created_at.year')

    class Meta:
        model = Connection
        fields = ['followee', 'profile_url', 'since', ]


class FollowerSerializer(serializers.ModelSerializer):

    follower = follower_username
    profile_url = serializers.HyperlinkedRelatedField(
        view_name='profile_detail', read_only=True, lookup_field='username', source='follower')
    since = serializers.ReadOnlyField(source='created_at.year')

    class Meta:
        model = Connection
        fields = ['follower', 'profile_url', 'since', ]


class FolloweeFollowerSerializer(serializers.ModelSerializer):

    followees = FolloweeSerializer(many=True, source='my_followee_set')
    followers = FollowerSerializer(many=True, source='my_follower_set')

    class Meta:
        model = get_user_model()
        fields = ['username', 'followees', 'followers']


class FolloweeRelatedField(serializers.RelatedField):
    def display_value(self, instance):
        return instance

    def to_representation(self, value):
        return str(value)

    def to_internal_value(self, data):
        return get_user_model().objects.get(username=data)


class ConnectionSerializer(serializers.ModelSerializer):

    followee = FolloweeRelatedField(queryset=get_user_model().objects.all())
    follower = serializers.ReadOnlyField(source='follower.username')

    class Meta:
        model = Connection
        fields = ['follower', 'followee']
        #read_only_fields = ['follower', ]

    def validate(self, data):

        user_obj = self.context['request'].user
        """
        Check that follower and followee is not the same
        """
        if user_obj == data['followee']:
            raise serializers.ValidationError(
                "a user can not follow ownself")

        followees_of_user = [
            connection.followee for connection in Connection.objects.filter(follower=user_obj)]

        if data['followee'] in followees_of_user:
            raise serializers.ValidationError(
                f"{user_obj} is already following {data['followee']}")

        return data

    # def to_internal_value(self, data):
    #     print("data:", data)
    #     data = data.copy()

    #     followee_username = data['followee']

    #     if followee_username:
    #         try:
    #             followee_obj = get_user_model().objects.get(username=followee_username)
    #             followee_id = followee_obj.id
    #         except get_user_model().DoesNotExist:
    #             followee_id = None

    #         data['followee'] = followee_id

    #     return super(ConnectionSerializer, self).to_internal_value(data)
