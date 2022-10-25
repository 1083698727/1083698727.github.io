function confirm() {
    var name = document.getElementById("text1").value;
    var nameLength = name.toString.length;
    if (nameLength == 0) {
        document.getElementById("a1").innerHTML = "快点，必须欧打一个人！";
    }
    else {
        if (nameLength > 8) {
            document.getElementById("a1").innerHTML = "名字太长了懒得打";
        }
    }       
        
}
