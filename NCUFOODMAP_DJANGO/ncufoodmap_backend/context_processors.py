from django.conf import settings

def google_analytics(request):
    """
    將Google Analytics ID添加到所有模板的上下文中
    """
    return {
        'GOOGLE_ANALYTICS_ID': settings.GOOGLE_ANALYTICS_ID
    } 