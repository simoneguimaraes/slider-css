var output = document.getElementById("demo");
var slider = document.getElementById("myRange").oninput = function(){
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #985276 0%, #634c88 ' + value + '%, #fff ' + value + '%, #fff 100%'
    output.innerHTML = this.value;

};
