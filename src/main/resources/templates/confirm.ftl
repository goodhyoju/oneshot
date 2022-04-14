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
                    <img class="img-fluid" src="img/header.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Search Start -->
        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-8">
                        <div class="row g-2">
                            <div class="col-md-6">
                                <label for="orderName" class="text-white"><i class="fas fa-edit"></i>이름</label>
                                <input type="text" id="orderName" class="form-control border-0 py-3" placeholder="김한방">
                            </div>
                            <div class="col-md-6">
                                <label for="orderAPTPassword" class="text-white"><i class="fas fa-edit"></i>신청 비밀번호</label>
                                <input type="password" id="orderAPTPassword" class="form-control border-0 py-3">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="orderBtn"></label>
                        <button class="btn btn-dark border-0 w-100 py-3" id="orderBtn"><i class="fa fa-check me-3"></i> 확인하기</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-dark mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-12">
                        <div class="row g-2">
                            <div class="col-md-6">
                                <label for="orderName" class="text-white"><i class="fas fa-edit"></i>이름</label>
                                <input type="text" id="orderName" class="form-control border-0 py-3" placeholder="김한방">
                            </div>
                            <div class="col-md-6">
                                <label for="orderPhone" class="text-white"><i class="fas fa-edit"></i>전화번호</label>
                                <input type="text" id="orderPhone" class="form-control border-0 py-3" placeholder="000-0000-0000">
                            </div>
                            <div class="col-md-6">
                                <label for="orderAPTName" class="text-white"><i class="fas fa-edit"></i>아파트명</label>
                                <input type="text" id="orderAPTName" class="form-control border-0 py-3">
                            </div>
                            <div class="col-md-6">
                                <label for="orderAPTAddr" class="text-white"><i class="fas fa-edit"></i>아파트주소</label>
                                <input type="text" id="orderAPTAddr" class="form-control border-0 py-3">
                            </div>
                            <div class="col-md-6">
                                <label for="orderAPTSize" class="text-white"><i class="fas fa-edit"></i>아파트평형</label>
                                <input type="text" id="orderAPTSize" class="form-control border-0 py-3">
                            </div>
                            <div class="col-md-6">
                                <label for="orderDate" class="text-white"><i class="fas fa-edit"></i>신청일자</label>
                                <input type="text" id="orderAPTSize" class="form-control border-0 py-3">
                            </div>
                            <div class="col-md-6">
                                <label for="orderSvc" class="text-white"><i class="fa fa-check"></i>서비스</label>
                                <select class="form-select border-0 py-3" id="orderSvc">
                                    <option selected>청소+이사</option>
                                    <option value="1">가정이사</option>
                                    <option value="2">원룸이사</option>
                                    <option value="3">보관이사</option>
                                    <option value="3">기업이사</option>
                                    <option value="3">입주청소</option>
                                    <option value="3">이사청소</option>
                                    <option value="3">거주청소</option>
                                    <option value="3">부분청소</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="orderAPTPassword" class="text-white"><i class="fas fa-edit"></i>신청 비밀번호</label>
                                <input type="password" id="orderAPTPassword" class="form-control border-0 py-3">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="orderBtn"></label>
                        <button class="btn btn-danger border-0 w-100 py-3" id="orderBtn"><i class="fa fa-check me-3"></i> 요청취소</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search End -->
        <#include "/common/common_footer.ftl">
    </div>
    <#include "/common/common_js.ftl">
</body>

</html>