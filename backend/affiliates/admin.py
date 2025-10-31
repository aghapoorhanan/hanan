from django.contrib import admin
from .models import Affiliate

@admin.register(Affiliate)
class AffiliateAdmin(admin.ModelAdmin):
    list_display = ('user', 'code', 'balance', 'clicks', 'conversions')
