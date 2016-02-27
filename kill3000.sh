#!/bin/bash
lsof -i tcp:3000 | awk 'NR!=1 {print $2}' | xargs kill