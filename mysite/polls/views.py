# from django.shortcuts import render
from typing import Any
from django.db.models.query import QuerySet
from django.http import HttpResponse, HttpResponseRedirect
from .models import Question,Choice
from django.shortcuts import render,get_object_or_404
from django.urls import reverse
from django.db.models import F
from django.views import generic

# Create your views here.
# def index(request):
#     #interact with model
#     # latest 5 poll questions
#     latest_question_list = Question.objects.order_by("-pub_date")[:5]
#     #send back a response via template
#     context = {"latest_question_list": latest_question_list}
#     return render(request,"polls/index.html",context)
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = "latest_question_list"

    def get_queryset(self):
        return Question.objects.order_by('-pub_date')[:5]

# def detail(request,question_id):
#     question = get_object_or_404(Question,pk=question_id)
#     return render(request, "polls/detail.html",{"question":question})

class DetailView(generic.DetailView):
    model= Question
    template_name='polls/detail.html'
    

# def results(request,question_id):
#     question = get_object_or_404(Question,pk=question_id)
#     return render(request,"polls/results.html",{"question":question})

class ResultsView(generic.DetailView):
    model=Question
    template_name='polls/results.html'


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        # request.POST is a dictionary-like object that lets you access submitted data by key name -> choice's value
        selected_choice = question.choice_set.get(pk=request.POST["choice"])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(
            request,
            "polls/detail.html",
            {
                "question": question,
                "error_message": "You didn't select a choice.",
            },
        )
    else:
        # F() object represents the value of a model field (votes) -> increate vote+1
        selected_choice.votes = F("votes") + 1
        selected_choice.save()

        # use reverse() to avoid hardcode url: "/polls/3/results/"
        # where the 3 is the value of question.id. 
        # This redirected URL will then call the 'results' view to display the final page.
        return HttpResponseRedirect(reverse("polls:results", args=(question.id,)))

