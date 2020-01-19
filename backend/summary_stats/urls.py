from django.urls import path
from .views import SummaryStats

urlpatterns = [
    path('', SummaryStats.as_view(), name='summary_stat'),
]
