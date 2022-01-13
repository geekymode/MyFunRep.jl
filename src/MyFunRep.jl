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
    ```julia> my_fun2(1,2,3)`
"""
function my_fun2(x,y,z)
    return x+y+z
end

export my_fun1, my_fun2

end
