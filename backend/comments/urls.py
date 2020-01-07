from django.urls import path
from .views import CommentList, CommentCreate, CommentDetail, CommentUpdateDelete

urlpatterns = [
    path('<int:post_id>/', CommentList.as_view(), name='comment_list'),
    path('<int:post_id>/create/', CommentCreate.as_view(), name='comment_create'),
    path('detail/<int:comment_id>/',
         CommentDetail.as_view(), name='comment_detail'),
    path('detail/<int:comment_id>/modify/',
         CommentUpdateDelete.as_view(), name='comment_modify'),

]
