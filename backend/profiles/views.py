from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model

from .models import BasicInfo, Address
from .serializers import ProfileSerializer
from .permissions import IsUserOrReadOnly
# Create your views here.

# class ProfileCreate(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = ProfileSerializer


def get_user_from_url(username):
    # username = self.kwargs['username']
    # print("username :", username)
    return get_user_model().objects.get(username=username)


# class ProfileRetrieve(APIView):
#     permission_classes = [permissions.IsAuthenticated]
#     def get(self, request, username, format=None):

#         user = get_user_from_url(username)
#         serializer = ProfileSerializer({
#             "basic_profile": BasicInfo.objects.get(user=user),
#             "address": Address.objects.get(user=user),
#         })
#         return Response(serializer.data)


#     def post(self, request, username, format=None):
#         serializer = ProfileSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileRetrieve(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated, IsUserOrReadOnly]
    serializer_class = ProfileSerializer
    queryset = get_user_model().objects.all()
    lookup_field = 'username'
    lookup_url_kwarg = 'username'

    # def retrieve(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     print("==>instance:", instance)
    #     serializer = self.get_serializer(instance)
    #     print("==>serializer.data", serializer.data)
    #     return Response(serializer.data)
