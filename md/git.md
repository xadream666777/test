```
git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit
git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容
```



## reset

a-b-c

git reset --hard "commitId"

Gitsource: 将branch重置到这次提交 :  如果重置到a，会将b c更改放置本地 如果不需要可以暂存git stash 

git push -f  后 没有b c提交记录

**git reset HEAD^ 回退上次提交**



## revert

git 回退某个 commit

> git revert -n "commitId"

此操作会将这个commit的修改撤回，vscode中会暂存撤回的修改。

- 如果不需要这个commit的修改，全部提交就全部撤回了这个commit的修改。

- 如果需要这个commit的某几个文件的修改，你就取消暂存对应的文件然后放弃修改对应的文件。

你要回退此commit哪个文件就暂存提交该文件，如果不需要回退某个文件就取消（此时 提交更改就是回退 取消更改就是不回退）



如果这次提交是别的分支合并过来的，按照提示可知需要加参数-m

git revert -m commit_id



## 合并某个提交到当前分支

git cherry-pick 