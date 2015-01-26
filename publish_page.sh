# Creates our branch, without any parents (it's an orphan!)
# Switched to a new branch 'gh-pages'
git checkout --orphan gh-pages

# copy build to root
cp -r build/ ./

# Remove all folders from the old working tree
git rm -rf ./*

# rm '.gitignore'

# add root files to serve
git add .

# commit
git commit -a -m "First pages commit"

# push
git push origin gh-pages
