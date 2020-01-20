# personium-event-listener

Tool for deploying user which listens events.

## What is this

This tool generates template user which is enable to listen events triggered in own cell.

## Before using

Please make user which assigned a role which has `Event` and `EventRead` privileges in target cell.

And update `config.js` to adopt to target cell.

## How to generate template

### install packages for generating

```cmd
npm install
```

### generate template

```cmd
node index.js <dst>
```

`<dst>` means destination folder containing user template.

## How to use template

### Move to template folder

```cmd
cd <dst>
```

### install packages for deploying

```cmd
npm install
```

### build and deploy

```cmd
npm run build
npm run deploy
```
