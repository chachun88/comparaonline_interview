# Disclaimer
Due to coverage library issue, it's seems that tests aren't covering all the code.

```----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |      100 |    95.65 |      100 |      100 |                   |
 spec           |      100 |      100 |      100 |      100 |                   |
  coTestSpec.js |      100 |      100 |      100 |      100 |                   |
 src            |      100 |    95.65 |      100 |      100 |                   |
  coTest_2.js   |      100 |    95.65 |      100 |      100 |                58 |
----------------|----------|----------|----------|----------|-------------------|
```

But if you look at the html report, by typing `npm run open-coverage-report`
right after have had ran the tests with the command `npm run test`
you can see that the uncovered line is actually a constructor, which is clearly used in the test code.
also you can check this link below
https://github.com/istanbuljs/nyc/issues/374
and get to know that this is a known issue.
