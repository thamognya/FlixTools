#!/bin/sh

docker run --name flixtools -e POSTGRES_USER=flixtools -e POSTGRES_PASSWORD=flixtools -p 5432:5432 -d postgres
