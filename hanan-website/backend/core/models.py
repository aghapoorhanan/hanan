from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    company = models.CharField(max_length=100, blank=True)
    ROLE_CHOICES = (
        ('client', 'Client'),
        ('affiliate', 'Affiliate'),
        ('admin', 'Admin'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='client')

class Service(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_time_days = models.PositiveIntegerField()

class Portfolio(models.Model):
    CATEGORY_CHOICES = (
        ('photo', 'Photo'),
        ('teaser', 'Teaser'),
        ('logo', 'Logo'),
    )
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='portfolio/')
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    description = models.TextField(blank=True)

class Order(models.Model):
    STATUS_CHOICES = (
        ('new', 'New'),
        ('paid', 'Paid'),
        ('in_progress', 'In Progress'),
        ('delivered', 'Delivered'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True)
    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    company_name = models.CharField(max_length=100, blank=True)
    project_type = models.CharField(max_length=100)
    project_description = models.TextField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_date = models.DateField()
    file_upload = models.FileField(upload_to='orders/', blank=True, null=True)
    contact_method = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    payment_id = models.CharField(max_length=100, blank=True)

class Product(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    preview_image = models.ImageField(upload_to='products/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    file_url = models.FileField(upload_to='products/files/')
    category = models.CharField(max_length=50)
    tags = models.CharField(max_length=200)
    license_type = models.CharField(max_length=50)
    download_limit = models.PositiveIntegerField(default=1)

class AdSlot(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)

class Banner(models.Model):
    adslot = models.ForeignKey(AdSlot, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='banners/')
    link = models.URLField()
    start_date = models.DateField()
    end_date = models.DateField()
    impressions = models.PositiveIntegerField(default=0)
    clicks = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=20, default='active')

class Affiliate(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=20, unique=True)
    payout_method = models.CharField(max_length=100)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    clicks = models.PositiveIntegerField(default=0)
    conversions = models.PositiveIntegerField(default=0)

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    cover_image = models.ImageField(upload_to='blog/')
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    tags = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    meta_description = models.CharField(max_length=300)
