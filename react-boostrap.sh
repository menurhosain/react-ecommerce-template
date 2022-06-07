#!/bin/sh
mkdir -pv src/{components,containers,api,utils,pages,routs}
mkdir -pv publick/{css,js,img}
touch src/{index.js,main.scss}
cat > publick/index.html << EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <main class="approot"></main>
    <script defer src="./js/bundle.js"></script>
  </body>
</html>
EOF
ls -R src/
ls -R publick/
