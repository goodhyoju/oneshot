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
                    <h2 class="display-5 animated fadeIn mb-4">보관이사</h2>
                    <p class="mb-4">
                        시작부터 끝까지 항상 고객입장에서 <span class="text-primary">안전함과 깨끗함을 지향하는 고객중심의 이사를 약속드립니다.</span>
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/movetype3_l.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Search Start -->
        <#include "/common/common_search.ftl">
        <!-- Search End -->

        <!-- Category Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 700px;">
                    <h1 class="mb-3">작업단계</h1>
                    <p>
                        불가피한 사정으로 이사짐 보관이 필요하신 고객님을 위한 보관이사는 깔끔하고 체계적인 이사와 함께 고객님의 소중한 물품을 안전하게 원하시는 날까지 보관하여 드리는 서비스입니다.
                    </p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item d-block bg-light text-center rounded p-1" href="">
                            <div class="rounded p-2" style="height: 300px;">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src="img/icon-move.png" alt="Icon">
                                </div>
                                <h6>이사</h6>
                                <span style="text-align: left;font-size: 13px;">
                                    <p style="margin-bottom: 0px;"><i class="fa fa-check text-primary me-3"></i>이사청소한방의 전문적인 이사서비스를 통하여 체계적이고 안전한 이삿짐 반출</p>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a class="cat-item d-block bg-light text-center rounded p-1" href="">
                            <div class="rounded p-2" style="height: 300px;">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src="img/icon-store.png" alt="Icon">
                                </div>
                                <h6>보관</h6>
                                <span style="text-align: left;font-size: 16px;">
                                    <p style="margin-bottom: 0px;"><i class="fa fa-check text-dark me-3"></i>전용 컨테이너를 통하여 안전하게 보관</p>
                                    <p style="margin-bottom: 0px;"><i class="fa fa-check text-dark me-3"></i>장기 보관을 위한 전용 포장재 사용</p>
                                    <p style="margin-bottom: 0px;"><i class="fa fa-check text-dark me-3"></i>물품 특성에 따른 맞춤 포장</p>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a class="cat-item d-block bg-light text-center rounded p-1" href="">
                            <div class="rounded p-2" style="height: 300px;">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src="img/icon-security.png" alt="Icon">
                                </div>
                                <h6>보안</h6>
                                <span style="text-align: left;font-size: 16px;">
                                    <p style="margin-bottom: 0px;"><i class="fa fa-check text-dark me-3"></i>CCTV,직원상주를 통한 안전보관/보안 철저</p>
                                    <p style="margin-bottom: 0px;"><i class="fa fa-check text-dark me-3"></i>철저한 입출고 관리로 도난방지</p>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a class="cat-item d-block bg-light text-center rounded p-1" href="">
                            <div class="rounded p-2" style="height: 300px;">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src="img/icon-vouch.png" alt="Icon">
                                </div>
                                <h6>보장</h6>
                                <span style="text-align: left;font-size: 16px;">
                                    <p style="margin-bottom: 0px;"><i class="fa fa-check text-dark me-3"></i>적재물 배상책임보험으로 안전한 이사 보장</p>
                                </span>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <!-- Category End -->
        <#include "/common/common_footer.ftl">
    </div>
    <#include "/common/common_js.ftl">
    <script src="page/reservation.js"></script>
</body>
<script type="text/javascript">
    $(document).ready(function() {
        $("#orderSvc").val('보관이사')
    });
</script>
</html>