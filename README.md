## What is this?

This package implements an Amazon Alexa skill that allows you to use Alexa to check on your 3D printer state and print progress.
This is an Alexa skill handler that runs in AWS Lambda. This handler interacts with the [Dynamo](https://github.com/jncornett/OctoPrint-Dynamo) Octoprint plugin via an AWS DynamoDB table.

> TODO: add full setup instructions

## Developing

1. Clone this repository:

    `git clone https://github.com/jncornett/OctoPrintDynamoAlexaLambda.git`

2. Change directories:

    `cd OctoPrintDynamoAlexaLambda`

3. Install dependencies with NPM:

    `npm install`

You are now ready to develop.

### Useful Grunt tasks

If you have the `grunt-cli` installed (via `npm install -g grunt-cli`), you can run some useful development tasks via the `grunt` command:

- `grunt release`: this will create `lambda-release.zip` in the `build/artifacts/` subdirectory. This zipfile can be uploaded to AWS lambda and comes with all required dependencies included.
- `grunt clean`: this will delete the `build/` directory.
