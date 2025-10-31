from django.db import models


class AdSlot(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} ({self.position})"


class Banner(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('active', 'Active'),
        ('paused', 'Paused'),
        ('ended', 'Ended'),
    )

    adslot = models.ForeignKey(AdSlot, on_delete=models.CASCADE, related_name='banners')
    media = models.FileField(upload_to='ads/banners/')
    link = models.URLField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    impressions = models.PositiveIntegerField(default=0)
    clicks = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return f"Banner for {self.adslot.name}"
