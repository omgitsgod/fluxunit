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
# Mass:
```javascript
const { mass } = require('fluxunit');
```
## Convert Grams to Kilograms:
```javascript
mass.g2KG(1000); // 1
```
## Convert Grams to Milligrams:
```javascript
mass.g2MG(4); // 4000
```
## Convert Grams to Ounces:
```javascript
mass.g2O(5); // 0.17636982918934785
```
## Convert Grams to Pounds:
```javascript
mass.g2O(5); // 0.011023113109243879
```
## Convert Kilograms to Grams:
```javascript
mass.kg2G(2); // 2000
```
## Convert Kilograms to Milligrams:
```javascript
mass.kg2MG(.5); // 500000
```
## Convert Kilograms to Pounds:
```javascript
mass.kg2P(10); // 22.046226218487757
```
## Convert Kilograms to Tons:
```javascript
mass.kg2T(100); // 0.1
```
## Convert Milligrams to Grams:
```javascript
mass.mg2G(10); // 0.01
```
## Convert Milligrams to Kilograms:
```javascript
mass.mg2KG(1000); // 0.001
```
## Convert Ounces to Grams:
```javascript
mass.o2G(7); // 0.24691776086508696
```
## Convert Ounces to Kilograms:
```javascript
mass.o2KG(3); // 0.08504856
```
## Convert Ounces to Pounds:
```javascript
mass.o2P(80); // 5
```
## Convert Pounds to Grams:
```javascript
mass.p2G(.003); // 1.3607771100000001
```
## Convert Pounds to Kilograms:
```javascript
mass.p2KG(20); // 9.071847400000001
```
## Convert Pounds to Ounces:
```javascript
mass.p2O(20); // 320
```
## Convert Pounds to Stones:
```javascript
mass.p2S(1); // 14
```
## Convert Pounds to Tons:
```javascript
mass.p2T(7); // 0.00317514659
```
## Convert Tons to Kilograms:
```javascript
mass.t2KG(1); // 1000
```
## Convert Tons to Pounds:
```javascript
mass.t2P(.005); // 11.02311310924388
```
