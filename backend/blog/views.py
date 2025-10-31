from django.http import JsonResponse

def blog_list(request):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)

def blog_detail(request, slug):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)
