from django.http import JsonResponse

def products_list(request):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)

def product_detail(request, slug):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)
