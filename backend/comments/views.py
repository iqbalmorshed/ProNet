from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from .models import Comment
from .serializers import CommentListSerializer, CommentCreateSerializer, CommentDetailSerializer
from posts.models import Post
from posts.permissions import IsAuthor


class CommentList(generics.ListAPIView):
    serializer_class = CommentListSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return Comment.objects.filter(post__id=post_id).filter(parent__isnull=True)


class CommentCreate(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        post_id = self.kwargs['post_id']
        serializer.save(post=Post.objects.get(
            id=post_id), author=self.request.user)

    def get_serializer_context(self):
        return {'post_id': self.kwargs.get('post_id')}


class CommentDetail(generics.RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer
    lookup_url_kwarg = 'comment_id'

    # def get_queryset(self):
    #     comment_id = self.kwargs['comment_id']
    #     return Comment.objects.get(id=comment_id)


class CommentUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer
    permission_classes = [IsAuthor]
    lookup_url_kwarg = 'comment_id'
