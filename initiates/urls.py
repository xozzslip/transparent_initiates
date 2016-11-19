from django.conf.urls import url, include
from rest_framework import routers
from initiates import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^initiatives/$', views.InitiativeList.as_view()),
    url(r'^initiative/(?P<pk>[0-9]+)/$', views.InitiativeDetail.as_view()),
    url(r'^departaments/$', views.DepartamentList.as_view()),
    url(r'^departament/(?P<pk>[0-9]+)/$', views.DepartamentDetail.as_view()),
    url(r'^verdicts/$', views.VerdictList.as_view()),
    url(r'^verdict/(?P<pk>[0-9]+)/$', views.VerdictDetail.as_view()),
    url(r'^comments/$', views.CommentList.as_view()),
    url(r'^comment/(?P<pk>[0-9]+)/$', views.CommentDetail.as_view()),
    url(r'^', include(router.urls)),
]
