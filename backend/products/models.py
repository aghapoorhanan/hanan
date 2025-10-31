from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    preview_image = models.ImageField(upload_to='products/previews/', blank=True, null=True)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    file_url = models.URLField()
    category = models.CharField(max_length=100, blank=True)
    tags = models.JSONField(default=list, blank=True)
    license_type = models.CharField(max_length=100, default='standard')
    downloads_allowed = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.title


class Coupon(models.Model):
    code = models.CharField(max_length=50, unique=True)
    discount_percent = models.PositiveIntegerField(default=0)
    active = models.BooleanField(default=True)
    valid_from = models.DateTimeField(null=True, blank=True)
    valid_to = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.code
