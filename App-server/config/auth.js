function isLoggedIn(req,res,next){
    if(req.isAuthenticated())
        return true;
    else
        return false;
}

module.exports = { isLoggedIn };