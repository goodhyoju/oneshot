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
                    <h2 class="display-5 animated fadeIn mb-4">상담신청</h2>
                    <p class="mb-4">
                        상담 신청 후 1일 이내 고객님께서 제공해 주신 연락처러 연락 드리겠습니다.
                        <span class="text-primary">작성하신 개인정보는 상담 후, 자동 삭제 됨을 알려드립니다.</span>
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/reservation-main.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- reservation Start -->
        <div class="container-fluid bg-primary mb-5 wow fadeIn mt-5" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-12">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <label for="orderSvc" class="text-white"><i class="fa fa-check"></i> 서비스</label>
                                <select class="form-select border-0 py-2" id="orderSvc">
                                    <option value="청소+이사" selected>청소+이사</option>
                                    <option value="가정이사">가정이사</option>
                                    <option value="원룸이사">원룸이사</option>
                                    <option value="보관이사">보관이사</option>
                                    <option value="기업이사">기업이사</option>
                                    <option value="입주청소">입주청소</option>
                                    <option value="이사청소">이사청소</option>
                                    <option value="거주청소">거주청소</option>
                                    <option value="부분청소">부분청소</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="orderName" class="text-white"><i class="fas fa-edit"></i> 이름</label>
                                <input type="text" id="orderName" class="form-control border-0 py-2" placeholder="김한방">
                            </div>
                            <div class="col-md-4">
                                <label for="orderPhone" class="text-white"><i class="fas fa-edit"></i> 전화번호</label>
                                <input type="text" id="orderPhone" class="form-control border-0 py-2" placeholder="000-0000-0000">
                            </div>
                            <div class="col-md-4">
                                <label for="orderAPTPassword1" class="text-white"><i class="fas fa-edit"></i> 신청 비밀번호</label>
                                <input type="password" id="orderAPTPassword1" class="form-control border-0 py-2">
                            </div>
                            <div class="col-md-4">
                                <label for="orderAPTPassword2" class="text-white"><i class="fas fa-edit"></i> 신청 비밀번호 확인</label>
                                <input type="password" id="orderAPTPassword2" class="form-control border-0 py-2">
                            </div>
                            <div class="col-md-4">
                                <label for="orderDate" class="text-white"><i class="fas fa-edit"></i> 신청일자</label>
                                <input type="text" id="orderDate" class="form-control border-0 py-2" readonly>
                            </div>
                            <div class="col-md-4">
                                <label for="orderHomeAddr" class="text-white"><i class="fas fa-edit"></i> 실거주지</label>
                                <input type="text" id="orderHomeAddr" class="form-control border-0 py-2" readonly onclick="findAddr('orderHomeAddr')">
                            </div>
                            <div class="col-md-4 moveAddr">
                                <label for="orderStartAddr" class="text-white"><i class="fas fa-arrow-right"></i> 이사 출발지</label>
                                <input type="text" id="orderStartAddr" class="form-control border-0 py-2" readonly onclick="findAddr('orderStartAddr')">
                            </div>
                            <div class="col-md-4 moveAddr">
                                <label for="orderEndAddr" class="text-white"><i class="fas fa-arrow-left"></i> 이사 도착지</label>
                                <input type="text" id="orderEndAddr" class="form-control border-0 py-2" readonly onclick="findAddr('orderEndAddr')">
                            </div>
                            <#--<div class="col-md-5">
                                <label for="orderAPTName" class="text-white"><i class="fas fa-edit"></i>아파트명</label>
                                <input type="text" id="orderAPTName" class="form-control border-0 py-2">
                            </div>-->

                            <div class="col-md-2">
                                <label for="orderHomeSize" class="text-white"><i class="fas fa-edit"></i>등기평수</label>
                                <select id="orderHomeSize" class="form-control border-0 py-2">
                                    <option value="25" selected>25평</option>
                                    <option value="10">10평</option>
                                    <option value="15">15평</option>
                                    <option value="20">20평</option>
                                    <option value="25">25평</option>
                                    <option value="30">30평</option>
                                    <option value="35">35평</option>
                                    <option value="40">40평</option>
                                    <option value="45">45평</option>
                                    <option value="50">50평</option>
                                    <option value="55">55평</option>
                                    <option value="60">60평</option>
                                    <option value="1000">60평이상</option>
                                </select>
                            </div>


                        </div>
                    </div>

                    <div class="col-md-12">
                        <label for="orderBtn"></label>
                        <button class="btn btn-dark border-0 w-100 py-2" id="orderBtn"><i class="fa fa-check me-3"></i> 신청하기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- reservation End -->
        <!--reservation check  start -->
        <div class="container-fluid bg-white mb-5 wow fadeIn mt-5" data-wow-delay="0.1s" style="padding: 35px; display: none;" id="checkReservationDiv">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-12">
                        <div class="row g-2">
                            <div class="col-md-12">
                                <div class="row g-2">
                                    <table class="table tab-content table-bordered table-hover">
                                        <tbody>
                                        <tr>
                                            <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 신청 서비스</th><td id="checkService"></td>
                                            <th class="table-success text-primary" style="width: 12%;"><i class="fa fa-check"></i> 이름</th><td id="checkName" ></td>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--reservation check  end -->
        <#include "/common/common_footer.ftl">
    </div>
    <#include "/common/common_js.ftl">
    <script src="page/reservation.js"></script>
</body>

</html>