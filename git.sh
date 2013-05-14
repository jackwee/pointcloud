echo off
echo ++++++++++++++++++++++++add
pwd
cd C:/Users/Administrator/pointcloud/
pwd
git add .
echo ++++++++++++++++++++++++commit
git commit -m "upload file..."
echo ++++++++++++++++++++++++push
git push origin gh-pages
echo ++++++++++++++++++++++++finish