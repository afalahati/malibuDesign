from django.contrib import admin
from .models import Slideshow, Project, ProjectImage, BlogPost, Employee,ContactMessage

admin.site.register(Slideshow)
admin.site.register(Project)
admin.site.register(ProjectImage)
admin.site.register(BlogPost)
admin.site.register(Employee)


@admin.register(ContactMessage)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')

