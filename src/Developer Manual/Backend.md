# Backend

This is the manual on how to configure and run the backend of the ["IU Alumni"](https://github.com/TheSharpOwl/inno-alumni-portal).

## Configuration

This configuration is required to run the app locally. One exception is step 4 also required to run app with docker

1. Create a python virtual environment:

    ```bash
    venv env
    ```

2. Install the requirements from the root directory:

    ```bash
    pip install -r requirements.txt 
    ```

3. Generate prisma account inside app directory:

    ```bash
    cd app
    prisma generate
    cd ..
    ```

4. Define `.env` file
    - Have no idea what should be inside of `.env` and what problems could follow after but right now the backend does not work without `.env` file

## How to run

### Run on local machine

After all the configurations are done you can run backend on your local machine with

```bash
uvicorn app.main:app --host <host> --port <port> --reload
```

### Run with docker

After `.env` file was defined you can run the project with docker as follows

1. Build the docker image from `backend.Dockerfile`:

    ```bash
    docker build ./ -t <image_name> -f backend.Dockerfile
    ```

2. Run the docker image:

    ```bash
    docker run --name=<container_name> -p=<port>:8000 <image_name>
    ```
