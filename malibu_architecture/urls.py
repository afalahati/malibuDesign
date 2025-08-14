from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
# myproject/urls.py
from django.contrib import admin
from django.urls import path, include
from django.contrib.sitemaps.views import sitemap
from main.sitemaps import BlogPostSitemap
from django.views.generic import TemplateView

sitemaps_dict = {
    'blog': BlogPostSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps_dict}, name='sitemap'),
    path("robots.txt", TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),
]
# اضافه کردن این خط برای سرو فایل‌های رسانه‌ای

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    # فقط برای تست Render، می‌توان مسیر موقت با یک view ساخت
    from django.views.static import serve
    urlpatterns += [
        path('media/<path:path>/', serve, {'document_root': settings.MEDIA_ROOT}),
    ]