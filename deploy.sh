#!/bin/bash

MSG="$(date)"

if [ "$1" ]; then
    MSG="$1"
fi

git add .
git commit -a -m "$MSG"
git status
git push
