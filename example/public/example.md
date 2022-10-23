# Instructions

In this exercise you will be building error handling for a simple integer calculator. To make matters simple, methods for calculating addition, multiplication and division are provided.

The goal is to have a working calculator that returns a string with the following pattern: `16 + 51 = 67`, when provided with arguments `16`, `51` and `+`.

```csharp
SimpleCalculator.Calculate(16, 51, "+"); // => returns "16 + 51 = 67"
SimpleCalculator.Calculate(32, 6, "*"); // => returns "32 * 6 = 192"
SimpleCalculator.Calculate(512, 4, "/"); // => returns "512 / 4 = 128"
```

```javascript
const arr = [1, 2, 3]

const other = arr.map((v, i) => v * 2 + v**2)
console.log(other)
```

[Click and go](#)

## 1. Implement the calculator operations

The main method for implementation in this task will be the (_static_) `SimpleCalculator.Calculate()` method. It takes three arguments. The first two arguments are integer numbers on which an operation is going to be conducted. The third argument is of type string and for this exercise it is necessary to implement the following operations:

- addition using the `+` string
- multiplication using the `*` string
- division using the `/` string

## 2. Handle illegal operations

Any other operation symbol should throw the `ArgumentOutOfRangeException` exception. If the operation argument is an empty string, then the method should throw the `ArgumentException` exception. When `null` is provided as an operation argument, then the method should throw the `ArgumentNullException` exception.

```csharp
SimpleCalculator.Calculate(100, 10, "-"); // => throws ArgumentOutOfRangeException

SimpleCalculator.Calculate(8, 2, ""); // => throws ArgumentException

SimpleCalculator.Calculate(58, 6, null); // => throws ArgumentNullException
```

## 3. Handle errors when dividing by zero

When attempting to divide by `0`, the calculator should return a string with the content `Division by zero is not allowed.`. Any other exception should not be handled by the `SimpleCalculator.Calculate()` method.

```csharp
SimpleCalculator.Calculate(512, 0, "/"); // => returns "Division by zero is not allowed."
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

___


Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### My Great Heading

* [x] Write the press release
* [ ] Update the website
* [ ] Contact the media


H~2~O

![Bird (3000x2000)](sample.jpg)

> blockquote

*italicized text*

**bold text**

1. First item
2. Second item
3. Third item


- First item
- Second item
- Third item
 	- First item
- Second item
- Third item