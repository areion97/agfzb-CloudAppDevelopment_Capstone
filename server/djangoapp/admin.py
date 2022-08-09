
from .models import CarModel, CarMake 
from django.contrib import admin

class CarModelInline(admin.StackedInline):
    model = CarModel
    extra = 5


class CarModelAdmin(admin.ModelAdmin):
    list_display = ['name']

class CarMakeAdmin(admin.ModelAdmin):
    inlines = [CarModelInline]
    list_display = ['name']



admin.site.register(CarModel, CarModelAdmin)
admin.site.register(CarMake, CarMakeAdmin)
