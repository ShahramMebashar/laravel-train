const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');



mix.js('resources/js/app.js', 'public/js');
mix.sass('resources/sass/app.scss', 'public/css')
   .options({
      processCssUrl: false,
      postCss: [tailwindcss('tailwind.config.js')]
   });
