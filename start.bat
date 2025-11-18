@echo off
setlocal enabledelayedexpansion
set LANIP=
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr "IPv4"') do (
	set ip=%%a
	set ip=!ip: =!
	set ip=!ip:~0,15!
	rem Check if the IP is not a loopback address and not empty
	if not "!ip!"=="127.0.0.1" if not "!ip!"=="" (
		if not defined LANIP set LANIP=!ip!
	)
)
if not defined LANIP set LANIP=127.0.0.1
start "PocketBase" pocketbase.exe serve --http="0.0.0.0:8090"
timeout /t 2 >nul
start "OpenTeacher" cmd /c "start "" "http://localhost:8090/pb_public/index.html?role=teacher^&password=tpet^&lanip=!LANIP!""
endlocal