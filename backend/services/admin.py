from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'base_price', 'delivery_time_days')
    prepopulated_fields = { 'slug': ('title',) }
