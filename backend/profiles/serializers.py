from rest_framework import serializers
from django.contrib.auth import get_user_model

from drf_writable_nested.serializers import WritableNestedModelSerializer
from .models import BasicInfo, Address, Interest


class BasicInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = BasicInfo
        fields = ['intro_quote']


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = ['city', 'country']

# using nested objects:
# https://www.django-rest-framework.org/api-guide/serializers/#dealing-with-nested-objects


class ProfileSerializer(serializers.ModelSerializer):

    # BE CAREFUL: serializer field name has to be same as related name
    # of the model in Meta Class. For example: BasicInfo Model is
    # related to get_user_model() by related name basic_info. Therefore, if
    # field uses other name like: basicInfo, basic-info etc. it won't work.
    # lesson learned in the hard way :(

    basic_info = BasicInfoSerializer(required=False)
    address = AddressSerializer(required=False)

    class Meta:
        model = get_user_model()
        fields = ['username', 'email',
                  'address', 'basic_info']
        read_only_fields = ['username']

    def update(self, user_object, validated_data):
        user_object.email = validated_data['email']
        user_object.save()

        basic_info_data = validated_data.pop('basic_info', None)

        if basic_info_data:
            basic_info_obj = BasicInfo.objects.get(user=user_object)
            for key, value in basic_info_data.items():
                setattr(basic_info_obj, key, value)

        basic_info_obj.save()

        address_data = validated_data.pop('address', None)

        if address_data:
            address_obj = Address.objects.get(user=user_object)

            for key, value in address_data.items():
                setattr(address_obj, key, value)

        address_obj.save()
        return user_object
