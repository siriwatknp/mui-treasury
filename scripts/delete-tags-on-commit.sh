#!/bin/sh

if [ -z "$1" ]
then
      echo "Please provide commit hash"
      exit
fi

TAGS=`git show-ref --tags -d | grep ^$1 | sed -e 's,.* refs/tags/,,' -e 's/\^{}//'`

echo $TAGS

for t in $TAGS
do
    echo "========================================================================="
    echo "deleting tag: $t"
    git push -d origin $t
    git tag -d $t
    echo "✅ Done!"
done
