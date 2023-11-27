# Branch
Create:
  - local: `git checkout -b [branch name]`
  - remote: `git push -u origin [branch name]`

Delete:
  - local: `git branch -d [branch name]`
  - remote: `git push -d origin [branch name]`

Fetch remote branch: `git checkout --track origin/[branch name]`

# Gitflow basic usage
1. `sudo apt install git-flow`
1. Initialize git-flow inside an existing git repository: `git flow init`. Agree with default answers on questions regarding the naming conventions for branches
1. Start a new feature: `git flow feature start [feature name]`
1. Finish up a feature: `git flow feature finish [feature name]`
1. Push changes to origin develop: `git push`

Source: https://danielkummer.github.io/git-flow-cheatsheet

# Stash
Stash: `git stash`  
Restore and delete stash: `git stash pop`
