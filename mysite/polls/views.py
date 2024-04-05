# from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    #interact with model
    #send back a response
    return HttpResponse("hellow world.")


def detail(request,question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request,question_id):
    response = "you're looking at the results of question %s"
    return HttpResponse(response % question_id)

def vote(requset,question_id):
    return HttpResponse("You're voting on question %s." % question_id)

