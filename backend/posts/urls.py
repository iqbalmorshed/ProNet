from django.urls import path
from .views import PostList, PostDetail, PostCreate, PostUpdateDelete

urlpatterns = [
    path('posts/', PostList.as_view(), name='post_list'),
    path('posts/create/', PostCreate.as_view(), name='post_create'),
    path('posts/<int:pk>/modify/', PostUpdateDelete.as_view(), name='post_modify'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post_detail'),

]
