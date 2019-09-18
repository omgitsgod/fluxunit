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
# Distance:
```javascript
const { dist } = require('fluxunit');
```
## Convert Centimeters to Feet:
```javascript
dist.cm2FT(91.44); // 3
```
## Convert Centimeters to Inches:
```javascript
dist.cm2IN(127); // 50
```
## Convert Centimeters to Millimeters:
```javascript
dist.cm2MM(20); // 200
```
## Convert Feet to Centimeters:
```javascript
dist.ft2CM(2); // 60.96
```
## Convert Feet to Millimeters:
```javascript
dist.ft2MM(2); // 609.6
```
## Convert Feet to Inches:
```javascript
dist.ft2IN(2); // 24
```
## Convert Feet to Meters:
```javascript
dist.ft2M(2); // 0.6096
```
## Convert Inches to Centimeters:
```javascript
dist.in2CM(20); // 50.8
```
## Convert Inches to Feet:
```javascript
dist.in2FT(24); // 2
```
## Convert Inches to Meters:
```javascript
dist.in2M(20); // 0.508
```
## Convert Inches to Millimeters:
```javascript
dist.in2MM(20); // 508
```
## Convert Kilometers to Miles:
```javascript
dist.km2MI(20); // 12.427423844746679
```
## Convert Meters to Feet:
```javascript
dist.m2FT(0.6098); // 2
```
## Convert Meters to Inches:
```javascript
dist.m2IN(0.508); // 20
```
## Convert Miles to Kilometers:
```javascript
dist.mi2KM(12.427423844746679); // 20
```
## Convert Millimeters to Centimeters:
```javascript
dist.mm2CM(200); // 20
```
## Convert Millimeters to Feet:
```javascript
dist.mm2FT(609.6); // 2
```
## Convert Millimeters to Inches:
```javascript
dist.mm2IN(609.6); // 24
```
