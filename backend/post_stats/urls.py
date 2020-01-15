from django.urls import path
from .views import PostStatListCreate, PostStatDetailUpdateDelete

urlpatterns = [
    path('', PostStatListCreate.as_view(), name='post_stat_list_create'),
    path('<int:pk>/', PostStatDetailUpdateDelete.as_view(),
         name='post_stat_detail_update_delete'),
]
