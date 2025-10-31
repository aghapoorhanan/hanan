from django.http import JsonResponse

def payment_request(request):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)

def payment_verify(request):
    return JsonResponse({'detail': 'Not implemented yet'}, status=501)
