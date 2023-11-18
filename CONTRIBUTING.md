# Pol Gubau Amores' Portfolio Contributing Guide

Thank you for being interested in contributing, please before writing code take a minute to read this file :)


### Tooling

- [NPM](https://npmjs.com/) to manage packages and dependencies
- [ESLint](https://eslint.org/) to lint the code
- [Prettier](https://prettier.io/) to format the code
- [Jest](https://jestjs.io/) to test the code
- [TypeScript](https://www.typescriptlang.org/) to write the code
- [React](https://reactjs.org/) to build the UI
- [Next.js](https://nextjs.org/) to build the app
- [Tailwind CSS](https://tailwindcss.com/) to style the app



### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`


If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
