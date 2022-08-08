def set_ltsbuild(x) {
    echo 'decrement buildnumber'
    def y = x.toInteger() - 1
    return y
}
return this
