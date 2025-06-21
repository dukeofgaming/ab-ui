ARG DEVCONTAINER_UBUNTU_VERSION=noble-20241118.1
ARG NODEJS_VERSION=24

FROM ubuntu:${DEVCONTAINER_UBUNTU_VERSION}

# Install core dependencies
RUN apt-get update 
RUN apt-get install -y \
        curl \
        default-jre \
        git \
        unzip \
        wget \
        zip \
    && rm -rf /var/lib/apt/lists/*

# Install NVM and Node.js
ENV HOME="/root"
ENV NVM_DIR="$HOME/.nvm"
RUN export NVM_DIR="$HOME/.nvm" \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install 24 \
    && nvm alias default 24 \
    && node -v \
    && npm -v \
    && npm install -g \
        typescript \
    && npx playwright install \
    && npx playwright install-deps 
