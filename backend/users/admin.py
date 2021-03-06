from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser
# Register your models here.


class CustomUserAdmin(UserAdmin):

    model = CustomUser
    list_display = ['id', 'username', 'email',
                    'is_staff', 'date_joined', 'is_active']


admin.site.register(CustomUser, CustomUserAdmin)
