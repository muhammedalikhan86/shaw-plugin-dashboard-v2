# Regenerates queue-data.js from queue.md so queue.html also works opened from the folder (file://),
# where a browser blocks fetch('queue.md'). The hub copies queue.md here and then runs this script.
# It copies queue.md as it is; queue.html itself drops any "Now" section and puts "Hub" first, so a refresh keeps that shape.
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$md = [System.IO.File]::ReadAllText((Join-Path $here 'queue.md'), [System.Text.Encoding]::UTF8)
$literal = ConvertTo-Json -InputObject $md -Compress
$js = "// Generated from queue.md by update-queue-data.ps1. Do not edit by hand.`nwindow.QUEUE_MD = $literal;`n"
[System.IO.File]::WriteAllText((Join-Path $here 'queue-data.js'), $js, (New-Object System.Text.UTF8Encoding $false))
Write-Output "queue-data.js written ($($md.Length) characters)"
