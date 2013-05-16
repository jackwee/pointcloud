echo off
echo ++++++++++++++++++++++++adding...
cd C:/Users/Administrator/pointcloud/
pwd
git add .
echo ++++++++++++++++++++++++commiting...
git commit -m "upload file..."
echo ++++++++++++++++++++++++pushing...
git push origin gh-pages
echo ++++++++++++++++++++++++finish