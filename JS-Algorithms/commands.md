npm i @bgoonz11/repoutils
npm i prettier -g
prettier --write .

Remove lines of file contaning a string
sudo sed -i '/Mirrored from/d' ./_.html
sudo sed -i '/This is Squarespace/d' ./_.html
sudo sed -i '/authors/d' ./\*.md
sudo sed -i '/assets/d' ./index.html

## npm i --legacy-peer-deps

Flatten (denest) all sub folders into one folder contaning files.

find ./ -mindepth 1 -type f -exec mv -t ./ --backup=t '{}' +

---

while sleep 25; do make; done

while sleep 25; do prettier --write .; done

while sleep 25; do black .; done

while sleep 25; do find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +; done

n3I1c5K2

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/gitbook-style-full.css">

-----------------------------------------COMBINE ALL FILES OF A CERTAIN TYPE----------------------------------------------------------------

for f in \*.md; do cat "${f}"; echo; done > Combined**\_**-**\_**Doc.md

for f in \*.js; do cat "${f}"; echo; done > Combined**\_**-**\_**Doc.md

https://onedrive.live.com/view.aspx?resid=D21009FDD967A241!668630&ithint=file%2cpptx&authkey=!AK4TMn_d-DLiw5g

for f in \*.py; do cat "${f}"; echo; done > Combined**\_**-**\_**Doc.md

---

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_index.html' HEAD

-------------------------------------------WGET DOWNLOAD WEBSITE--------------------------------------------------------------

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://bgoonz-blog-v3-0.netlify.app/

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://py-v2.gitbook.io/datastructures-in-pytho/

---

find ./ -iname "_.html" -type f -print | xargs sed -i 's/<style>try._<\/style>//' \*.html

---------------------------------------PANDOC------------------------------------------------------------------

find ./ -iname "\*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;

find ./ -iname "\*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.pdf"' {} \;

find ./ -iname "\*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;

find ./ -iname "\*.docx" -type f -exec sh -c 'pandoc "${0}" -o "${0%.docx}.md"' {} \;

find . -name '\*.rst' -exec pandoc {} -f rst -t markdown -o {}.md \;

for /R %a in (_.htm_) do pandoc “%a” -f html -t latex -s -o “%~pa%~na.pdf”

---

sed '/<tag>/,/<\/tag>/d' index.html

-----------------------------------------ZIP UTILS-----------------------------------------------------------------------------------------
4.)Recursive-unzip:()===>

find . -name "\*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;

find . -name "\*.zip" -type f -print -delete

find . -name '\*robots\.txt' -type d -prune -exec rm -rf '{}' +

---

Install node modules recursevly ( npm i -g recursive-install ):

npm-recursive-install
---------------------------------------------------Main Commands---------------------------------------------------------------------------
find . -empty -type d -print -delete OR find . -depth -exec rmdir {} \;

fdupes -r -f . | grep -v '^$' | xargs rm -v

find . -empty -type f -print -delete

find . -empty -type d -print -delete

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

find . -name '\_\_MACOSX' -type d -prune -exec rm -rf '{}' +

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

find . -size +98M -a -print -a -exec rm -f {} \;

find . -name 'sitemap.html' -type f -prune -exec rm -rf '{}' +

find . -name 'sitemap.html' -type f -prune -exec rm -rf '{}' +

git pull

git init
git add .
git commit -m"update"
git push -u origin master

git init
git add .
git commit -m"update"
git push -u origin gh-pages

git init
git remote add origin https://github.com/Archive-42/september-downloads-archive.git
git add .
git commit -m"update"
git push -u origin master

<link rel="apple-touch-icon" href="logo-circle.png">

download-directory.github.io?url=https://github.com/bgoonz/UsefulResourceRepo2.0/tree/6744f66605f37e6ece28f4676498076ec3165299/_REPO

find . -name '.bin' -type d -prune -exec rm -rf '{}' +

find . -name '\*.html' -type d -prune -exec rm -rf '{}' +

find . -name 'nav-index' -type d -prune -exec rm -rf '{}' +

find . -name 'node-gyp' -type d -prune -exec rm -rf '{}' +

find . -name 'deleteme.txt' -type f -prune -exec rm -rf '{}' +

find . -name 'right.html' -type f -prune -exec rm -rf '{}' +

find . -name 'left.html' -type f -prune -exec rm -rf '{}' +

----------------------------------------------Delete files smaller thatn 2k-----------------------------------------------------------

find . -name "\*.js" -type 'f' -size -2k -delete

find . -name "\*.py" -type 'f' -size -2k -delete

find . -name "\*.md" -type 'f' -size -2k -delete

find . -name "\*.html" -type 'f' -size -2k -delete

----------------------------------------------Remove Spaces In File/Folder Names-----------------------------------------------------------

find . -name "\* _" -type d | rename 's/ /\_/g'  
find . -name "_ \*" -type f | rename 's/ /\_/g'

find $dir -type f | sed 's|\(._/\)[^a-z]_\([A-Z].\*\)|mv \"&\" \"\1\2\"|' | sh

find $dir -type d | sed 's|\(._/\)[^a-z]_\([A-Z].\*\)|mv \"&\" \"\1\2\"|' | sh

for i in _.html; do mv "$i" "${i%-_}.html"; done

for i in _._; do mv "$i" "${i%-_}.${i##_.}"; done

- [NETLIFY](https://app.netlify.com/teams/bgoonz/overview)

                                         PANDOC

find ./ -iname "\*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;

find ./ -iname "\*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;

find . -name "\* \*" -type f | rename 's/\_//g'

find . -name "\* _" -type d | rename 's/#/\_/g'  
find -type f -name "_~\*" -execdir rename -n -v 's/#//' {} +

find . -name "\* \*" -type f | rename 's/#/\_/g'

find . -name "\* \*" -type f | rename 's/.html//g'
------------------------------------Truncate folder names down to 12 char------------------------------------------------------------------------

for d in ./\*; do mv $d ${d:0:12}; done
-------------------------------------Remove Numbers From File Names------------------------------------------------------------------------

#!/bin/bash

for file in \*.md.md
do
mv "${file}" "${file%.md}"
done

#!/bin/bash

for file in \*.html.html
do
mv "${file}" "${file%.html}"
done

Remove double extensions :

#!/bin/bash

for file in \*.html.html
do
mv "${file}" "${file%.html}"
done

#!/bin/ksh
for i in '.'
do
echo mv "${i}" "${i##????}"
done
-------------------------------------FIND AND REPLACE IN STRING/FOLDER NAMES----------------------------------------------------------------

find . -type f -exec rename 's/string1/string2/g' {} +

find . -type d -exec rename 's/-master//g' {} +

find . -type d -exec rename 's/-main//g' {} +

find . -type f -exec rename 's/\.download//g' {} +

find . -type d -exec rename 's/-main//g' {} +

rename 's/\.js\.download$/.js/' \*.js\.download

rename 's/\.html\.markdown$/.md/' \*.html\.markdown

find . -type d -exec rename 's/es6//g' {} +

for d in _.; do
tmp=`echo $f | sed -r 's//^(.{5})._(\..\*)$/$1$2/'`
    mv -b ./"$f" ./"$tmp"
done

rawFileName=$(basename "$1")
filename="${rawFileName%._}"
ext="${rawFileName##_.}"

if [[${#filename} < 9]]; then
echo ${filename:0:8}.${ext}
else
echo $1
fi

## rename 's/^(.{10})._/$1/' _

Remove double extensions :

#!/bin/bash

for file in \*.html.html
do
mv "${file}" "${file%.html}"
done

#!/bin/bash

for file in \*.html.png
do
mv "${file}" "${file%.png}"
done

for file in \*.jpg.jpg
do
mv "${file}" "${file%.png}"
done

#!/bin/bash

for file in \*.html.png
do
mv "${file}" "${file%.png}"
done

for file in \*.jpg.jpg
do
mv "${file}" "${file%.png}"
done

#!/bin/bash

for file in \*.md.md
do
mv "${file}" "${file%.md}"
done

find . -type f -exec ' {} +

#!/bin/bash
num=1
length=16
for file in '.'
do
newname=$file
    until [[ ! -f $newname ]]
    do
        (( sublen = length - ${#num} ))
        printf -v newname '%.*s%d' "$sublen" "$file" "$num"
(( num++ ))
done
mv "$file" "$newname"
done

## sed 's/\/._\/._\/._\/\(._\)/~\/\1/g' \*

---

RUN GIT FLOW EVERY 2 MINUTES:

while sleep 120; do git init && git add . && git commit -m "update" && git push -u origin master; done

OR:

while sleep 25; do make; done

---

---

Clone Only .git folder:

git clone --no-checkout https://github.com/bgoonz/UsefulResourceRepo2.0.git

---

---

find . -size +100k -delete

git pull

git init
git add .
git commit -m"update"
git push -u origin master

git init
git add .
git commit -m"update"
git push -u origin main

git init
git add .
git commit -m"update"
git push -u origin bryan-guner

git init
git add .
git commit -m"update"
git push -u origin gh-pages

git init
git add .
git commit -m"update"
git push -u origin imgbot

git init
git add .
git commit -m"update"
git push -u origin preview

---

git pull keeping local changes:

git stash
git pull
git stash pop

---

CLONE ALL:

CNTX={users|orgs}; NAME={username|orgname}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={users}; NAME={WebDevSimplified}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={users|orgs}; NAME={username|orgname}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={octokit}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={octokit}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={FreeCodeCamp-Solutions}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={netlify-templates}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={circlecell}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={users}; NAME={decagondev}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={users}; NAME={smakosh}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={users}; NAME={stackbit-projects}; PAGE=150
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={organizations}; NAME={WebDevSimplified}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={organizations}; NAME={psf}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=200"?branch=master |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={firebase}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={firebase}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

CNTX={orgs}; NAME={Archive-42}; PAGE=1
curl "https://api.github.com/$CNTX/$NAME/repos?page=$PAGE&per_page=100" |
grep -e 'git_url\*' |
cut -d \" -f 4 |
xargs -L1 git clone

Clone Orginization:

#!/bin/bash
for i in $(curl "https://api.github.com/orgs/freeCodeCamp/repos" | grep -oP '"clone_url":\s*"\K[^"]+'); do
  echo git clone "$i"
done

Clone Orginization:

#!/bin/bash
for i in $(curl "https://api.github.com/orgs/netlify/repos" | grep -oP '"clone_url":\s*"\K[^"]+'); do
  echo git clone "$i"
done

#!/bin/bash
for i in $(curl "https://api.github.com/orgs/react-component/repos" | grep -oP '"clone_url":\s*"\K[^"]+'); do
  echo git clone "$i"
done

#!/bin/bash
for i in $(curl "https://api.github.com/orgs/chartjs/repos" | grep -oP '"clone_url":\s*"\K[^"]+'); do
  echo git clone "$i"
done

---

tree -d -I 'node_modules'

tree -I 'node_modules'

tree -f -I 'node_modules' >TREE.md

tree -f -L 2 >README.md

tree -f -I 'node_modules' >listing-path.md

tree -f -I 'node_modules' -d >TREE.md

tree -f >README.md

full path:
tree -f ~/

---

find . -name \*right.html -type f -exec sed -i 's/target="\_parent"//g' {} +

## find . -name \*right.html -type f -exec sed -i 's/target="\_parent"//g' {} +

sudo npm i prettier -g

prettier --write .
prettier --write \"./\*_/_.{js,jsx,py,md,html,css}\"

"pretty": "prettier --write \"./\*_/_.{js,jsx,py,md,html,css}\""

Format Python:

black .

----------------------------------------Remove lines contaning string:-----------------------------------------------------

sudo sed -i '/githubusercontent/d' ./\*sandbox.md

sudo sed -i '/githubusercontent/d' ./\*scrap2.md

sudo sed -i '/github\.com/d' ./\*out.md

sudo sed -i '/New folder/d' ./bookmarks.md

---------------------------------MEDIUM EMBED----------------------------------------------------

https://replit.com/@bgoonz/js-tutorial#02.%20Introducing%20JavaScript/02.01.js.intro.html

https://replit.com/@bgoonz/data-structures?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/data-structures?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/js-tutorial-1?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

https://repl.it/@bgoonz/Database-Prac?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com

---

zips directory excluding .git and node_modules all the way down (linux)

#!/bin/bash
TSTAMP=`date '+%Y%m%d-%H%M%S'`
zip -r $1.$TSTAMP.zip $1 -x "**.git/\*" -x "**node_modules/\*" `shift; echo $@;`

printf "\nCreated: $1.$TSTAMP.zip\n"

# usage:

# - zipdir thedir

# - zip thedir -x "\*_anotherexcludedsubdir/_" (important the double quotes to prevent glob expansion)

# if in windows/git-bash, add 'zip' command this way:

# https://stackoverflow.com/a/55749636/1482990

---

Delete files contaning a certain string:

find . | xargs grep -l www.redhat.com | awk '{print "rm "$1}' > doit.sh
vi doit.sh // check for murphy and his law
source doit.sh

---

------------------------------------------------GIT---------------------------------------------------------
------------------------------------------------GIT---------------------------------------------------------
------------------------------------------------GIT---------------------------------------------------------

-------------------------------GET GISTS:

wget -q -O - https://api.github.com/users/bgoonz/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget

wget -q -O - https://api.github.com/users/amitness/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n3 wget

wget -q -O - https://api.github.com/users/drodsou/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

wget -q -O - https://api.github.com/users/thomasmb/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

## wget -q -O - https://api.github.com/users/koraktor/gists | grep raw_url | awk -F\" '{print $4}' | xargs -n1 wget

watch -n '100' "git pull && (git ls-files --modified --others --exclude-standard | grep . > /dev/null) && { git add . ; git commit -m '<MESSAGE>' ; git push; }"

---

git remote remove origin

---

just clone .git folder:

## git clone --bare --branch=master --single-branch https://github.com/bgoonz/My-Web-Dev-Archive.git

Undo recent pull request:
git reset --hard master@{"10 minutes ago"}

---

Open PowerShell and enter wslconfig.exe /l to confirm WSL is installed correctly and list the currently available Linux distributions within your system. Confirm a valid distribution has (default) next to it.
To change the default distribution, enter wslconfig.exe /setdefault "distributionNameAsShownInList"
The terminal not working when running the 32-bit Windows client on 64-bit Windows?#
The easy fix for this issue is to use the 64-bit version. If you must use the 32-bit version, you need to use the sysnative path when configuring your shell path instead of System32. Adding this setting should fix the issue:

## "terminal.integrated.shell.windows": "C:\\Windows\\Sysnative\\cmd.exe",

To remove a submodule you need to:

Delete the relevant section from the .gitmodules file.
Stage the .gitmodules changes git add .gitmodules
Delete the relevant section from .git/config.
Run git rm --cached path_to_submodule (no trailing slash).
Run rm -rf .git/modules/path_to_submodule (no trailing slash).
Commit git commit -m "Removed submodule "
Delete the now untracked submodule files rm -rf path_to_submodule
----------------------------------------Lebab-----------------------------------------------------------------
LEBAB

npm i lebab -g

safe:

lebab --replace ./ --transform arrow
lebab --replace ./ --transform arrow-return
lebab --replace ./ --transform for-of
lebab --replace ./ --transform for-each
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform obj-method
lebab --replace ./ --transform obj-shorthand
lebab --replace ./ --transform multi-var

ALL:

lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow
lebab --replace ./ --transform let
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform destruct-param
lebab --replace ./ --transform includes
lebab --replace ./ --transform obj-method
lebab --replace ./ --transform class
lebab --replace ./ --transform arrow
lebab --replace ./ --transform arg-spread
lebab --replace ./ --transform arg-rest
lebab --replace ./ --transform for-each
lebab --replace ./ --transform for-of
lebab --replace ./ --transform commonjs
lebab --replace ./ --transform exponent
lebab --replace ./ --transform multi-var
lebab --replace ./ --transform template
lebab --replace ./ --transform default-param
lebab --replace ./ --transform destruct-param
lebab --replace ./ --transform includes

---------------------------------------Trouble Shooting------------------------------------------------------------------
input/Output error

wsl.exe --shutdown

Get-Service LxssManager | Restart-Service

---------------------When you only clone .git folder------------------------------------------------------------------------------------

$ git restore --source=HEAD :/

---

Fudge2312!

IP: 173.70.97.51

Log into postgres:
sudo -u postgres psql
-------------------------------------------------------------Symbolic Link--------------------------------------------
sudo ln -s ./mnt/c/MY-WEB-DEV

ln -s "$(pwd)" ~/NameOfLink

## ln -s "$(pwd)" ~/Downloads

return to bash from zsh
sudo apt --purge remove zsh

----------------Unzip PowerShell UNZIP:
PARAM (
[string] $ZipFilesPath = "./",
[string] $UnzipPath = "./RESULT"
)

$Shell = New-Object -com Shell.Application
$Location = $Shell.NameSpace($UnzipPath)

$ZipFiles = Get-Childitem $ZipFilesPath -Recurse -Include \*.ZIP

$progress = 1
foreach ($ZipFile in $ZipFiles) {
    Write-Progress -Activity "Unzipping to $($UnzipPath)" -PercentComplete (($progress / ($ZipFiles.Count + 1)) \* 100) -CurrentOperation $ZipFile.FullName -Status "File $($Progress) of $($ZipFiles.Count)"
$ZipFolder = $Shell.NameSpace($ZipFile.fullname)

    $Location.Copyhere($ZipFolder.items(), 1040) # 1040 - No msgboxes to the user - http://msdn.microsoft.com/en-us/library/bb787866%28VS.85%29.aspx
    $progress++

}

cat w07_data-structures-and-algorithms.md\* | codedown javascript > code.js

cat README.md* | codedown javascript > code.js
cat interview Questions.md* | codedown javascript > code.js
cat README.md\* | codedown javascript > code.js

cat w08_getting-to-know-the-network.html\* | codedown javascript > code.js

cat \*.html | codedown javascript > code.js

cat \*.markdown | codedown javascript > code.js

----------------------------------auto generate readme-----------------------------------------------------------------------

rename existing readme to blueprint.md

npx @appnest/readme generate

---

npm i -g mdt-docs-generator

RENAME README.md ===> README_RAW.md

## mdt-docs

---------------------------------Export Medium as Markdown------------------------------------------------------------------------

mediumexporter https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4 >ds.md

-------------------------Delete within size range--------------------------------------------------------------------------------

find . -size +386b -a -size -390b -exec rm -f {} \;

find . -size +2000b -exec rm -f {} \;

---

Create symbolic link to working directory

ln -s "$(pwd)" ~/mylink

npm install redux-logger redux-thunk styled-components

---

---

find <mydir> -type f -exec sed -i 's/<string1>/<string2>/g' {} +

## find . -type f -exec rename 's/-master//g' {} +

INSTEAD OF GIT PUSH \_F :git reset --hard upstream/master

TRIM ALL(USE WITH CAUTION):
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

---

Replace spaces in filenames with underscores

for file in \*; do mv "$file" `echo $file | tr ' ' '_'` ; done

---

---

Netlify error: 1:32:52 AM: Error checking out submodules: fatal: No url found for submodule path '2-content/awesome-resources/Cumulative-Resource-List-master' in .gitmodules

git rm --cached 2-content/awesome-resources/Cumulative-Resource-List-master

---

---

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://bryan-guner.gitbook.io/python/

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://www.notion.so/webdevhub42/72b1342736094af4bd0992bad4dd2267?v=7f80269e29ee4a79a8227187cbf69c39

wget --limit-rate=200k --no-clobber --convert-links --random-wait -r -p -E -e robots=off -U mozilla https://webdevhub42.notion.site/Data-Structures-e89a3005a7284e57b559e672d7f9cb24

find . -name "\*right.md" -type f -print -delete

find . -name "\*right.html" -type f -print -delete

find . -name "\*left.html" -type f -print -delete

find . -name "\*analytics.js" -type f -print -delete

find . -name "\*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;

find . -name "\*desktop.ini" -type f -print -delete

find . -name "\*.zip" -type f -print -delete

find ./ -type f -name \*.tar.gz -exec tar -xf {} \;

git remote remove origin

find . -name "\*.gz" -type f -print -delete
dac9ba0

## find . -name "\*.tgz" -type f -print -delete

---

PUSH IN CHUNCKS:
REMOTE=origin
BRANCH=$(git rev-parse --abbrev-ref HEAD)
BATCH_SIZE=10

# check if the branch exists on the remote

# if git show-ref --quiet --verify refs/remotes/$REMOTE/$BRANCH; then

# # if so, only push the commits that are not on the remote already

# range=$REMOTE/$BRANCH..HEAD

# else

# # else push all the commits

# range=HEAD

# fi

range=HEAD

echo "Range: $r"

# count the number of commits to push

n=$(git log --first-parent --format=format:x $range | wc -l)

echo "Commits to push: $n"

# push each batch

for i in $(seq $n -$BATCH_SIZE 1); do # get the hash of the commit to push
h=$(git log --first-parent --reverse --format=format:%H --skip $i -n1)
    echo "Pushing $h..."
    git push $REMOTE $h:refs/heads/$BRANCH --force
done

# push the final partial batch

git push $REMOTE HEAD:refs/heads/$BRANCH

---

PRISM:

<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/misc/web-dev-utils/personal-utilities/prism/prism.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/prism.css">

---

Powershell unzip:

$folderPath="PWD";

Get-ChildItem $folderPath -recurse | %{

    if($_.Name -match "^*.`.zip$")
    {
        $parent="$(Split-Path $_.FullName -Parent)";
        write-host "Extracting $($_.FullName) to $parent"

        $arguments=@("e", "`"$($_.FullName)`"", "-o`"$($parent)`"");
        $ex = start-process -FilePath "`"C:\Path\To\7zip\7z.exe`"" -ArgumentList $arguments -wait -PassThru;

        if( $ex.ExitCode -eq 0)
        {
            write-host "Extraction successful, deleting $($_.FullName)"
            rmdir -Path $_.FullName -Force
        }
    }

}

---

------------------------------------Concat all files of same type recursively---------------------------------------------------------------------

find /path/to/directory/ -name \*.csv -exec cat {} + > merged.file

find './' -name \*.html -print0 | xargs -0 -I file cat file > merged.file.html

find './' -name \*.py -print0 | xargs -0 -I file cat file > merged.file.md

find './' -name \*.md -print0 | xargs -0 -I file cat file > merged.file.md

pandoc \*.md > final.md

pandoc \*.py > final.md

find . -name \*.html -exec cat {} + > merged.file.html

find . -name \*.md -exec cat {} + > merged.file.md

find . -name \*.md -exec cat {} + > merged.file.md

find . -name \*.html -exec cat {} + > merged.file.html

for f in \*.html; do cat "${f}"; echo; done > output.html

for f in \*.py; do cat "${f}"; echo; done > output.md

for f in \*.md; do cat "${f}"; echo; done > output.md

for f in \*.js; do cat "${f}"; echo; done > output.js

---

find . -type f -exec sed -i '/Mirrored from/d' ./\*.html {} \;

find . -type f -exec sed -i '/Created by HTTrack/d' ./\*.html {} \;

find . -type f -exec sed -i '/#/' ./\*quandstack.py {} \;

find . -type f -exec sed -i '/Created on/d' ./\*.py {} \;

find . -type f -exec sed -i '/path/d' ./scrap.md {} \;

sudo sed -i '/description/d' \*.html

sudo sed -i '/WEEK-/d' README.html

sudo sed -i '/\/\/ Date :/d' \*.js

find . -type f -exec sed -i '/Created by/d' ./\*.html {} \;

find . -type f -exec sed -i '/Mirrored from/d' ./\*.md {} \;

find . -type f -exec sed -i '/image004/d' ./\*.html {} \;

find . -type f -exec sed -i '/:::/d' ./\*.md {} \;

find . -type f -exec sed -i '/authors/d' ./\*. {} \;

find . -type f -exec sed -i '/section:/d' ./\*. {} \;

find . -type f -exec sed -i '/ Created by <span class=\x27author\x27>/d' ./\*.html {} \;

find . -type f -exec sed -i '/<p>Document generated by Confluence on/d' ./\*.html {} \;

find . -type f -exec sed -i '/<div id="footer-logo"><a href="http:\/\/www\.atlassian\.com\/">Atlassian<\/a><\/div>/d' ./\*.html {} \;

find . -type f -exec sed -i '/miguelgrinberg/d' ./\*.html {} \;

find . -type f -exec sed -i '/Mirrored from/d' ./\*.html {} \;

find . -type f -exec sed -i '/Author/d' ./\*.html {} \;

find -type f -name '_\-fr_' -delete
find -type f -name '_\-ja_' -delete
find -type f -name '_\-es_' -delete
find -type f -name '_\-de_' -delete
find -type f -name '_\-ru_' -delete
find -type f -name '_\-id_' -delete
find -type f -name '_\-pt_' -delete
find -type f -name '_\-zh_' -delete
find -type f -name '_\-fr_' -delete
find -type f -name '_\-fr_' -delete
find -type f -name '_\-fr_' -delete

find . -type f -exec sed -i '/class="column-list"/d' ./index.html {} \;

find . -type f -exec sed -i '/Added by HTTrack/d' ./\*.html {} \;

---

rename -n 's/(._).{1}/$1/' _

rename -n 's/.{1}$//' \*

rename -n 's/(._).{1}/$1/' _
find . -maxdepth 1 -type d -name '?????????????\*' -exec rename -n 's/.{1}$//' {} +

for i in \*.; do
mv "$i" "${i:0:-1}"
done

git add .
git commit -m "update"
git push -u origin master

---

firstname-lastname-day2

git remote remove origin

---

Download website with wget:
wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --adjust-extension -O -e robots=off https://web.dev

wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off

---

wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --adjust-extension -O -e robots=off https://web.dev

find . -name "\*.xml" -type f -print

s
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name '.vscode' -type d -prune -exec rm -rf '{}' +

---

youtube-dl https://www.youtube.com/user/Mihirishere/videos

## youtube-dl https://www.youtube.com/user/norwex/videos

Remove duplicate lines from a text file
You can use this shell command:

COPY
uniq -u input.txt output.txt

---

httrack --ext-depth=2

httrack --ext-depth=2 https://kathyguner.norwex.biz/

httrack https://kathyguner.norwex.biz/

httrack --ext-depth=3 https://www.textfixer.com/html/convert-url-to-html-link.php

httrack http://jellydemos.com/html/muziq/muziq-hardrock/index-multipages.html -O "./temp" %e5

httrack --ext-depth=4 http://jellydemos.com/html/muziq/muziq-hardrock/index-multipages.html

## httrack --ext-depth=4 https://www.vickielasher.com/

grab all links from website
lynx -dump https://distrokid.com/hyperfollow/mihirbeg/getting-there | awk '/http/{print $2}' > links2.txt

lynx -dump https://geeksforgeeks.org/top-10-useful-github-repos-that-every-developer-should-follow | awk '/http/{print $2}' > links.md

lynx -dump https://html.com/blog/100-web-development-cheat-sheets | awk '/http/{print $2}' > links.md

wget -qO- www.instagram.com/mihirbeg/ |
grep -Eoi '<a [^>]+>' |
grep -Eo 'href="[^\"]+"' |
grep -Eo '(http|https)://[^/"]+'>output.md

---

GitFlow\_-_step_by_step_a5dcb946b01f4d66be259ba33733763b

._(?<=<script)(._)(?=<\/script>)._
._\./\.git.*
.*node_modules.\*

find . -name "_.zip" -type f -print
find . -name "_.zip" -type f -print -delete
find . -name "\*.gitignore" -type f -print -delete

---

REMOVE DUPLICATE LINES:

uniq -u input.txt output.txt

uniq -u resources.html output.html

## uniq -u testOut.html TESTOUT.html

2.)find and delete all empty directories()===>

## find . -empty -type d -print -delete

3.)Find and delete all empty files()===>

find . -empty -type f -print -delete

add extension to every file in folder

find . -type f -exec mv '{}' '{}'.html \;

find . -type f -exec mv '{}' '{}'.md \;

find . -type f -exec mv '{}' '{}'.html \;

find . -type f -exec mv '{}' '{}'.png \;

find . -type f -exec mv '{}' '{}'.jpg \;

find . -type f -exec mv '{}' '{}'.html \;
find . -type f -exec mv '{}' '{}'.md \;

for f in \* ; do
mv "$f" "$f.md"
done

for f in \* ; do
mv "$f" "$f.html"
done

for f in \* ; do
mv "$f" "$f.css"
done

for f in \* ; do
mv "$f" "$f.jpg"
done

---

delete lines contaning specific string:

sed -i '/normalizerEmpty/d' ./js-in-one-page.html

sed -i '/\.git/d' ./index.html

sed -i '/\.github/d' ./combined.md

find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/BADSTRING/d' '{}' +
sed -i '//d' ./\*.html

find . -type f -a \( -name "_scrap3.md" \) -a -exec sed -i '/stargazers/d' '{}' +
sed -i '//d' ./_.html

find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" -o -name "\*.php" \) -a -exec sed -i '/MIT/d' '{}' +

find . -type f -a -exec sed -i '/author/d' '{}' +

## find . -type f -a \( -name "_.html" -o -name "_.md" \) -a -exec sed -i '/[Source]/d' '{}' +

sudo sed -i '/Author/d' ./_.html
Remove lines of file contaning a string
sudo sed -i '/Mirrored from/d' ./_.html
sudo sed -i '/This is Squarespace/d' ./\*.html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/assets/d' ./index.html

## sudo sed -i '/stargazers/d' ./scrap3.md

To find a pattern and remove the line containing the pattern below command can be used

find . -name "\*" -type f | xargs sed -i -e '/Mirrored from/d'

find . -name '_' -type f | xargs sed -i -e '/Author/d'
find . -name "_" -type f | xargs sed -i -e '/author/d'

sed -n '/author/!p' file

for f in \*.html; do printf '%s\n' 0a '<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://gist.githubusercontent.com/bgoonz/37bca66ce8441c688900b6f082f10560/raw/2e9a5966431d89b8ce6355e7b8039ba42554978b/CSS-Styling-for-Pandoc-generated-html.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="https://raw.githubusercontent.com/bgoonz/styling-templates/master/bootstrap3/assets/css/bootstrap.min.css"></head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html

## find . -name "\*" -type f | xargs sed -i -e '/Mirrored from/d'

print out the path of every file recursivley

ls -R './' | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.md

---

---

sed -n -e '/<script>/,/<\/script>/p' getting-there.html >out.js

sed -n -e '/<script>/,/<\/script>/p' \*.html >out.js

find . -type f -exec sed -n -e '/<script>/,/<\/script>/p' _.html >out.js ./_ {} \;

sed -n -e '/<script>/,/<\/script>/p' \*.html >out.js

sed -n -e '/<script>/,/<\/script>/p' \*.html >out.js

find . -type f -exec sed -n -e '/<code class="sourceCode javascript">/,/<\/code>/p' _.html >out.html ./_ {} \;

find . -type f -exec sed -n -e '/`js/,/`/p' _.html >out.js ./_ {} \;

sed -i 's/<script>//g' out.js
sed -i 's/<\/script>//g' out.js

._\./<script_
(?<=<script)(.\*)(?=<\/script>)

---

sudo sed -i '/\.git/d' ./index.html

sudo sed -i '/ <div id="footer-logo"><a href="http:\/\/www\.atlassian\.com\/">Atlassian<\/a><\/div>/d' ./\*.html

sudo sed -i '/ <a href="http:\/\/www\.atlassian\.com\/">Atlassian<\/a>/d' ./\*.html

## sudo sed -i '/ Document generated by Confluence on/d' ./\*.html

Resursivley delete node modules

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

find . -name 'description\.txt' -type d -prune -exec rm -rf '{}' +
/workspace/my-gists/TESTING/description.txt

## find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +

5.) Remember Git Credentials:

                git config --global credential.helper store

---

## find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

---

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_website-components/0-DOJO/widgets-master/output/info/stats.json' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_00-4-all-time/\_0-Random-Repo/zipped.zip' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_Resource-Hub-Mark_II/azagent/vstsagent.tar.gz' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_Resource-Hub-Mark_II/azagent/vstsagent.tar.gz' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_index.html' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_NOTES/database-notes/repl.it-sql/repl.it - SQL/SQLIntroductions.mp4' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_f95b7cbda3503d5d3f539e0c8401209c6f7c0c91f6ae2fa510a6efcaeaf697ef' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_7-assets/Past-Cohort/LambdaSchool-master.zip' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_PDFS/Head_First_Csharp.pdf' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch git filter-branch --index-filter 'git rm -r
--cached --ignore-unmatch assets/\_index.html' HEAD' HEAD

git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_index.html' HEAD

---

nano
When you're done, hit CTRL+O to save and CTRL+X to exit Nano. You'll just need to restart the SSH server with one of the following commands.

$ systemctl restart sshd
$ service sshd restart

---

Recursivley Create numbered folders:
n=1;
max=50;
while [ "$n" -le "$max" ]; do
mkdir "s$n"
  n=`expr "$n" + 1`;
done

---

Command Line: Rename all files in current directory to a certain file extension:
forfiles /S /M _ /C "cmd /c rename @file @fname.js"
forfiles /S /M _ /C "cmd /c rename @file @fname.html"

forfiles /S /M \* /C "cmd /c rename @file @fname.md"

## forfiles /S /M \* /C "cmd /c rename @file @fname.java"

The following command would rename all _.txt files to _.doc.

$ rename 's/\.txt$/.doc/' \*.txt

rename 's/\.txt$/.js/' \*.txt

$ rename 's/\.example$/.sql/' *.example
rename 's/\.js\.download$/.js/' \*.js\.download

find . -name "\*.htm" -exec rename 's/\.htm$/.html/' '{}' +

find . -name "\*.\.js\.download" -exec rename 's/\.js\.download$/.js/' '{}' +

echo "</body></html>" | tee -a \*.html

## rename 's/\.html\.tmp$/.html/' \*.html\.tmp

find ./ -iname "\*.md" -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;

------------------------------------From html >md below---------------------------------------------------------------------
pandoc --wrap=none --from html --to markdown_strict

find ./ -iname "\*.html" -type f -exec sh -c 'pandoc "${0}" -o "${0%.html}.md"' {} \;

## find ./ -iname "\*.html" -type f -exec sh -c 'pandoc --wrap=none --from html --to markdown_strict "${0}" -o "${0%.html}.md"' {} \;

---

Recursivley list every single file in the working directory... 1 per line:

ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'

write-to-txt-file

ls -R ./ | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'

--------for only html-files------------------------------------------------------------------------------

## find ./ | grep -i "\.html\*$"

---

---

forfiles /S /M \*.File /C "cmd /c rename @file @fname.js"

---

Recreate folder structure with only specific file types

find . -type f -name '\*.md' | cpio -p -d -v './../markdown-folder'

find . -type f -name '\*.md' | cpio -p -d -v './../markdown-folder'

find . -type f -name '\*.md' | cpio -p -d -v './..'

find . -type f -name '\*.png' | cpio -p -d -v './\_ext'

find . -name '\*.README.md' | cpio -pdm './extension-readme'

find . -name '\*.md' | cpio -pdm './../Markdown'

## find . -name '\*.git' | cpio -pdm './GIT-FOLDERS'

7.) ()===>

---

8.) Command Prompt: code --list-extensions
for /F "tokens=\*" %A in (extensions.list) do code --install-extension %A

---

9.)Create a soft link in the home dir
ln -s /mnt/c/0-a-A-October

---

10.)
sudo apt update
sudo apt upgrade
git config --global user.name bryan
git config --global user.email bryan.guner@gmail.com
sudo apt update
sudo apt install build-essential
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
. ./.bashrc
nvm install --lts
sudo apt install unzip
npm install -g mocha
npm audit fix -F
npm audit fix -f
npm install -g mocha
sudo apt update
sudo apt upgrade
sudo apt install python3

---

Command Line vscode
code --list-extensions
code --disable-extension <ext-name>

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

dockerd

---

killall node

---

sudo service postgresql stop
sudo service postgresql start
sudo service postgresql restart

---

sed -e '/.git/ {
$!N
d
}'index.html

wget \
 --recursive \ # Download the whole site.
--page-requisites \ # Get all assets/elements (CSS/JS/images).
--adjust-extension \ # Save files with .html on the end.
--span-hosts \ # Include necessary assets from offsite as well.
--convert-links \ # Update links to still work in the static version.
--restrict-file-names=windows \ # Modify filenames to work in Windows as well.
--domains yoursite.com \ # Do not follow links outside this domain.
--no-parent \ # Don't follow links outside the directory you pass in.
https://bryan-guner.gitbook.io/python/

wget \
 --recursive \
 --no-clobber \
 --page-requisites \
 --html-extension \
 --convert-links \
 --restrict-file-names=windows \
 --domains website.org \
 --no-parent \
 https://soybean-tulip-em56.squarespace.com/config/pages

wget \
 --recursive \
 --no-clobber \
 --page-requisites \
 --html-extension \
 --convert-links \
 --restrict-file-names=windows \
 --domains website.org \
 --no-parent \
https://cheatography.com/davechild/cheat-sheets/regular-expressions/
https://ankiweb.net/decks/

---

cat \* > ./merged-file.html

find . -type f -exec 'pandoc -s \*.docx -t markdown -o example35.md' {} \;

pandoc -s \*.docx -t markdown -o example35.md

pandoc -s \*.docx > output.md

pandoc -s \*.py > output.md

Copy file structure without the files:

rsync -a -f"+ _/" -f"- _" './'/ './structure/'/
rsync -a -f"+ _/" -f"- _" ./ ./../folder/

rsync -a -f"+ _/" -f"- _" source/ destination/

---

Remove Script tags and their content:

find ./ -iname "_.html" -type f -exec sh -c 'sed "/<script/,/<\/script>/d" _.html' {} \; >testOut.html

---

cat \*.html > node-mod-readme.html

---

Powershell remove numbers and dashes from file names:

Dir | Rename-Item –NewName { $_.name –replace " ","_" }

Dir | Rename-Item –NewName { $\_.name –replace "1","" }

Dir | Rename-Item –NewName { $\_.name –replace "2","" }

Dir | Rename-Item –NewName { $\_.name –replace "3","" }

Dir | Rename-Item –NewName { $\_.name –replace "4","" }

Dir | Rename-Item –NewName { $\_.name –replace "5","" }

Dir | Rename-Item –NewName { $\_.name –replace "6","" }

Dir | Rename-Item –NewName { $\_.name –replace "7","" }

Dir | Rename-Item –NewName { $\_.name –replace "8","" }

Dir | Rename-Item –NewName { $\_.name –replace "9","" }

Dir | Rename-Item –NewName { $\_.name –replace "9","" }

Dir | Rename-Item –NewName { $\_.name –replace "-","" }

Dir | Rename-Item –NewName { $\_.name –replace "0","" }

---

#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"

out=""

html="index.html"
out="basename $out.html"
html="index.html"
cmd() {

echo ' <!DOCTYPE html>'
echo '<html>'
echo '<head>'

echo ' <meta http-equiv="Content-Type" content="text/html">'

echo ' <meta name="Author" content="Bryan Guner">'
echo '<link rel="stylesheet" href="./assets/prism.css">'
echo ' <link rel="stylesheet" href="./assets/style.css">'
echo ' <script async defer src="./assets/prism.js"></script>'

echo " <title> directory </title>"

echo ""
echo '<style>'

echo ' a {'
echo ' color: black;'
echo ' }'
echo ''
echo ' li {'
echo ' border: 1px solid black !important;'
echo ' font-size: 20px;'
echo ' letter-spacing: 0px;'
echo ' font-weight: 700;'
echo ' line-height: 16px;'
echo ' text-decoration: none !important;'
echo ' text-transform: uppercase;'
echo ' background: #194ccdaf !important;'
echo ' color: black !important;'
echo ' border: none;'
echo ' cursor: pointer;'
echo ' justify-content: center;'
echo ' padding: 30px 60px;'
echo ' height: 48px;'
echo ' text-align: center;'
echo ' white-space: normal;'
echo ' border-radius: 10px;'
echo ' min-width: 45em;'
echo ' padding: 1.2em 1em 0;'
echo ' box-shadow: 0 0 5px;'
echo ' margin: 1em;'
echo ' display: grid;'
echo ' -webkit-border-radius: 10px;'
echo ' -moz-border-radius: 10px;'
echo ' -ms-border-radius: 10px;'
echo ' -o-border-radius: 10px;'
echo ' }'
echo ' </style>'
echo '</head>'

echo '<body>'

echo ""

# continue with the HTML stuff

echo ""

echo ""

echo "<ul>"

awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing

# awk '{print "<li>"};

# {print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

echo ""

echo "</ul>"

echo "</body>"

echo "</html>"

}

cmd $listing --sort=extension >>$html

sudo sed -i '/:::/d' ./\*.mc

sudo sed -i '/Blog at WordPress/d' ./index.html
find . -type f -exec sed -i '/Blog at WordPress/d' ./\* {} \;

sudo sed -i '/right\.html/d' ./index.html

find . -type f -exec sed -i '/walkthrough/d' ./\* {} \;

sudo sed -i '/walkthrough/d' ./\*.html

sudo sed -i '/node_modules/d' ./sitemap.html

sudo sed -i '/"raw_url":/!d' ./my-gists.json

sudo sed -i '/\.html/!d' ./sitemap.html

sudo sed -i '/index\.html/!d' ./scrap.md

sudo sed -i '/#/d' ./qandstack.py

sed -i "/"""/,/""":/d" your_file

sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/right\.html/d' ./index.html
sudo sed -i '/sol\~/d' ./right.html
sudo sed -i '/\.json/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.png/d' ./index.html  
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.js/d' ./index.html
sudo sed -i '/\.php/d' ./index.html
sudo sed -i '/\.md/d' ./index.html
sudo sed -i '/\.svg/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.jpg/d' ./index.html
sudo sed -i '/\.scss/d' ./index.html
sudo sed -i '/scss/d' ./index.html
sudo sed -i '/\.txt/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.pdf/d' ./index.html
sudo sed -i '/\.mp4/d' ./index.html
sudo sed -i '/\.pug/d' ./index.html
sudo sed -i '/\.DS_store/d' ./index.html
sudo sed -i '/\.DS_Store/d' ./index.html
sudo sed -i '/\.sql/d' ./index.html
sudo sed -i '/\.py/d' ./index.html
sudo sed -i '/\.xlsx/d' ./index.html
sudo sed -i '/\.JPG/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.eot/d' ./index.html
sudo sed -i '/\.ttc/d' ./index.html
sudo sed -i '/\.PNG/d' ./index.html
sudo sed -i '/\.java/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.go/d' ./index.html
sudo sed -i '/\.vue/d' ./index.html

sudo sed -i '/node_modules/d' ./iframes.html

sudo sed -i '/index/!d' ./index.html

sudo sed -i '/\*.html/!d' ./sitemap.html

sudo sed -i '/vercel\.app/!d' ./vercel.txt

#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"

out=""

html="sitemap.html"
out="basename $out.html"
html="sitemap.html"
cmd() {

echo ' <!DOCTYPE html>'
echo '<html>'
echo '<head>'

echo ' <meta http-equiv="Content-Type" content="text/html">'

echo ' <meta name="Author" content="Bryan Guner">'
echo '<link rel="stylesheet" href="./assets/prism.css">'
echo ' <link rel="stylesheet" href="./assets/style.css">'
echo ' <script async defer src="./assets/prism.js"></script>'

echo " <title> directory </title>"

echo ""
echo '<style>'

echo ' a {'
echo ' color: black;'
echo ' }'
echo ''
echo ' li {'
echo ' border: 1px solid black !important;'
echo ' font-size: 20px;'
echo ' letter-spacing: 0px;'
echo ' font-weight: 700;'
echo ' line-height: 16px;'
echo ' text-decoration: none !important;'
echo ' text-transform: uppercase;'
echo ' background: #194ccdaf !important;'
echo ' color: black !important;'
echo ' border: none;'
echo ' cursor: pointer;'
echo ' justify-content: center;'
echo ' padding: 30px 60px;'
echo ' height: 48px;'
echo ' text-align: center;'
echo ' white-space: normal;'
echo ' border-radius: 10px;'
echo ' min-width: 45em;'
echo ' padding: 1.2em 1em 0;'
echo ' box-shadow: 0 0 5px;'
echo ' margin: 1em;'
echo ' display: grid;'
echo ' -webkit-border-radius: 10px;'
echo ' -moz-border-radius: 10px;'
echo ' -ms-border-radius: 10px;'
echo ' -o-border-radius: 10px;'
echo ' }'
echo ' </style>'
echo '</head>'

echo '<body>'

echo ""

# continue with the HTML stuff

echo ""

echo ""

echo "<ul>"

awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing

# awk '{print "<li>"};

# {print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

echo ""

echo "</ul>"

echo "</body>"

echo "</html>"

}

cmd $listing --sort=extension >>$html

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

for f in \*.py; do cat "${f}"; echo; done > output.md

for f in \*.html; do cat "${f}"; echo; done > output.md

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

for f in \*.py; do cat "${f}"; echo; done > COMBINED_FILE.md

for f in \*.md; do cat "${f}"; echo; done > COMBINED_FILE.md

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

for f in \*.py; do cat "${f}"; echo; done > output.md

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

npm install

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

for f in \*.py; do cat "${f}"; echo; done > output.md

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

---

mv 'file' $(echo 'file' | sed -e 's/[^a-za-z0-9._-]/\_/g')

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

find . -type f -exec sed -n -e '/`javascript/,/`/p' _.html >out.js ./_ {} \;

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

--------------------------------------------Sanatize--------------------------------------------------------------

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

mv 'file' $(echo 'file' | sed -e 's/[^a-za-z0-9._-]/\_/g')

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

---

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

npm run develop
if [[-d "${f}"]]; then
cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS
}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

#!/bin/bash
(
IFS=$'\n'
for y in $(ls $1)
do
mv $1/`echo $y | sed 's/ /\\ /g'` $1/`echo "$y" | sed 's/ /\_/g'`
done
)

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

for file in \*; do mv "$file" `echo $file | tr '_' '.'` ; done

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

for file in \*; do mv "$file" `echo $file | tr ' ' '_'` ; done

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

prettier --write .

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

for file in \*; do mv "$file" `echo $file | tr '_' '.'` ; done

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"

for file in \*; do mv "$file" `echo $file | tr ' ' '_'` ; done

---

---

  <pre><code>
  #!/bin/bash 

 
link="#insert url here#" 
#links were a set of strings with just the index of the video as the variable 
 
num=3  
#first video was numbered 3 - weird.  
 
ext=".mp4" 
 
while [ $num -le 66 ] 
do 
      wget $link$num$ext -P ~/Downloads/ 
      num=$(($num+1)) 
done 
  
</code></pre>

---

sudo sed -i '/{#3585 \.graf \.graf--mixtapeEmbed \.graf-after--p /d' ./\*.md

print a dummy text file in each folder

for x in "./"/_/; do
(cd "$x"
files=(_)
printf '%s\n' "${files[@]}" > deleteme.txt
)
done

---

download all links of given file type

wget -r -A.pdf https://overapi.com/git

wget -r -A.pdf https://www.analog.com/en/education/education-library/scientist_engineers_guide.html#Foundations

wget -r -A.pdf https://norwex.biz/en_US/?gclid=EAIaIQobChMIgOLa0ILN8gIVmozICh2IyQpbEAAYASAAEgIIdvD_BwE

wget -r -A.html https://bgoonz-blog-v3-0.netlify.app/

---

for file in \*.
do

sudo sed -i '/Copyright/d' ./\*.html

done

sudo sed -i '/Support/d' ./_.html
sudo sed -i '/MIT/d' ./_.html
sudo sed -i '/License/d' ./_.html
sudo sed -i '/Contributors/d' ./_.html
sudo sed -i '/Copyright/d' ./_.html
sudo sed -i '/copyright/d' ./_.html
sudo sed -i '/Copyright &copy; /d' ./\*.html

sudo sed -i '/\.json/d' ./index.html

sudo sed -i '/\.gif/d' ./index.html

sudo sed -i '/\.png/d' ./index.html

sudo sed -i '/\.css/d' ./index.html

sudo sed -i '/\.js/d' ./index.html

sudo sed -i '/\.php/d' ./index.html

sudo sed -i '/\.md/d' ./index.html

---

Remove any lines not contaning string text or blah

sudo sed -i '/\.html/!d' scrap.md

sudo sed -i '/\.html/!d' index.html

sudo sed -i '/\.js/!d' ./SCRAP.html

sudo sed -i '/CODE-MIRROR/d' ./resources.html

sudo sed -i '/!\[\](/d' ./lecture-notes.md

sudo sed -i '/\.html/d' ./index.html

sudo sed -i '/Exported from/d' ./\*.html

## sudo sed -i '/src="data:image/d' ./everyonescodepens.html

# Reinstall all npm packages

npm i npm-reinstall
reinstall

---

--------------------------------Recursivly pull and accept incomming merge changes-------------------------------------------------------------------------

<body>
  <a href="https://github.com/bgoonz" class="github-corner"
    aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250"
      style="z-index: 100000; fill:#194ccdaf; color:#fff; position: fixed; top: 20px; border: 0; left: 20px; transform: scale(-1.5, 1.5);"
      aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
      </path>
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor" class="octo-body"></path>
    </svg></a>
1865

git pull -s recursive -X ours https://github.com/Web-Dev-Collaborative/archive-backup.git
git pull -s recursive -X ours https://github.com/bgoonz/Lambda.git
git pull -s recursive -X theirs url

git pull -s recursive -X theirs https://github.com/bgoonz/Lambda.git

---

Overwrite local repo:

git fetch origin
git reset --hard origin/master

git fetch origin
git reset --hard origin/main

---

Add text to the first line of every file of a certain extension in a given folder.

for f in \*.js; do printf '%s\n' 0a '//------------------------------------------------------------------------------------------------' . x | ex "$f"; done

for f in \*.html; do printf '%s\n' 0a '<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>;' . x | ex "$f"; done

https://raw.githubusercontent.com/bgoonz/styling-templates/master/bootstrap3/assets/css/bootstrap.min.css

for f in \*.html; do printf '%s\n' 0a '<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://gist.githubusercontent.com/bgoonz/37bca66ce8441c688900b6f082f10560/raw/2e9a5966431d89b8ce6355e7b8039ba42554978b/CSS-Styling-for-Pandoc-generated-html.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="https://raw.githubusercontent.com/bgoonz/styling-templates/master/bootstrap3/assets/css/bootstrap.min.css"></head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
------------------------------------------------------How to add to end of file:------------------------------------------------------

echo "</body></html>" | tee -a \*.html

---

---

Input Output error

wsl.exe --shutdown then Get-Service LxssManager | Restart-Service

---

Replace the string source with target in all files in the current directory and all sub-directories:

find . -type f -exec rename 's/source/target/' {} \;
Replace the string source with target in all directories in the current directory and all sub-directories:

find . -type d -exec rename 's/source/target/' {} \;

find . -type f -exec rename 's/\_/-/' {} \;

find . -type f -exec rename 's/\_gif//' {} \;

find . -type f -exec rename 's/\_jpg//' {} \;

find . -type f -exec rename 's/\.svg//' {} \;

find . -type f -exec rename 's/\~/\-/' {} \;

---

I use this one-liner to remove invalid characters in subtitle files:

for f in _.srt; do nf=$(echo "$f" |sed -e 's/[^a-za-z0-9.-]/./g;s/\.\.\././g;s/\.\././g'); test "$f" != "$nf" && mv "$f" "$nf" && echo "$nf"; done
Only process _.srt files( _ could be used in place of _.srt to process every file)
Removes all other characters except for letters A-Za-z, numbers 0-9, periods ".", and dash's "-"
Removes possible double or triple periods
Checks to see if the file name needs changing
If true, it renames the file with the mv command, then outputs the changes it made with the echo command
It works to normalize directory names of movies:

for f in _/; do nf=$(echo "$f" |sed -e 's/[^a-za-z0-9.]/./g' -e 's/\.\.\././g' -e 's/\.\././g' -e 's/\._$//'); test "$f" != "$nf" && mv "$f" "$nf" && echo "$nf"; done

for f in \*/; do nf=$(echo "$f" |sed -e 's/[^a-za-z0-9.-]/./g;s/\.\.\././g;s/\.\././g'); test "$f" != "$nf" && mv "$f" "$nf" && echo "$nf"; done

---

To remove any number of trailing spaces from file names you can use rename (prename) :

rename 's/ _$//' _

find ./ -type f -exec rename 's/ _$//' _' {} \;

## find ./ -type d -exec rename 's/ _$//' _ {} \;

-----------------------------Get tripple backtick code blocks----------------------------------------------------------------------------------
sed -n '/^`/,/^`/ p' < input.file

---

Recursivley remove files by name:

find . -name hts-log.txt -type f -exec rm -rf {} \;
find . -name cookies.txt -type f -exec rm -rf {} \;

find . -name fade.gif -type f -execcp rm -rf {} \;

find . -name right.html -type f -exec cp rm -rf {} \;

Recursivley remove folders by name.

find . -type f -exec sed -i '/Mirrored from/d' ./\* {} \;

find . -type f -exec sed -i '/Exported from /d' ./\* {} \;

## find . -type f -exec sed -i '/define/d' ./\* {} \;

Passionate Web Developer, Electrical Engineer, Audio Engineer and Musician / Teacher! A passionate Web Developer, Electrical Engineer, Musician & Producer 🔭 Contract Web Development Relational Concepts 🌱 I’m currently learning React/Redux, Python, Java, Express, jQuery 👯 I’m looking to collaborate on Any web audio or open source educational tools. 🤝

---

error: refs/remotes/origin/depfu/update/core-siteother-pagesweeksweek-10sequelize-recipe-box-solution/npm/pug-3.0.2 does not point to a valid object!

#!/bin/sh

set -e

if [ $# -eq 0 ]; then
dir="."
else
dir="$1"
fi

if [ ! -d "$dir" ]; then
echo "not a dir: $dir"
exit 1
fi

if [ ! -d "$dir/.git" ]; then
echo "not a git repo: $dir"
exit 1
fi

cd "$dir"

files=$(find .git/refs -type f)

for f in $files; do
    id=$(cat "$f")
    if ! git rev-parse --quiet "$id" \

> /dev/null 2>&1; then
> continue
> fi
> if ! git rev-parse --quiet --verify "$id^{commit}" \
> /dev/null 2>&1; then

    echo "Removing ref $f with missing commit $id"
    rm "$f"

fi
done

if [ ! -f .git/packed-refs ]; then
exit 0
fi

packfiles=$(cat .git/packed-refs \
 | grep -v '#' \
 | awk '{print $2}')

for f in $packfiles; do
    if ! git rev-parse --quiet --verify "$f" \

> /dev/null 2>&1; then
> continue
> fi
> id=$(git rev-parse "$f")
> if ! git rev-parse --quiet --verify "$id" \
> /dev/null 2>&1; then

    continue
    fi
    if ! git rev-parse --quiet --verify "$id^{commit}" \

> /dev/null 2>&1; then
> echo "Removing packed ref $f with missing commit $id"
> git update-ref -d $f
> fi
> done

git config --system core.longpaths true

find . -name "\* \*" -type f | rename 's/.png.html.png/.png/g'

----------------------Index of Iframes----------------------------------------------------------------------------

#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"

out=""

html="index.html"
out="basename $out.html"
html="index.html"
cmd() {

echo ' <!DOCTYPE html>'
echo '<html>'
echo '<head>'

echo ' <meta http-equiv="Content-Type" content="text/html">'

echo ' <meta name="Author" content="Bryan Guner">'
echo '<link rel="stylesheet" href="./assets/prism.css">'
echo ' <link rel="stylesheet" href="./assets/style.css">'
echo ' <script async defer src="./assets/prism.js"></script>'

echo " <title> directory </title>"

echo ""
echo '<style>'

echo ' a {'
echo ' color: black;'
echo ' }'
echo ''
echo ' li {'
echo ' border: 1px solid black !important;'
echo ' font-size: 20px;'
echo ' letter-spacing: 0px;'
echo ' font-weight: 700;'
echo ' line-height: 16px;'
echo ' text-decoration: none !important;'
echo ' text-transform: uppercase;'
echo ' background: #194ccdaf !important;'
echo ' color: black !important;'
echo ' border: none;'
echo ' cursor: pointer;'
echo ' justify-content: center;'
echo ' padding: 30px 60px;'
echo ' height: 48px;'
echo ' text-align: center;'
echo ' white-space: normal;'
echo ' border-radius: 10px;'
echo ' min-width: 45em;'
echo ' padding: 1.2em 1em 0;'
echo ' box-shadow: 0 0 5px;'
echo ' margin: 1em;'
echo ' display: grid;'
echo ' -webkit-border-radius: 10px;'
echo ' -moz-border-radius: 10px;'
echo ' -ms-border-radius: 10px;'
echo ' -o-border-radius: 10px;'
echo ' }'
echo ' </style>'
echo '</head>'

echo '<body>'

echo ""

# continue with the HTML stuff

echo ""

echo ""

echo "<ul>"

awk '{print "<iframe src=\""$1"\">","</iframe>"}' $listing

# awk '{print "<li>"};

# {print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing

echo ""

echo "</ul>"

echo "</body>"

echo "</html>"

}

cmd $listing --sort=extension >>$html

---

convert .ipynb to html

function RecurseDirs ()
{
oldIFS=$IFS
    IFS=$'\n'
for f in "$@"
do

# YOUR CODE HERE!

ipython nbconvert \*.ipynb --to html

        if [[ -d "${f}" ]]; then
            cd "${f}"
            RecurseDirs $(ls -1 ".")
            cd ..
        fi
    done
    IFS=$oldIFS

}
RecurseDirs "./"
Best Developer Tools Resources and Tools for Entrepreneurs
OpenGraph is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you.

Featured
Branding & Logo
Content Idea Generators
Writing
Design Tools
Developer Tools
Social Image Generators
Stock Photos
Stock Videos
Illustrations
Mockups
Image Optimizers
Analytics
Get A Free PDF Version of This List: Contains 90+ resources found here
john.doe@example.com

Send me the PDF
Toast.log
Toast.log
See errors, warnings, and logs as they happen on your site — without having to open the browser’s console.

CSS Scan
CSS Scan
Goodbye to "Inspect Element" — Visualize the CSS of any element you hover over, instantly, and copy its entire rules with a single click.

CSS Scan Pro
CSS Scan Pro
CSS Scan Pro makes it radically easy to get the looks of your favorite websites. Hover over any element, and get everything you need (styles, animations, assets, etc...), instantly. Copy elements with a single click, or edit them with our intuitive CSS editor, without writing code.

The base URL is https://cdn.jsdelivr.net/gh/{username}/{repo}/, where you replace {username} with the GitHub username and {repo} with the repository name for the project. Append that URL with the path to the file you want to access in the project.

The base URL is https://cdn.jsdelivr.net/gh/{username}/{repo}/, where you replace {username} with the GitHub username and {repo} with the repository name for the project.
Append that URL with the path to the file you want to access in the project. For example, for this repo: the style file is located in the root directory. You'd use this.
html `

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/code-highlight.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/table-of-contents.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/Theme%20(1).css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/Theme%20(2).css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/Theme%20(3).css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/Theme%20(4).css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/Theme%20(5).css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/gitbook-style-full.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/basic-docs.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/blog-modern.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/boilerplate.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/codepen-embed.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/darcula.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/dark.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/darkula.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/default.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/dirhtml-left.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/dracula.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/github-gist.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/github-mm.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/github.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/googlecode.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/gradient-dark.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/gradient.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/grayscale.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/jquery-ui.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/jquery-ui.structure.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/jquery-ui.theme.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/kavadocs.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/left.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/markdown-to-html-style.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mdn-article.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/medium-basic-export.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/mono-blue.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/monokai-sublime.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/monokai.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/notion.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/obsidian.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/out.txt.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/prism.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/right.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/style.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/twilight.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/vs.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/vs2015.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/xcode.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/zenburn.css">
<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/TableEditor.js"></script>
<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/autosize.min.js"></script>
<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/copy-2-clip.js"></script>
<script async defer src="https://cdn.jsdelivr.net/gh/bgoonz/GIT-CDN-FILES/git.js"></script>
