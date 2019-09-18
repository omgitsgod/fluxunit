# fluxunit

A simple way to convert units of measurement

# Temperature:
```javascript
const { temp } = require('fluxunit');
```
## Convert Celsius to Fahrenheit:
```javascript
temp.c2F(0); // 32
```
## Convert Celsius to Kelvin:
```javascript
temp.c2K(20); // 293.15
```
## Convert Celsius to Rankine:
```javascript
temp.c2R(20); // 527.67
```
## Convert Fahrenheit to Celsius:
```javascript
temp.f2C(32); // 0
```
## Convert Fahrenheit to Kelvin:
```javascript
temp.f2K(60); // 288.71
```
## Convert Fahrenheit to Rankine:
```javascript
temp.f2R(68); // 527.67
```
## Convert Kelvin to Fahrenheit:
```javascript
temp.k2F(300); // 80.33
```
## Convert Kelvin to Celsius:
```javascript
temp.k2C(300); // 26.85
```
## Convert Kelvin to Rankine:
```javascript
temp.k2R(300); // 540
```
## Convert Rankine to Celsius:
```javascript
temp.r2C(0); // -273.15
```
## Convert Rankine to Fahrenheit:
```javascript
temp.r2F(300); // -159.67
```
## Convert Rankine to Kelvin:
```javascript
temp.r2K(18); // 10
```
