from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    base_price = models.DecimalField(max_digits=12, decimal_places=2)
    delivery_time_days = models.PositiveIntegerField(default=7)
    samples = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.title
