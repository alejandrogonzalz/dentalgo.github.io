# DentalGo

Si estas usando VS Code, agregar lo siguiente a '/settings.json' (ctrl+shift+P para acceder):

    "liveSassCompile.settings.formats":[
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/dist"
        }
    ],

Tambien es necesario tener descargadas las extensiones de Live Server (Ritwick Dey) y Live Sass Compiler (Glen Marks)


echo "# DentalGo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/alejandrogonzalz/DentalGo.git
git push -u origin main
