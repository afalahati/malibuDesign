from django.shortcuts import render, get_object_or_404
from .models import Slideshow, Project, BlogPost, Employee



def home(request):
    slides = Slideshow.objects.all()
    projects = Project.objects.all()
    blog_posts = BlogPost.objects.order_by('-created_at')
    employees = Employee.objects.all()
    return render(request, 'main/home.html', {
        'slides': slides,
        'projects': projects,
        'blog_posts': blog_posts,
        'employees': employees,
    })



def blog_detail(request, id):
    post = get_object_or_404(BlogPost, id=id)
    return render(request, 'main/blog_detail.html', {
        'post': post,
    })