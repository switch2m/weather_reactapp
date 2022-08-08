def set_ltsbuild(x) {
    echo 'decrement buildnumber'
    def y = x.toString
    return y-1
}
return this
