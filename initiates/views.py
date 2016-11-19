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
from django.views.generic import TemplateView
from rest_framework.decorators import detail_route

from initiates.models import *


class InitiativeViewSet(viewsets.ModelViewSet):
    queryset = Initiative.objects.all()
    serializer_class = InitiativeSerializer

    def add_department_group(self, request, pk, depgroup_pk):
        initiative = self.get_object_or_404(pk)
        serializer = InitiativeSerializer(initiative)
        return Response(serializer.data)


class DepartamentViewSet(viewsets.ModelViewSet):
    queryset = Departament.objects.all()
    serializer_class = DepartamentSerializer


class VerdictViewSet(viewsets.ModelViewSet):
    queryset = Verdict.objects.all()
    serializer_class = VerdictSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def create(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            comment = Comment(creator=request.user)
            print(comment)
            comment.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class DepartamentGroupViewSet(viewsets.ModelViewSet):
    queryset = DepartamentGroup.objects.all()
    serializer_class = DepartamentGroupSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class IndexView(TemplateView):
    template_name = "static/index.html"


class LoginView(APIView):
    def post(self, request):
        return Response("kek")
