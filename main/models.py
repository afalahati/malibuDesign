from django.db import models

from ckeditor.fields import RichTextField

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    main_image = models.ImageField(upload_to='projects/main_images/', blank=True, null=True)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey('main.Project', related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projects/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Image {self.id} of Project {self.project.title}"

class Slideshow(models.Model):
    image = models.ImageField(upload_to='slides/')
    description = models.TextField()

    def __str__(self):
        return f"Slide {self.id}"

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
   

class Employee(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='employees/')
    resume = models.TextField()

    def __str__(self):
        return self.name

