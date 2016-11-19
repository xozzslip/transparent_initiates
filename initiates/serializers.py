from django.contrib.auth.models import User, Group
from rest_framework import serializers
from initiates.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        depeth = 10
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class InitiativeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Initiative
        fields = ('id', 'url', 'description', 'name', 'creator', 'term', 'theme', 'city', 'pic',
                  'departments', 'progress', 'meaningfull', 'results', 'structure', 'states')


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
        fields = ('text', 'creator', 'initiative')


class DepartamentGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DepartamentGroup
        fields = ('name', )


class LoginSerializer(serializers.Serializer):
    login = serializers.CharField(max_length=200)
    password = serializers.CharField(max_length=200)


class DocumentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Document
        fields = ('name', 'target_department', 'initiative', 'text')
