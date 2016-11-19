from django.db import models


class Initiate(models.Model):
    description = models.TextField(blank=True)
