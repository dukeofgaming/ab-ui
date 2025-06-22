ARG UBUNTU_VERSION=noble-20241118.1

FROM ubuntu:${UBUNTU_VERSION}

ARG NODEJS_VERSION=24
ARG NVM_VERSION=0.40.3

# Install core dependencies
RUN apt-get update 
RUN apt-get install -y \
        curl \
        default-jre \
        git \
        make \
        unzip \
        wget \
        zip \
    && rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME="/usr/lib/jvm/default-java"

# Install NVM and Node.js
ENV HOME="/root"
ENV NVM_DIR="$HOME/.nvm"

RUN curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh" | bash \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install ${NODEJS_VERSION} \
    && nvm alias default ${NODEJS_VERSION} \
    && node -v \
    && npm -v \
    && npm install -g \
        typescript \
    && npx playwright install \
    && npx playwright install-deps 

# Install D2 with Tala engine
RUN curl -fsSL https://d2lang.com/install.sh \
        | sh -s -- \
                --version v0.6.8 \
                --tala v0.4.1