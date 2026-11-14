<#
.SYNOPSIS
    Opens this checkout in a new VS Code window signed in to Claude Code as the given account.

.EXAMPLE
    ./launch-as lachlan

.NOTES
    A thin wrapper over the claude-account-switcher skill's script. The account must already be
    set up there (run its "list" to see them). The window opens on the folder this file sits in.
#>
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string] $Account
)

$switcher = Join-Path $HOME '.claude\skills\claude-account-switcher\scripts\claude-accounts.ps1'
if (-not (Test-Path $switcher)) {
    Write-Error "Account switcher not found at $switcher. Install the claude-account-switcher skill first."
    exit 1
}

powershell.exe -NoProfile -ExecutionPolicy Bypass -File $switcher open $Account -Project $PSScriptRoot
exit $LASTEXITCODE
