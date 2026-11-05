# status-api

A tiny service status endpoint. Used as the demo repository for [Airlock](https://github.com/Darkflib/airlock): its pull requests change dependencies so Airlock can show what each change does before it is merged.

> [!WARNING]
> **Some open pull requests here contain deliberately malicious code.** They exist so Airlock has something real to catch:
>
> - PR #3 vendors `colorful-logs`, whose install script reads `~/.npmrc` and `~/.aws/credentials` and tries to send them out.
> - PR #4 vendors `tinystamp`, whose install script collects every dotfile in your home directory, plus config and credential files one level inside dot-directories (`~/.aws/credentials`, `~/.ssh/config`, …), and tries to send them out.
>
> Every destination they use is unroutable: `*.invalid` names never resolve, and `203.0.113.7` is a reserved documentation address. Even so, **don't check out those branches and run `npm install`, `npm ci` or `npm test` on a machine with real credentials.** Read them on GitHub, or watch Airlock detonate them in a throwaway microVM holding fake credentials.

`main` itself is harmless:

```sh
npm install
npm test
npm start
```

OMG! It's full of stars...
Life is like a box of chocolates...
