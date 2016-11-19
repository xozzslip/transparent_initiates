from django.db import models
from django.contrib.auth.models import User


class Initiative(models.Model):
    description = models.TextField(default="")
    name = models.CharField(max_length=300, default="")
    creator = models.ForeignKey(User)
    term = models.IntegerField(blank=True, null=True)
    theme = models.CharField(max_length=300, default="")
    city = models.CharField(max_length=300, default="")

    pic = models.ImageField(blank=True, null=True)
    departments = models.ManyToManyField('Departament', blank=True)
    progress = models.IntegerField(default=0)

    purposes_strateg = models.TextField(default="")
    purposes_oper = models.TextField(default="")
    meaningfull = models.TextField(default="")
    results = models.TextField(default="")
    structure = models.TextField(default="")
    states = models.TextField(default="")

    def __str__(self):
        return self.name


class DepartamentGroup(models.Model):
    name = models.CharField(max_length=300, blank=True)
    pic = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.name


class Departament(models.Model):
    name = models.CharField(max_length=300, blank=True)
    agents = models.ManyToManyField(User)
    group = models.ForeignKey(DepartamentGroup)

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


class Document(models.Model):
    target_department = models.ForeignKey(Departament)
    initiative = models.ForeignKey(Initiative)
    name = models.CharField(default="", max_length=500)
    text = models.TextField(default="")
