#!/bin/bash

MSG="$(date)"

if [ "$1" ]; then
    MSG="$1"
fi

git add .
git status
git commit -a -m "$MSG"
git push
