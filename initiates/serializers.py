from django.contrib.auth.models import User, Group
from rest_framework import serializers
from initiates.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class InitiateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Initiative
        fields = ('description', 'name', 'creator')


class DepartamentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Departament
        fields = ('name', 'agents')


class VerdictSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Verdict
        fields = ('text', 'mark', 'initiative', 'department')


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('text', 'creator', 'initiative')
