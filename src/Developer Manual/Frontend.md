# Frontend

This is the manual on how to configure and run the frontend of the ["IU Alumni"](https://github.com/TheSharpOwl/inno-alumni-portal).

## Configuration

This configuration is required to run the app locally.

The ["IU Alumni"](https://github.com/TheSharpOwl/inno-alumni-portal) project does not requiters any specific configurations other than instaling the nessesary requirements

In order to install the requirements simply execute `npm install` in the root directory of the project

```bash
npm install
```

## How to run

### Run on local machine

In order to run the project in the dev mode execute `next-dev` script using `npm`

```bash
npm run next-dev
```

it will start the project and print to the console the port where frontend is running

### Run with docker

1. Build the docker image from `frontend.Dockerfile`:

    ```bash
    docker build ./ -t <image_name> -f frontend.Dockerfile
    ```

2. Run the docker image with specific port:

    ```bash
    docker run --name=<container_name> -p=<port>:80 <image_name>
    ```
