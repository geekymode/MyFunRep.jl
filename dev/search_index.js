var documenterSearchIndex = {"docs":
[{"location":"tutorials/eigenvalues/#Eigenvalue-computations","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"","category":"section"},{"location":"tutorials/eigenvalues/#Eigenvalues-of-interval-matrices","page":"Eigenvalue computations","title":"Eigenvalues of interval matrices","text":"","category":"section"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"Given a (real or complex) interval matrix AinmathbbIC^ntimes n, we define the eigenvalue set ","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"mathbfLambda=lambdainmathbbC lambdatext is an eigenvalue of Atext for some AinmathbfA","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"While characterizing the solution set mathbfLambda (or even its hull) is computationally challenging, the package offers the function eigenbox which contains an interval box containing mathbfLambda. ","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"note: Note\nAt the moment, eigenbox is not rigorous, that is the computations for the non-interval eigenvalue problem solved internally are carried out using normal non-verified floating point computations.","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"To demonstrate the functionality, let us consider the following interval matrix","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"using IntervalLinearAlgebra\n\nA = [-3.. -2 4..5 4..6 -1..1.5;\n    -4.. -3 -4.. -3 -4.. -3 1..2;\n    -5.. -4 2..3 -5.. -4 -1..0;\n    -1..0.1 0..1 1..2 -4..2.5]","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"Now we can bound the eigenvalue set","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"ebox = eigenbox(A)","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"To get a qualitative evaluation of the enclosure, we can simulate the solution set of mathbfA using Montecarlo, as it is done in the following example","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"using Random; # hide\nRandom.seed!(42) # hide\nusing Plots\nN = 1000\n\nevalues = zeros(ComplexF64, 4, N)\n\nfor i in 1:N\n    evalues[:, i] = eigvals(rand.(A))\nend\n\nrpart = real.(evalues)\nipart = imag.(evalues)\n\nplot(IntervalBox(real(ebox), imag(ebox)); ratio=1, label=\"enclosure\")\nscatter!(rpart[1, :], ipart[1, :]; label=\"λ₁\")\nscatter!(rpart[2, :], ipart[2, :]; label=\"λ₂\")\nscatter!(rpart[3, :], ipart[3, :]; label=\"λ₃\")\nscatter!(rpart[4, :], ipart[4, :]; label=\"λ₄\")\nxlabel!(\"real\")\nylabel!(\"imag\")\nsavefig(\"eigs.png\") # hide","category":"page"},{"location":"tutorials/eigenvalues/","page":"Eigenvalue computations","title":"Eigenvalue computations","text":"(Image: )","category":"page"},{"location":"explanations/preconditioning/#Preconditioning-interval-linear-systems","page":"Preconditioning interval linear systems","title":"Preconditioning interval linear systems","text":"","category":"section"},{"location":"explanations/preconditioning/","page":"Preconditioning interval linear systems","title":"Preconditioning interval linear systems","text":"Pages = [\"preconditioning.md\"]","category":"page"},{"location":"explanations/preconditioning/#Basic-concepts","page":"Preconditioning interval linear systems","title":"Basic concepts","text":"","category":"section"},{"location":"explanations/preconditioning/","page":"Preconditioning interval linear systems","title":"Preconditioning interval linear systems","text":"Consider the square interval linear system","category":"page"},{"location":"explanations/preconditioning/","page":"Preconditioning interval linear systems","title":"Preconditioning interval linear systems","text":"mathbfAx=mathbfb","category":"page"},{"location":"explanations/preconditioning/","page":"Preconditioning interval linear systems","title":"Preconditioning interval linear systems","text":"preconditioning the interval linear system by a real matrix C means to multiply both sides of the equation by C, obtaining the new system","category":"page"},{"location":"explanations/preconditioning/","page":"Preconditioning interval linear systems","title":"Preconditioning interval linear systems","text":"CmathbfAx=Cmathbfb","category":"page"},{"location":"explanations/preconditioning/","page":"Preconditioning interval linear systems","title":"Preconditioning interval linear systems","text":"which is called preconditioned system. Let us denote by A_c the midpoint matrix of mathbfA. Popular choices for C are","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = MyFunRep","category":"page"},{"location":"#MyFunRep","page":"Home","title":"MyFunRep","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for MyFunRep.","category":"page"},{"location":"#Features","page":"Home","title":"Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"note: Note\nThe package is still under active development and things evolve quickly (or at least should)","category":"page"},{"location":"","page":"Home","title":"Home","text":"enclosure of the solution of interval linear systems\nexact characterization of the solution set of interval linear systems using Oettli-Präger\nverified solution of floating point linear systems\nenclosure of eigenvalues of interval matrices\nverified computation of eigenvalues and eigenvectors of floating point matrices","category":"page"},{"location":"#Some-sample-Plot-experiment","page":"Home","title":"Some sample Plot experiment","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<!– using Plots","category":"page"},{"location":"","page":"Home","title":"Home","text":"plot(1:100) –>","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [MyFunRep]","category":"page"},{"location":"#MyFunRep.func-Tuple{Any}","page":"Home","title":"MyFunRep.func","text":"func(x)\n\nReturns double the number x plus 1.\n\njulia > func(2)\n\n\n\n\n\n","category":"method"},{"location":"#MyFunRep.func2-Tuple{Any, Any}","page":"Home","title":"MyFunRep.func2","text":"func2(x,y)\n\nReturns something else double the number x plus 1.\n\n\n\n\n\n","category":"method"},{"location":"#MyFunRep.my_fun1-Tuple{Any, Any}","page":"Home","title":"MyFunRep.my_fun1","text":"A simple add method for testing     julia> my_fun1(2,3)\n\n\n\n\n\n","category":"method"},{"location":"#MyFunRep.my_fun2-Tuple{Any, Any, Any}","page":"Home","title":"MyFunRep.my_fun2","text":"A sample function as an experiment     ```julia> my_fun2(1,2,3)\n\n\n\n\n\n","category":"method"}]
}