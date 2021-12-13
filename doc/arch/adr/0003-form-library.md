# 3. Form Library decisions

Date: 2021-12-12

## Status

Accepted

## Context

Popular react libraries offer better control over making and managing forms in react, solving major problems like that of handling a state for every field separately, redirection on submit, etc.

The top contendors are :

1. React hook form
2. Formik

## Decision

We will use 'react-hook-form'.

## Consequences

React Hook Form has several benefits over Formik, as outlined in this [article](https://blog.logrocket.com/react-hook-form-vs-formik-comparison/)

It is a little difficult to use with mui and other libraries that dont expose their refs.
