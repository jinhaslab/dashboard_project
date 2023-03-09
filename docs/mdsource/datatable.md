---
title: "Tabular Data Example"
output: 
  flexdashboard::flex_dashboard:
    vertical_layout: scroll
---

```{r}
library(shiny)
library(DT)
library(flexdashboard)
```


### Table 2

```{r}
knitr::kable(mtcars)
```

### Table 3

```{r}
DT::datatable(mtcars, options = list(
  bPaginate = FALSE
))
```