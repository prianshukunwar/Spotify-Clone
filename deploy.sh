sh
# abort on errors
set —e
# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekytt to bypass Jekyll processing
echo > . nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com• > CNAME

git init
git checkout —B main
git add —A
git commit —m 'deploy'

# if you are deploying to https://<USERNAYE>.github.io
# git push —f io.git main
# if you are deploying to
# git push —f git@github.com: prianshukunwar/Spotify-Clone.git main: gh-pages

cd -