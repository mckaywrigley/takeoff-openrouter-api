# Takeoff: OpenRouter API

This module is a guide to the OpenRouter API.

## Resources

- [Takeoff](https://JoinTakeoff.com)
- [OpenRouter Quick Start](https://openrouter.ai/docs#quick-start)
- [OpenRouter Models](https://openrouter.ai/models)

## Recommendations

We recommend using [Cursor](https://cursor.sh/) to write code.

## Prerequisites

You will need an OpenRouter API Key.

Get one [here](https://openrouter.ai/keys).

Copy the `.env.example` file to `.env`.

```bash
cp .env.example .env
```

In `.env`, fill in the API key.

```bash
OPENROUTER_API_KEY=your-openrouter-api-key
```

## Install Packages

```bash
npm i
```

## Structure

The example code is in the `examples` folder.

Your code is in the `me` folder.

## Run Code

Install `tsx` to run the examples.

```bash
npm i -g tsx
```

Example: Run the `standard-chat` file.

Copy the relative path of the file.

For the example code, run the following command:

```bash
tsx examples/standard-chat.ts
```

For your code, run the following command:

```bash
tsx me/standard-chat.ts
```
