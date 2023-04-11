# Issue with importing enum to FE

## Setup

This project uses Vite@4.2 and React@18.2 for FE, and prisma@4.12 for BE.

## Problem

- You can import enum to BE as value and use them as normal
- You can't import enum to FE to use them as value. The error is as follow

```
UNcaught SyntaxError: The requested module '......./minimal-prisma-enum/server/node_modules/@prisma/client/index-browser.js?v=dde3cd34' does not provide an export named 'Question_type'
```
