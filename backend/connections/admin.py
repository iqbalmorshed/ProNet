from django.contrib import admin
from .models import Connection
# Register your models here.


class ConnectionAdmin(admin.ModelAdmin):
    list_display = ('follower', 'followee', 'created_at')


admin.site.register(Connection, ConnectionAdmin)
