<!DOCTYPE html>
<html lang="en">

<#include "/common/common_css.ftl">


<body>
    <div class="container-xxl bg-white p-0">
        <!-- Spinner Start -->
        <#include "/common/common_spinner.ftl">
        <!-- Spinner End -->

        <!-- Navbar Start -->
        <#include "/common/common_navbar.ftl">
        <!-- Navbar End -->


        <!-- Header Start -->
        <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h2 class="display-5 animated fadeIn mb-4">공지사항</h2>
                    <p class="mb-4">
                    이사청소 한방의 새로운 소식과 정보를 <span class="text-primary">고객에게 전달해 드립니다.</span>
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/notis-main.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Search Start -->
        <div class="container-fluid  mb-5 wow fadeIn" data-wow-delay="0.1s" style="margin-top: 20px;padding: 25px;border-top: solid 2px #00d1b2;">
            <div class="container">
                <div class="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 700px;">
                </div>
                <div class="row g-2">
                    <div class="col-md-12">
                        <!-- table start -->
                        <table id="notiTable" class="ui celled table hover" style="width:100%">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>idx</th>
                                    <th>작성일</th>
                                    <th>구분</th>
                                    <th>제목</th>
                                    <th>내용</th>
                                    <th>작성자</th>
                                    <th>조회수</th>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                        <!-- table end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Search End -->
        <#include "/common/common_footer.ftl">
    </div>

    <!-- Modal start -->
    <div class="modal fade" id="addNotisModal" tabindex="-1" role="dialog" aria-labelledby="addNotisModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addNotisModalLabel">공지사항 입력</h5>
                    <a id="addNotisCloseBtn"><span class="text-dark fw-bold">x</span> </a>
                </div>
                <div class="modal-body" style="z-index: 1">
                    <div class="col-md-12">
                        <div class="row g-2">
                            <div class="col-md-12">
                                <label for="notisType"><i class="fa fa-check"></i>서비스</label>
                                <select class="form-select border-1 py-3" id="notisType">
                                    <option value="공지사항" selected>공지사항</option>
                                    <option value="이벤트">이벤트</option>
                                    <option value="장애알림">장애알림</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label for="notisTitle"><i class="fas fa-edit"></i>제목</label>
                                <input type="text" id="notisTitle" class="form-control border-1 py-3">
                            </div>
                            <div class="col-md-12">
                                <label for="notisComment"><i class="fas fa-edit"></i>내용</label>
                                <textarea type="text" id="notisComment" class="form-control border-1 py-3" cols="3"> </textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="notisWriter"><i class="fa fa-check"></i>작성자</label>
                                <select class="form-select border-1 py-3" id="notisWriter">
                                    <option value="운영자" selected>운영자</option>
                                    <option value="고객센터">고객센터</option>
                                    <option value="상담원">상담원</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-success" id="addNotisSaveBtn"><i class="fa fa-check"></i>저장</button>
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal" id="addNotisCancelBtn"><i class="fa fa-close"></i>취소</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal end -->


    <#include "/common/common_js.ftl">
    <script src="page/noti.js"></script>
</body>

</html>