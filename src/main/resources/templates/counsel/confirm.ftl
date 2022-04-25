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
                    <h2 class="display-5 animated fadeIn mb-4">예약확인</h2>
                    <p class="mb-4">
                        예약신청 시 입력하셨던 <span class="text-primary">고객명과 비빌번호</span>를 입력해 주세요.
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/confirm-main.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Search Start -->
        <div class="container-fluid bg-primary mb-5 wow fadeIn mt-5" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-8">
                        <div class="row g-2">
                            <div class="col-md-6">
                                <label for="orderName" class="text-white"><i class="fas fa-edit"></i>이름</label>
                                <input type="text" id="checkName" class="form-control border-0 py-2" placeholder="김한방">
                            </div>
                            <div class="col-md-6">
                                <label for="orderAPTPassword" class="text-white"><i class="fas fa-edit"></i>신청 비밀번호</label>
                                <input type="password" id="checkAptPassword" class="form-control border-0 py-2">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="orderBtn"></label>
                        <button class="btn btn-dark border-0 w-100 py-2" id="checkBtn"><i class="fa fa-check me-2"></i> 확인하기</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-white mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-12">
                        <div class="row g-2">
                            <table class="table tab-content table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 신청 서비스</th><td id="checkService"></td>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 이름</th><td id="checkNamed" ></td>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 전화번호</th><td id="checkPhone"></td>
                                </tr>
                                <tr>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 실거주지</th><td id="checkHomeAddr"></td>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 이사출발지</th><td id="checkStartAddr"></td>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 이사도착지</th><td id="checkEndAddr"></td>
                                </tr>
                                <tr>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 아파트 평형</th><td id="checkHomesize"></td>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 신청일자</th><td id="checkOrderDate"></td>
                                    <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 신청 비밀번호</th><td id="checkPassword"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                   <#-- <div class="col-md-12">
                        <label for="orderBtn"></label>
                        <button class="btn btn-danger border-0 w-100 py-2" id="checkBtn"><i class="fa fa-check me-2"></i> 요청취소</button>
                    </div>-->
                </div>
            </div>
        </div>
        <!-- Search End -->
        <#include "/common/common_footer.ftl">
    </div>
    <#include "/common/common_js.ftl">
    <script src="page/confirm.js"></script>
</body>

</html>