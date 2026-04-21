# BadLog

A tiny, intentionally-chaotic logging library that prints your log/error message **plus a random insult**.

BadLog ships in multiple languages so you can integrate the same behavior in different stacks:

- **JavaScript / Node.js** (`badlog.js`)
- **Python** (`badlog.py`)
- **Solidity** (`badlog.sol`)

> ⚠️ Content warning: this package includes intentionally rude and insulting strings. Use only in internal demos, jokes, or controlled environments.

---

## Why this exists

BadLog is useful when you want a novelty logger for:

- hackathons
- internal game jams
- prank demos
- stress-testing log pipelines with non-standard text

It is **not** intended for production user-facing applications.

---

## Repository layout

```text
.
├── badlog.js    # Node.js module
├── badlog.py    # Python module
├── badlog.sol   # Solidity contract (event-based)
└── LICENSE
```

---

## Quick integration

## 1) Node.js

### Install style

This repo is source-first (not packaged on npm in this repository), so import the file directly:

```js
const badlog = require('./badlog');

badlog.log('Server started on port 3000');
badlog.error('Database connection failed');
```

### API

- `log(...args)` → prints your message, then a random log insult
- `error(...args)` → prints your message to stderr, then a random error insult

### Integration tip

Wrap usage behind an env flag so you can disable in CI/prod:

```js
const badlog = require('./badlog');
const logger = process.env.USE_BADLOG === '1' ? badlog : console;

logger.log('Hello');
logger.error('Oops');
```

---

## 2) Python

### Import and use

```python
import badlog

badlog.log("Starting worker")
badlog.error("Unhandled exception")
```

### API

- `log(*args)` → prints message, then random insult
- `error(*args)` → writes message, then random insult

### Integration tip

Use an adapter so callers can switch implementations without changing call-sites:

```python
import os
import badlog

logger = badlog if os.getenv("USE_BADLOG") == "1" else __import__("logging")
```

---

## 3) Solidity

`badlog.sol` includes an `InsultLogger` contract.

### Behavior

- `logWithInsult(string message)` emits `LogMessage(message, insult)`
- `errorWithInsult(string message)` emits `ErrorMessage(message, insult)`

### Example use (from another contract)

```solidity
interface IInsultLogger {
    function logWithInsult(string memory message) external;
    function errorWithInsult(string memory message) external;
}
```

Then call it where needed:

```solidity
logger.logWithInsult("Trade executed");
logger.errorWithInsult("Slippage too high");
```

> Note: the random selection uses block data and sender context. It is suitable for fun logging, not secure randomness.

---

## Production safety checklist

Before integrating into any shared environment:

- [ ] Confirm insulting text is acceptable for your team and context.
- [ ] Do **not** surface these messages to end users or customers.
- [ ] Gate usage with environment flags.
- [ ] Keep fallback to standard loggers (`console`, `logging`, etc.).
- [ ] Avoid in regulated, compliance-sensitive, or workplace-sensitive contexts.

---

## Versioning and compatibility

- JavaScript: CommonJS module export
- Python: single-file module import
- Solidity: pragma `0.8.21`

---

## License

MIT. See [LICENSE](./LICENSE).
