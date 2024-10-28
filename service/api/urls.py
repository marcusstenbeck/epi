from django.urls import include, path
from rest_framework import routers
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from . import views

router = routers.DefaultRouter()
router.register(r"tracks", views.TrackViewSet)
router.register(r"playlists", views.PlaylistViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('schema/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]
