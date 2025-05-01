export default function manifest() {
 return {
   name: 'Saniiro Web Application',
   short_name: 'Saniiro',
   description: 'Saniiro offers top-tier accounting, inventory management, and CRM solutions tailored for businesses in India.',
   start_url: '/',
   display: 'standalone',
   background_color: '#fff',
   theme_color: '#052973',
   icons: [
     {
       src: '/favicon.ico',
       sizes: 'any',
       type: 'image/x-icon',
     },
   ],
 }
}