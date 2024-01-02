from rest_framework import serializers
from .models import ClimateInfo

class ClimateInfoSerializer(serializers.Modelserializer):
    class Meta:
        model = ClimateInfo
        files = ['id', 'name', 'description']