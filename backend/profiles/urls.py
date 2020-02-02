from django.urls import path
from .views import ProfileRetrieve

urlpatterns = [
    path('<str:username>/', ProfileRetrieve.as_view(),
         name='profile_detail'),
]
