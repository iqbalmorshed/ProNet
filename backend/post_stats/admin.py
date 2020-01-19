from django.contrib import admin
from .models import PostStat
# Register your models here.


class PostStatAdmin(admin.ModelAdmin):
    list_display = ['id', 'date', 'user', 'elapsed_time']


admin.site.register(PostStat, PostStatAdmin)
