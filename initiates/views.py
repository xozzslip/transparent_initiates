from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import viewsets
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User, Group
from initiates.serializers import *
from rest_framework import generics

from initiates.models import *


class InitiativeViewSet(viewsets.ModelViewSet):
    queryset = Initiative.objects.all()
    serializer_class = InitiativeSerializer


class DepartamentViewSet(viewsets.ModelViewSet):
    queryset = Departament.objects.all()
    serializer_class = DepartamentSerializer


class VerdictViewSet(viewsets.ModelViewSet):
    queryset = Verdict.objects.all()
    serializer_class = VerdictSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
