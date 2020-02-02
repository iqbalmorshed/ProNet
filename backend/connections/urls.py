from django.urls import path
from .views import FolloweeList, FollowerList, FollweeFollowerList, ConnectionCreate, ConnectionDelete

urlpatterns = [
    path('my-followees/', FolloweeList.as_view(),),
    path('my-followers/', FollowerList.as_view(),),
    path('list/<str:username>/', FollweeFollowerList.as_view()),
    path('follow/', ConnectionCreate.as_view(),),
    path('unfollow/<str:followee>/', ConnectionDelete.as_view()),
]
