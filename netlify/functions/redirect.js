// netlify/functions/redirect.js
exports.handler = async (event, context) => {
    // Get the sub1 parameter from the query string
    const sub1 = event.queryStringParameters.sub1;

    // Construct the affiliate URL with the sub1 parameter - USA
    const affiliateUrl = `https://www.eb9futrk.com/SRDRLT8/GF67RB6/?sub1=${encodeURIComponent(sub1)}`;

    return {
        statusCode: 200,
        body: affiliateUrl
    };
};