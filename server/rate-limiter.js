const rateLimit = require('express-rate-limit');
 const rateLimiterUsingThirdParty = rateLimit({
    windowMs: 1 * 1000, // 24 hrs in milliseconds
    max: 1,
    message: 'You have exceeded the 1 requests in 1 secs!', 
    headers: true,
  });
  module.exports = rateLimiterUsingThirdParty;