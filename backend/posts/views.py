from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.

from .models import Post
from .serializers import PostListSerializer, PostDetailSerializer
from .pagination import PostPagination
from .permissions import IsAuthor


class PostList(generics.ListAPIView):
    #queryset = Post.objects.all()
    serializer_class = PostListSerializer
    pagination_class = PostPagination
    #filter_backends = [DjangoFilterBackend]
    #filterset_fields = ['author']

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Post.objects.all()
        author = self.request.query_params.get('author', None)
        if author is not None:
            queryset = queryset.filter(author__username=author)
        return queryset


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
