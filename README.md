# newest

npm install -g json-server && npm install -g nodemon

create backend [https://expressjs.com/en/starter/generator.html]

create frontend [https://create-react-app.dev/]

create npm init [https://docs.npmjs.com/cli/init]

create concurrently [https://www.npmjs.com/package/concurrently]

kill port [https://www.npmjs.com/package/kill-port](npm install --global kill-port)

change backend port 3000 to 5000 (json-server -p 4000 db.json)

touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status

git push [https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line]
git add .
git commit -m "First commit"
git push origin master

api connect [https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/]

CORS: Cross-Origin-Resource-Sharing 

redux [https://www.npmjs.com/package/redux], [https://github.com/reduxjs/redux-thunk]
axios [https://www.npmjs.com/package/axios]

# Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html


