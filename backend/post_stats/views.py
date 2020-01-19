from .models import PostStat
from .serializers import PostStatSerializer
from rest_framework import generics, permissions
from .permissions import IsUser


class PostStatListCreate(generics.ListCreateAPIView):
    #queryset = PostStat.objects.filter(user=self.request.user)
    serializer_class = PostStatSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        date = self.request.query_params.get('date', None)
        #date = self.kwargs['date']
        print("date", date, "self.request.user", self.request.user)

        if date is not None:
            queryset = PostStat.objects.filter(user=self.request.user).filter(date=date)
            print("queryset :", queryset)
            return queryset
        return PostStat.objects.filter(user=self.request.user)


class PostStatDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    #queryset = PostStat.objects.all()
    serializer_class = PostStatSerializer
    permission_classes = [IsUser]

    def get_queryset(self):
        #print("date", date, "self.request.user", self.request.user)
        return PostStat.objects.filter(user=self.request.user)
