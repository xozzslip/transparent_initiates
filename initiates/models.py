from django.db import models
from django.contrib.auth.models import User


class Initiative(models.Model):
    description = models.TextField(blank=True)
    name = models.CharField(max_length=300, default="")
    creator = models.ForeignKey(User)
    term = models.DateTimeField(blank=True, null=True)
    customer = models.CharField(max_length=300, default="")
    city = models.CharField(max_length=300, default="")

    def __str__(self):
        return self.name


class Departament(models.Model):
    name = models.CharField(max_length=300, blank=True)
    agents = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class Verdict(models.Model):
    text = models.TextField(blank=True)
    mark = models.IntegerField(default=0)
    initiative = models.ForeignKey(Initiative)
    department = models.ForeignKey(Departament)

    def __str__(self):
        return self.text


class Comment(models.Model):
    text = models.TextField(blank=True)
    creator = models.ForeignKey(User)
    initiative = models.ForeignKey(Initiative)

    def __str__(self):
        return self.text
