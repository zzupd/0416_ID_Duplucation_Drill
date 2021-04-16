$(function(){

    $("button[type=button]").click(function(){

        var inputUID = $("#uID").val().trim();   // form화면에서 입력한 ID
        var regIDList = ["test01", "guest", "member03"];  // 가입된 ID를 의미

        var idUseChk = true;

        $.each(regIDList, function(i, v){
            if(inputUID == v) {
                idUseChk = false;
            }
        });

        if(idUseChk) {
            alert("사용가능");
        } else {
            alert("사용중인 ID");
        }

    });

});
