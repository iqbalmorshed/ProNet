from django.urls import path
from .views import PostList, PostDetail, PostCreate, PostUpdateDelete

urlpatterns = [
    path('', PostList.as_view(), name='post_list'),
    path('create/', PostCreate.as_view(), name='post_create'),
    path('<int:pk>/modify/', PostUpdateDelete.as_view(), name='post_modify'),
    path('<int:pk>/', PostDetail.as_view(), name='post_detail'),

]
