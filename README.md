# Yet Another Pretty JSON

> Pipe your `json` into `yap-json` to make it pretty

<p align="center">
<img src="https://github.com/cesarferreira/yap-json/raw/master/extras/pretty.png" width="100%" />
</p>

## Features

- [x] Pipe `json` for a pretty colourful output
- [x] What else do you need? Jesus, move along!

## Usage

```bash
curl -s https://api.github.com/users/cesarferreira | yap-json
```

```bash
echo '{"foo": "lorem", "bar": "ipsum"}' | yap-json
```

```bash
cat myfile.json | yap-json
```

## Installation

```bash
yarn global add yap-json
```

or

```bash
npm install yap-json -g
```

## Contributing
I welcome and encourage all pull requests. It usually will take me within 24-48 hours to respond to any issue or request. Here are some basic rules to follow to ensure timely addition of your request:
  1. If its a feature, bugfix, or anything please only change code to what you specify.
  2. Please keep PR titles easy to read and descriptive of changes, this will make them easier to merge :)
  3. Pull requests _must_ be made against `master` branch. Any other branch (unless specified by the maintainers) will get rejected.
  4. Check for existing [issues](https://github.com/cesarferreira/yap-json/issues) first, before filing an issue.
  5. Have fun!

### Created & Maintained By
[Cesar Ferreira](https://github.com/cesarferreira) ([@cesarmcferreira](https://www.twitter.com/cesarmcferreira))
