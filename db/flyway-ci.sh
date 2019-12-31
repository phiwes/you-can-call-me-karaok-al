#!/bin/bash
set -e
rootPath=$(echo $PWD)
docker pull boxfuse/flyway:#{FLYWAY_VER_TAG}
docker run -e FLYWAY_EDITION='pro' --rm \
    -v "$rootPath/conf":/flyway/conf \
    -v "$rootPath/drivers":/flyway/drivers \
    -v "$rootPath/sql":/flyway/sql \
    boxfuse/flyway:#{FLYWAY_VER_TAG} \
    -configFiles=/flyway/conf/flyway-ci.conf \
    $@