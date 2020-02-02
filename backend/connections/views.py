from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.response import Response

from .models import Connection
from .serializers import (
    FolloweeSerializer,
    FollowerSerializer,
    FolloweeFollowerSerializer,
    ConnectionSerializer,
)

# Create your views here.


class FolloweeList(generics.ListAPIView):
    serializer_class = FolloweeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Connection.objects.filter(follower=self.request.user)


class FollowerList(generics.ListAPIView):
    serializer_class = FollowerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Connection.objects.filter(followee=self.request.user)


class FollweeFollowerList(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FolloweeFollowerSerializer
    queryset = get_user_model().objects.all()
    lookup_field = 'username'
    lookup_url_kwarg = 'username'


class ConnectionCreate(generics.CreateAPIView):
    queryset = Connection.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ConnectionSerializer

    def get_serializer_context(self):
        return {
            "request": self.request,
        }

    def perform_create(self, serializer):
        serializer.save(follower=self.request.user)


class ConnectionDelete(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ConnectionSerializer
    lookup_field = 'followee__username'
    lookup_url_kwarg = 'followee'

    def get_queryset(self):
        return Connection.objects.filter(follower=self.request.user)
