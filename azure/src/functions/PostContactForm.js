const { app } = require('@azure/functions');
const http = require('https');


app.http('PostContactForm', {
    methods: ['OPTIONS','GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        context.log('v1');
        var requestBody = JSON.parse(await request.text());
        context.log(requestBody['name']);

        // Step 1: Extract Recaptcha token from the request
        const recaptchaToken = requestBody['recaptchaToken'];

        // Step 2: Validate the Recaptcha token
        const isValid = await validateRecaptchaToken(recaptchaToken,context);
        const name = requestBody['name'] || 'world';
        // Step 3: Handle the response
        if (isValid) {
           
            return { body: `Hello, ${name}!` };
        } else {
            return { status: 400, body: 'Invalid Recaptcha token.'+`Hello, ${name}!` };
        }
    }
});

async function validateRecaptchaToken(token,context) {
    // Replace "YOUR_RECAPTCHA_SECRET_KEY" with your actual secret key
    const secretKey = process.env.Google_secretKey;
    //site key = 6Lfz_NooAAAAAFmYgEz-Hy4brvzAnEq5rTpHo3UL
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    context.log('validateRecaptchaToken token : ',token);
    return new Promise((resolve) => {
        http.get(verifyUrl, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    context.log('result',result)
                    resolve(result.success);
                } catch (error) {
                    context.error('Error parsing Recaptcha response:', error.message);
                    resolve(false);
                }
            });
        }).on('error', (error) => {
            console.error('Error validating Recaptcha token:', error.message);
            context.error('Error validating Recaptcha token:', error.message);
            resolve(false);
        });
    });
}
