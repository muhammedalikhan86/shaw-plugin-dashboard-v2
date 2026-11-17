<#
.SYNOPSIS
    Opens this checkout in a new VS Code window (or, with -Terminal, a terminal window) signed in
    to Claude Code as the given account.

.EXAMPLE
    ./launch-as lachlan

.EXAMPLE
    ./launch-as lachlan -Terminal

.NOTES
    A thin wrapper over the claude-account-switcher skill's script. The account must already be
    set up there (run its "list" to see them). The window opens on the folder this file sits in.
#>
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string] $Account,

    # Open Claude Code in a terminal window instead of VS Code.
    [switch] $Terminal
)

$switcher = Join-Path $HOME '.claude\skills\claude-account-switcher\scripts\claude-accounts.ps1'
if (-not (Test-Path $switcher)) {
    Write-Error "Account switcher not found at $switcher. Install the claude-account-switcher skill first."
    exit 1
}

$switcherArgs = @('-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', $switcher, 'open', $Account, '-Project', $PSScriptRoot)
if ($Terminal) { $switcherArgs += '-Terminal' }
powershell.exe @switcherArgs
exit $LASTEXITCODE
