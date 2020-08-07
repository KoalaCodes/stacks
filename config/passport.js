const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Investor = require('../models/investor');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb){
    //user has logged in with OAuth
     Investor.findOne({'googleId': profile.id}, function(err, investor){
        if(err) return cb(err);
        if(investor) {
            return cb(null, investor);
        }else {
            //new investor
            const newInvestor = new Investor ({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });

            newInvestor.save(function(err){
                if(err) return cb(err);
                return cb(null, newInvestor);
            })
        }
     })
}
))

passport.serializeUser(function(investor, done){
    done(null, investor.id);
});

passport.deserializeUser(function(id, done){
    Investor.findById(id, function(err, investor){
        done(err, investor);
    })
})