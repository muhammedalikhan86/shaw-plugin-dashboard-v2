# Checks each test-site (UAT) part once and writes uat-status.json, which update-uat-data.ps1 folds into
# uat-data.js. The page shows the result as it was at that moment; it never checks live.
#   API parts:  GET <api>/configuration as you (Windows auth); 200 = up, and its webAPIVersion gives the commit.
#   Web parts:  GET the shell page, or a plugin's remoteEntry.json; 200 = up.
# Read only: GET requests, nothing else. Only the result, HTTP code and commit are kept, never the
# signed-in user or any other part of the answer (this repo is public).
# Run it on a machine on the Shaw network, then run update-uat-data.ps1, then commit.
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$intranet = 'https://intranet.shawandpartners.com.au'
$site = "$intranet/ShawPortalUAT"
$api = "$intranet/api/shawportaluat"

$checks = [ordered]@{
    'shell-web'                = "$site/"
    'shell-api'                = "$api/shell/configuration"
    'landing-page-web'         = "$site/landing-page/remoteEntry.json"
    'portfolio-services-web'   = "$site/portfolio-services/remoteEntry.json"
    'portfolio-services-api'   = "$api/portfolioservices/configuration"
    'advisor-dashboard-web'    = "$site/advisor-dashboard/remoteEntry.json"
    'advisor-dashboard-api'    = "$api/advisordashboard/configuration"
    'compliance-dashboard-web' = "$site/compliance-dashboard/remoteEntry.json"
    'compliance-dashboard-api' = "$api/compliancedashboard/configuration"
}

$results = [ordered]@{}
foreach ($part in $checks.Keys) {
    $code = 0; $commit = $null
    try {
        $r = Invoke-WebRequest $checks[$part] -UseDefaultCredentials -UseBasicParsing -TimeoutSec 20
        $code = [int]$r.StatusCode
        if ($part -like '*-api') {
            $v = ($r.Content | ConvertFrom-Json).webAPIVersion
            if ($v -match '\+([0-9a-f]{8})') { $commit = $Matches[1] }
        }
    } catch {
        $resp = $_.Exception.Response
        if ($resp) { $code = [int]$resp.StatusCode }
    }
    $results[$part] = [ordered]@{ up = ($code -eq 200); code = $code; commit = $commit }
    Write-Output ("{0,-26} {1}" -f $part, $(if ($code -eq 200) { 'up' } elseif ($code) { "down ($code)" } else { 'down (no answer)' }))
}

$data = [ordered]@{ checked = (Get-Date).ToString('yyyy-MM-ddTHH:mm:ss'); parts = $results }
[System.IO.File]::WriteAllText((Join-Path $here 'uat-status.json'), (ConvertTo-Json $data -Depth 4), (New-Object System.Text.UTF8Encoding $false))
Write-Output 'uat-status.json written'
