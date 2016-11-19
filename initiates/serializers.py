from django.contrib.auth.models import User, Group
from rest_framework import serializers
from initiates.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups', 'id')


class InitiativeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Initiative
        fields = ('id', 'url', 'description', 'name', 'creator', 'term', 'customer', 'city', 'pic')


class DepartamentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Departament
        fields = ('name', 'agents', 'id')


class VerdictSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Verdict
        fields = ('text', 'mark', 'initiative', 'department', 'id')


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('text', 'creator', 'initiative', 'id')
