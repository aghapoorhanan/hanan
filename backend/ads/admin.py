from django.contrib import admin
from .models import AdSlot, Banner

@admin.register(AdSlot)
class AdSlotAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'size', 'price_per_day')

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ('adslot', 'status', 'start_date', 'end_date', 'impressions', 'clicks')
