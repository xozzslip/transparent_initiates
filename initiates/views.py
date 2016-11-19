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


class InitiativeList(APIView):
    def get(self, request, format=None):
        initiative = Initiative.objects.all()
        serializer = InitiateSerializer(initiative, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = InitiateSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class InitiativeDetail(APIView):
    def get(self, request, pk, format=None):
        initiative = get_object_or_404(Initiative, pk=pk)
        serializer = InitiateSerializer(initiative, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        initiative = get_object_or_404(Initiative, pk=pk)
        serializer = InitiateSerializer(initiative, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        initiative = get_object_or_404(Initiative, pk=pk)
        initiative.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DepartamentList(APIView):
    def get(self, request, format=None):
        departament = Departament.objects.all()
        serializer = DepartamentSerializer(departament, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DepartamentSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DepartamentDetail(APIView):
    def get(self, request, pk, format=None):
        departament = get_object_or_404(Departament, pk=pk)
        serializer = DepartamentSerializer(departament, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        departament = get_object_or_404(Departament, pk=pk)
        serializer = DepartamentSerializer(departament, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        departament = get_object_or_404(Departament, pk=pk)
        departament.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class VerdictList(APIView):
    def get(self, request, format=None):
        verdict = Verdict.objects.all()
        serializer = VerdictSerializer(verdict, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VerdictSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerdictDetail(APIView):
    def get(self, request, pk, format=None):
        verdict = get_object_or_404(Verdict, pk=pk)
        serializer = VerdictSerializer(verdict, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        verdict = get_object_or_404(Verdict, pk=pk)
        serializer = VerdictSerializer(verdict, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        verdict = get_object_or_404(Verdict, pk=pk)
        verdict.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentList(APIView):
    def get(self, request, format=None):
        comment = Comment.objects.all()
        serializer = CommentSerializer(comment, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CommentSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentDetail(APIView):
    def get(self, request, pk, format=None):
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        comment = get_object_or_404(Comment, pk=pk)
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
