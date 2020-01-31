from django.contrib import admin
from .models import BasicInfo, Address, Interest
# Register your models here.

my_models = [BasicInfo, Address, Interest]
admin.site.register(my_models)
