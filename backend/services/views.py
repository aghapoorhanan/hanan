from django.http import JsonResponse

def services_list(request):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)

def service_detail(request, slug):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)
