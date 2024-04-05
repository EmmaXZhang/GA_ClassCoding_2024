from django.urls import path

# from current folder import views
from . import views

# define url pattern
# http://localhost:8000/polls/
# the link is called "index"

urlpatterns =[
    # localhost:8000/polls/  -> define on entire url file
    path("",views.index, name="index"),

    # localhost:8000/polls/5/
    path("<int:question_id>/",views.detail, name="detail"),

    # localhost:8000/polls/5/results 
    path("<int:question_id>/results",views.results, name="results"),

    # localhost:8000/polls/5/vote/
    path("<int:question_id>/vote",views.vote, name="vote"),
]

