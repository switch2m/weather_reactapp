def set_ltsbuild(x) {
    echo 'decrement buildnumber'
    def y = Integer.parseInt(x)
    return y-1
}
return this
