function multi() {

    num = document.getElementById("num").value;
    num = parseInt(num);

    for (var index = 1; index <= 10; index++) {
        let mult = num * index;
        document.write(num + "x" + index + "=" + mult + "<br>");
    }
}