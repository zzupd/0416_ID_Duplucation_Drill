$(function(){

    /* 아이디 중복 체크 시작 */
    $("button[type=button]").click(function(){

        var inputUID = $("#uID").val().trim();   // form화면에서 입력한 ID
        var regIDList = ["test01", "guest", "member03"];  // 가입된 ID를 의미

        var idUseChk = true;

        $.each(regIDList, function(i, v){
            if(inputUID == v) {
                idUseChk = false;
            }
        });

        var msg="";    // message
        if(idUseChk) {
            msg = "사용가능";
        } else {
            msg = "사용중인 ID"
        }

        var spanChk = $("#uID").next().is("span");
        // span요소 유무 체크
        if (spanChk) {
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>"+ msg +"</span>").insertAfter("#uID");
        // $("A").insertAfter("B);  요소A를 요소B 뒤로 이동하세요


    });
    /* 아이디 중복 체크 끝 */


    /* 입력취소 클릭이벤트 아이디 중복 메시지 제거 */
    $("button[type=reset]").click(function(){
        $("span#idChkMsg").remove();
    });
    /* 입력취소 클릭이벤트 아이디 중복 메시지 제거 */


    /* 비밀번호 보기 */
    $("input[type=checkbox]").click(function(){
        var chkTF = $(this).prop("checked");
        if (chkTF) {
            $("input.uPW").attr("type", "text");
        } else {
            $("input.uPW").attr("type", "password");
        }
    });
    /* 비밀번호 보기 */



});



