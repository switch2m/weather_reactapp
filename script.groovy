def set_ltsbuild(x) {
    echo 'decrement buildnumber'
    def y = x.toInteger() as Integer
    return y-1
}
return this
