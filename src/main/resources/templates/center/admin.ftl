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
                    <h2 class="display-5 animated fadeIn mb-4">관리자 페이지</h2>
                    <p class="mb-4">
                        이 페이지는 <span class="text-primary">간편상담/상담예약</span>을 위한 관리자 페이지 입니다.
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/admin.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Testimonial Start -->
        <div class="container-xxl py-5" style="margin-top: 20px;padding: 25px;border-top: solid 2px #00d1b2;">
            <div class="container">
                <div class="row g-2">

                    <div class="col-md-12">
                        <h4 class="mb-3 text-white" style="background: linear-gradient(45deg, #007c87, transparent)"><i class="fa fa-check"></i>간편상담 리스트</h4>
                        <!-- quick table start -->
                        <table id="eazyTable" class="ui celled table hover" style="width:100%">
                            <thead>
                            <tr>
                                <th>idx</th>
                                <th>작성일</th>
                                <th>서비스</th>
                                <th>이름</th>
                                <th>전화번호</th>
                                <th>진행상태</th>
                            </tr>
                            </thead>
                        </table>
                        <!-- quick table end -->
                    </div>
                    <div class="col-md-12">
                        <h4 class="mb-3 text-white" style="background: linear-gradient(45deg, #007c87, transparent)"><i class="fa fa-check"></i>상담 신청 리스트</h4>
                        <!-- quick table start -->
                        <table id="reservationTable" class="ui celled table hover" style="width:100%">
                            <thead>
                            <tr>
                                <th>idx</th>
                                <th>작성일</th>
                                <th>서비스</th>
                                <th>이름</th>
                                <th>전화번호</th>
                                <th>신청일자</th>
                                <th>주소</th>
                                <th>평수</th>
                                <th>진행상태</th>
                            </tr>
                            </thead>
                        </table>
                        <!-- quick table end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->
        <#include "/common/common_footer.ftl">
    </div>


    <#include "/common/common_js.ftl">
    <script src="page/admin.js"></script>
</body>

</html>