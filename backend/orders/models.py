from django.db import models
from django.conf import settings
from services.models import Service


class Order(models.Model):
    STATUS_CHOICES = (
        ('new', 'New'),
        ('paid', 'Paid'),
        ('in_progress', 'In Progress'),
        ('delivered', 'Delivered'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True)
    full_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=30)
    email = models.EmailField()
    company_name = models.CharField(max_length=150, blank=True)
    project_type = models.CharField(max_length=150)
    project_description = models.TextField()
    budget = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    delivery_date = models.DateField(null=True, blank=True)
    file_upload = models.FileField(upload_to='orders/files/', null=True, blank=True)
    contact_method = models.CharField(max_length=50, blank=True)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    total_price = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    payment_id = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} - {self.full_name}"
