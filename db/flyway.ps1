[CmdletBinding()]
Param (
    [string]$arg
)
docker run --rm `
    -v "$PSScriptRoot\conf:/flyway/conf" `
    -v "$PSScriptRoot\drivers:/flyway/drivers" `
    -v "$PSScriptRoot\sql:/flyway/sql" `
    "boxfuse/flyway:5.2.4" `
    -configFiles="/flyway/conf/flyway-localhost.conf" `
    $arg
