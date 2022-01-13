using MyFunRep
using Documenter
using Plots
ENV["PLOTS_TEST"] = "true"
ENV["GKSwstype"] = "100"

DocMeta.setdocmeta!(MyFunRep, :DocTestSetup, :(using MyFunRep); recursive=true)

makedocs(;
    modules=[MyFunRep],
    authors="Rethna Pulikkoonattu et al.",
    repo="https://github.com/geekymode/MyFunRep.jl/blob/{commit}{path}#{line}",
    sitename="MyFunRep.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://geekymode.github.io/MyFunRep.jl",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/geekymode/MyFunRep.jl",
    devbranch="main",
)
