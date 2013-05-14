echo off
echo ++++++++++++++++++++++++add
git add .
echo ++++++++++++++++++++++++commit
echo ++++++++++++++++++++++++commit2
git commit -m "upload file..."
ff
echo ++++++++++++++++++++++++push
git push origin gh-pages
echo ++++++++++++++++++++++++finish