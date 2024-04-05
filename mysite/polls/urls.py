from django.urls import path

# from current folder import views
from . import views

# define url pattern
# http://localhost:8000/polls/
# the link is called "index"

urlpatterns =[
    # localhost:8000/polls/  -> define on entire url file
    path("",views.index, name="index")
]

