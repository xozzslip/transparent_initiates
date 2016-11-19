from django.contrib.auth.models import User, Group
from rest_framework import serializers
from initiates.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        depeth = 1
        exclude = ('password',)


class InitiativeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Initiative
        fields = ('id', 'url', 'description', 'name', 'creator', 'term', 'customer', 'city', 'pic',
                  'departments', 'progress')
        depth = 1


class DepartamentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Departament
        fields = ('name', 'agents', 'id')
        depth = 10  


class VerdictSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Verdict
        fields = ('text', 'mark', 'initiative', 'department', 'id')
        depth = 10


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('text', 'creator', 'initiative', 'id')
        depth = 10


class DepartamentGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DepartamentGroup
        fields = ('name')
        depth = 10
