export default function robots() {
 return {
   rules: [
     {
       userAgent: 'Googlebot',
       allow: ['/'],
       disallow: ['/subfooter/**'],
     },
     {
       userAgent: ['Applebot', 'Bingbot'],
       disallow: ['/subfooter/**'],
     },
   ],
   sitemap: 'https://saniiro.com/sitemap.xml',
 }
}