from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
# Create your views here.

from .serializers import SummaryStatsSerializer


class SummaryStats(APIView):

    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, format=None):

        serializer = SummaryStatsSerializer(
            request.data, context={'request': request})
        return Response(serializer.data)
