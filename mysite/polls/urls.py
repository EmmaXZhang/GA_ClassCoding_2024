from django.urls import path

# from current folder import views
from . import views

# define url pattern
# http://localhost:8000/polls/
# the link is called "index"

app_name = "polls"

urlpatterns =[
    # localhost:8000/polls/  -> define on entire url file
    path("",views.IndexView.as_view(), name="index"),

    # localhost:8000/polls/5/
    path("<int:pk>/",views.DetailView.as_view(), name="detail"),

    # localhost:8000/polls/5/results 
    path("<int:pk>/results",views.ResultsView.as_view(), name="results"),

    # localhost:8000/polls/5/vote/
    path("<int:question_id>/vote",views.vote, name="vote"),
]

