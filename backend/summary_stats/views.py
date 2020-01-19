from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

from .serializers import SummaryStatsSerializer


class SummaryStats(APIView):

    def get(self, request, format=None):

        serializer = SummaryStatsSerializer(
            request.data, context={'request': request})
        return Response(serializer.data)
