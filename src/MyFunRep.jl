module MyFunRep

# Write your package code here.
"""
A simple add method for testing
    ```julia> my_fun1(2,3)
    ```
"""
my_fun1(x,y) = x+y 

"""
A sample function as an experiment
    ```julia> my_fun2(1,2,3)
"""
function my_fun2(x,y,z)
    return x+y+z
end

"""
    func(x)
Returns double the number `x` plus `1`.
```julia-repl
julia > func(2)
```
"""
func(x) = 2x + 1

"""
    func2(x,y)
Returns something else double the number `x` plus `1`.
"""
func2(x,y) = 2x + 1 + 3y

export my_fun1, my_fun2, func,func2

end
