FROM node:19-alpine

# Expose gatsby + vscode debug ports
EXPOSE 8000 9929

# Set working directory
WORKDIR /app

# Prepare container to install gatsby packages with yarn
# Ref: https://hub.docker.com/r/futureys/gatsby/dockerfile
RUN apk add --no-cache \
# git: gatsby new command depends on git
    git \
# util-linux: gatsby develop calls lscpu
# openssl, sudo: gatsby develop --https uses
    util-linux openssl sudo \
# node-sess version 4 uses g++ and still requires python2
# see: https://github.com/sass/node-sass/issues/2877
    python3 g++ \
# gatsby-plugin-sharp depends on imagemin-mozjpeg,
# imagemin-mozjpeg depends on mozjpeg,
# mozjpeg requires compiling from source with autoreconf, automake, libtool, gcc, make, musl-dev, file, pkgconfig, nasm
# see: https://pkgs.alpinelinux.org/contents?page=1&file=autoreconf
# see: https://github.com/buffer/pylibemu/issues/24#issuecomment-492759639
# see: https://github.com/maxmind/libmaxminddb/issues/9#issuecomment-30836272
# see: https://stackoverflow.com/questions/28631817/no-acceptable-c-compiler-found-in-path/57419374#57419374
# see: https://pkgs.alpinelinux.org/contents?branch=v3.3&name=file&arch=x86&repo=main
# see: https://stackoverflow.com/questions/17089858/pkg-config-pkg-prog-pkg-config-command-not-found/17106579#17106579
# see: https://github.com/alicevision/AliceVision/issues/593#issuecomment-457194176
    autoconf automake libtool gcc make musl-dev file pkgconfig nasm \
# sharp depends on vips
# see: https://github.com/lovell/sharp/issues/773
    vips \
 && rm -fR /var/cache/apk/*

# Install gatsby CLI globally
RUN yarn global add gatsby-cli

# Copy package files into workdir
COPY package.json .
COPY yarn.lock .

# Install + build gatsby packages with yarn
RUN yarn install && yarn build && yarn cache clean

# Copy project into workdir
COPY . .
