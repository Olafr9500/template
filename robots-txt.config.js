/* eslint-env node */
module.exports = {
    policy: [
        {
            userAgent: 'Googlebot',
            allow: ['/', '/about/'],
            crawlDelay: 2
        }
    ],
    sitemap: 'http://localhost:3000/sitemap.xml',
    host: 'http://localhost:3000',
};