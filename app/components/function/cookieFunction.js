var getCookie = function(key) {
    return $cookieStore.get(key);
};

module.exports.getCookie = getCookie;
