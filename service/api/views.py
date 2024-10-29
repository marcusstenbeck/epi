from rest_framework import permissions, viewsets, views, status
from rest_framework.response import Response

from . import models, serializers


class TrackViewSet(viewsets.ModelViewSet):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = models.Playlist.objects.all().order_by('id')
    serializer_class = serializers.PlaylistSerializer
    permission_classes = [permissions.AllowAny]

    def get_serializer_class(self):
        if self.action == 'retrieve':  # Use a different serializer for retrieving a single playlist
            return serializers.DetailedPlaylistSerializer
        return super().get_serializer_class()