# The Problem
Our users, who are as comfortable using the command line as they are using a browser, need a simple program that will classify triangles based on three numbers. The numbers represent the lengths of three line segments that may be able to be arranged to form a triangle.

Example scenarios:

| Side 1 | Side 2 | Side 3 | Classification |
| ------ | ------ | ------ | -------------- |
| 1.5    | 1.5    | 1.5    | Equilateral    |
| 3      | 4      | 4      | Isosceles      |
| 4.4    | 7.3    | 9.1    | Scalene        |
| 4      | 6      | 11     | Not A Triangle |

## Functional Requirements
1. The user must be able to submit three numbers that represent the lengths of line segments.
2. The program responds with the most specific triangle classification that applies to the three lengths, including: `scalene`, `equilateral`, `isosceles`, `not a triangle`.
