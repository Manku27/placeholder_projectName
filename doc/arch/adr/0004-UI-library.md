# 3. UI Library decisions

Date: 2021-12-14

## Status

Accepted

## Context

Using a dedicated UI library is a very good choice as it helps making the components responsive, styling the components and making changes easier than the native approach.

The popular choices are:
1 . Chakra Ui
2 . Tailwind CSS
3 . MUI
4 . AntDesign

## Decision

We will use 'chakra-ui', as decided after a thorough comparison, as outlined in this [article](https://chakra-ui.com/docs/comparison)

## Consequences

Compatibility with react hook form is nice, accessibility is better compared to other libraries and styling is easier too. speacially maintaining the 'dark-light' mode.
