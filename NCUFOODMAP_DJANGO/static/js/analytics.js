// Google Analytics 事件追蹤
const Analytics = {
    // 追蹤搜尋事件
    trackSearch: function(searchTerm) {
        gtag('event', 'search', {
            'search_term': searchTerm
        });
    },

    // 追蹤餐廳點擊
    trackRestaurantView: function(restaurantName, restaurantId) {
        gtag('event', 'view_restaurant', {
            'restaurant_name': restaurantName,
            'restaurant_id': restaurantId
        });
    },

    // 追蹤用戶登入
    trackLogin: function(method) {
        gtag('event', 'login', {
            'method': method
        });
    },

    // 追蹤打卡事件
    trackCheckin: function(restaurantName, restaurantId) {
        gtag('event', 'checkin', {
            'restaurant_name': restaurantName,
            'restaurant_id': restaurantId
        });
    },

    // 追蹤文章互動
    trackArticleInteraction: function(articleId, interactionType) {
        gtag('event', 'article_interaction', {
            'article_id': articleId,
            'interaction_type': interactionType // 'view', 'like', 'comment'
        });
    },

    // 追蹤社交功能使用
    trackSocialInteraction: function(actionType) {
        gtag('event', 'social_interaction', {
            'action_type': actionType // 'follow', 'message', 'join_group'
        });
    },

    // 追蹤AI功能使用
    trackAIFeatureUse: function(featureType) {
        gtag('event', 'ai_feature_use', {
            'feature_type': featureType // 'food_analysis', 'recommendation', 'assistant'
        });
    }
}; 