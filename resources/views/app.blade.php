<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Intermediarios Financieros Inmobiliarios trabajando junto con cada inmobiliaria e inversor privado, para tramitar y asesorar en cada hipoteca o alquiler que estos tramiten. Automatizamos e inmediatizamos procesos y les ayudamos a simular una hipoteca.">

        <title inertia>Lowrisk</title>
        
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap" rel="stylesheet">
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-manrope antialiased">
        @inertia
    </body>
    

</html>
