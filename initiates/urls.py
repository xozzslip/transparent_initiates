from django.conf.urls import url, include
from rest_framework import routers
from initiates import views
from django.conf.urls.static import static
from mysite import settings

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'initiatives', views.InitiativeViewSet)
router.register(r'departaments', views.DepartamentViewSet)
router.register(r'verdicts', views.VerdictViewSet)
router.register(r'comments', views.CommentViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^', views.IndexView.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
