<#
.SYNOPSIS
  Refreshes the demo site from the artboards in the main shaw-plugin-dashboard checkout.

.DESCRIPTION
  Copies four artboard pages, their shared assets and support.js into this folder, then patches
  them for the demo:
    - each page loads demo-nav.js, which makes the Shaw and Partners logo go back to index.html;
    - each page gets its browser-tab title from $titles below (the artboards carry none);
    - stylesheet links into the design project's _ds/<system>/tokens/ folder are pointed at assets/ds/,
      which holds the same files;
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
  'checklist-options.html'  = 'ofa\ofa-checklist-options.dc.html'
}

# Demo page name -> browser-tab title. Muhammed's own names; edit here, not in the page.
$titles = @{
  'plugin0.html'            = 'Shaw Portal - Component Library'
  'portfolio-services.html' = 'Shaw Portal - Portfolio Services Dashboard'
  'advisor.html'            = 'Shaw Portal - Advisor Dashboard'
  'compliance.html'         = 'Shaw Portal - Compliance Dashboard'
  'checklist-options.html'  = 'Shaw Portal - OFA Checklist Options'
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
  $p = Replace-Once $p '<script src="./support.js"></script>' ('<script src="./support.js"></script>' + "`n" + '<script src="./demo-nav.js"></script>' + "`n" + '<title>' + $titles[$name] + '</title>') $name
  # The designer's pages link their tokens from the design project's _ds folder; the same files are in assets/ds.
  # A page that links the whole system (styles.css) gets the token files the demo has, and the system's
  # component bundle is dropped: the pages draw their own markup and do not use it.
  $p = [regex]::Replace($p, '<link rel="stylesheet" href="_ds/[^/"]+/styles\.css">', (
    @('roboto', 'material-symbols', 'colors', 'app', 'app-specimen') | ForEach-Object { '<link rel="stylesheet" href="assets/ds/' + $_ + '.css">' }) -join "`n  ")
  $p = [regex]::Replace($p, '\s*<script src="_ds/[^/"]+/_ds_bundle\.js"></script>', '')
  $p = [regex]::Replace($p, '_ds/[^/"]+/tokens/(app-fonts/)?', 'assets/ds/')
  if ($p -match '_ds/') { throw "$name : still links the design project's _ds folder, which the demo does not have. Update this script." }
  [IO.File]::WriteAllText((Join-Path $Out $name), $p, $utf8)
  Write-Host ("{0,-24} <- {1}" -f $name, $pages[$name])
}
Write-Host 'Done. Check the pages locally, then commit and push.'
