#!/bin/bash
set -e
rootPath=$(echo $PWD)
docker pull boxfuse/flyway:5.2.4
docker run --rm \
    -v "$rootPath/conf":/flyway/conf \
    -v "$rootPath/drivers":/flyway/drivers \
    -v "$rootPath/sql":/flyway/sql \
    boxfuse/flyway:5.2.4 \
    -configFiles=/flyway/conf/flyway-sandbox.conf \
    $@
