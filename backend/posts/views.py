from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from .models import Post
from .serializers import PostListSerializer, PostDetailSerializer
from .pagination import PostPagination
from .permissions import IsAuthor

class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    pagination_class = PostPagination

class PostCreate(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer

class PostUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_classes = [IsAuthor]
