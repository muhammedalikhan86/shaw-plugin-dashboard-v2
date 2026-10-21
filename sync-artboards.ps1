<#
.SYNOPSIS
  Refreshes the demo site from the artboards in the main shaw-plugin-dashboard checkout.

.DESCRIPTION
  Copies four artboard pages, their shared assets and support.js into this folder, then patches
  them for the demo:
    - each page loads demo-nav.js, which makes the Shaw and Partners logo go back to index.html;
    - support.js lets a page's setting come from the address, e.g. advisor.html?seat=SM%20%C2%B7%20all%20advisors,
      and exposes window.__demoRefresh, which re-reads the address without reloading, so a page
      keeps the view it is on when demo-nav.js changes a setting.
  index.html and demo-nav.js are maintained by hand and are not touched.

  Run it, check the pages locally, then commit and push. Vercel deploys on push.

.EXAMPLE
  .\sync-artboards.ps1
  .\sync-artboards.ps1 -Source D:\repos\shaw-plugin-dashboard\docs\design\artboards
#>
param(
  [string]$Source = (Join-Path $PSScriptRoot '..\shaw-plugin-dashboard\docs\design\artboards')
)
$ErrorActionPreference = 'Stop'
$Source = (Resolve-Path $Source).Path
$Out = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)

# Demo page name -> artboard file, relative to $Source
$pages = [ordered]@{
  'plugin0.html'            = 'plugin0\Shell-Plugin0.dc.html'
  'portfolio-services.html' = 'ofa\ofa-portfolio-services.dc.html'
  'advisor.html'            = 'ofa\ofa-advisor-dashboard.dc.html'
  'compliance.html'         = 'ofa\ofa-compliance-dashboard.dc.html'
}

function Replace-Once([string]$text, [string]$find, [string]$with, [string]$what) {
  $n = ([regex]::Matches($text, [regex]::Escape($find))).Count
  if ($n -ne 1) { throw "$what : expected one match for '$find', found $n. The artboard changed shape; update this script." }
  return $text.Replace($find, $with)
}

# Shared assets. The ofa folder's set is a superset of plugin0's, and the files they share are identical.
$assets = Join-Path $Out 'assets'
if (Test-Path $assets) { Remove-Item $assets -Recurse -Force }
Copy-Item (Join-Path $Source 'ofa\assets') $assets -Recurse

# support.js, with the address-bar settings patch
$s = [IO.File]::ReadAllText((Join-Path $Source 'ofa\support.js'), $utf8)
$s = Replace-Once $s 'return h(Root, { ...defaults, ...entry.propOverrides || {} });' (
  'window.__demoRefresh = () => entry.subs.forEach((f) => f());' + "`n" +
  '      const fromUrl = {}; new URLSearchParams(location.search).forEach((v, k) => { if (entry.propsMeta && k in entry.propsMeta) fromUrl[k] = v; });' + "`n" +
  '      return h(Root, { ...defaults, ...entry.propOverrides || {}, ...fromUrl });') 'support.js'
[IO.File]::WriteAllText((Join-Path $Out 'support.js'), $s, $utf8)

foreach ($name in $pages.Keys) {
  $from = Join-Path $Source $pages[$name]
  $p = [IO.File]::ReadAllText($from, $utf8)
  $p = Replace-Once $p '<script src="./support.js"></script>' ('<script src="./support.js"></script>' + "`n" + '<script src="./demo-nav.js"></script>') $name
  [IO.File]::WriteAllText((Join-Path $Out $name), $p, $utf8)
  Write-Host ("{0,-24} <- {1}" -f $name, $pages[$name])
}
Write-Host 'Done. Check the pages locally, then commit and push.'
