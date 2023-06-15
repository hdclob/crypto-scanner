#!/bin/bash

cd "${0%/*}"

sh ./stop.sh

docker-compose up

exit 1