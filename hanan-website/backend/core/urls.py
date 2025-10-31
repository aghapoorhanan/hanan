from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'portfolio', PortfolioViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'products', ProductViewSet)
router.register(r'adslots', AdSlotViewSet)
router.register(r'banners', BannerViewSet)
router.register(r'affiliates', AffiliateViewSet)
router.register(r'blog', BlogPostViewSet)

urlpatterns = router.urls
