def set_ltsbuild(x) {
    echo 'decrement buildnumber'
    println(x.getClass())
    def y = x.toInteger() - 1
    println(y.getClass() + y)
    return y
}
return this
