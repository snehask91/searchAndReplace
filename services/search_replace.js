Object.prototype.replace = function (regx, replc){
    return JSON.parse(
        JSON.stringify(this).replace(regx,replc)
    );
}

const request_data = {
    "code": "BMSSG",
    "header": {
        "banners": [
            {
                "name": "banner1",
                "imageUrl":
                    "https://cdn.localhost.dev/dev/202006/9ada1f665d99-1592130713518.png"
            },
            {
                "imageUrl":
                    "http://cdn.localhost.dev/dev/202007/dc19bd6ba566-1594964851886.jpg"
            }
        ]
    },
    "name": "BookMyShow",
    "cardImageUrl": "cdn.localhost.dev/71/e1/71e13de783f5cef09c8128e186fac0a8.png",
    "whiteLabel": {
        "header": { "primary": "#5c2a90", "darker": "#171717", "lighter": "#f1e4f7" },
        "logo": "https://cdn.localhost.dev/dev/202007/e90d1e06b1ce-1594707971188.png"
    },
    "emailTemplateSubject": "Dev BMSSG - Tickets Purchased Testing New Template"
}

var expected_domain_name = 'www.bookmyshow.com'
const response_data = request_data.replace(/cdn.localhost.dev/gi,expected_domain_name);
console.log("\n -----------Response data-------:\n",response_data);