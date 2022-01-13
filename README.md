# MyFunRep

## Overview

This package contains routines to perform numerical linear algebra using interval arithmetic. This can be used both for rigorous computations and uncertainty propagation.

If you use this package in your work, please cite it as

```
@software{pulikkoo2022,
author = {
            R Pulikkoonattu and
            First Second and
            You P. Now
         },
title  = {MyFunRepl.jl: The best packege of all},
month  = {1},
year   = {2022},
doi    = {10.5281/tbd.5363563},
url    = {https://github.com/geekymode/MyFunRe.jl}
}
```

## Features

**Note**: The package is still under active development and things evolve quickly (or at least should)

- enclosure of the solution of interval linear systems
- exact characterization of the solution set of interval linear systems using Oettli-Präger
- verified solution of floating point linear systems
- enclosure of eigenvalues of interval matrices
- verified computation of eigenvalues and eigenvectors of floating point matrices

## Installation

Open a Julia session and enter

```julia
using Pkg; Pkg.add("MyFunRep")
```

this will download the package and all the necessary dependencies for you. Next you can import the package with

```julia
using MyFunRep
```

and you are ready to go.

## Documentation

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://geekymode.github.io/MyFunRep.jl/stable)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://geekymode.github.io/MyFunRep.jl/dev)
[![Build Status](https://github.com/geekymode/MyFunRep.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/geekymode/MyFunRep.jl/actions/workflows/CI.yml?query=branch%3Amain)
[![Coverage](https://codecov.io/gh/geekymode/MyFunRep.jl/branch/main/graph/badge.svg)](https://codecov.io/gh/geekymode/MyFunRep.jl)
