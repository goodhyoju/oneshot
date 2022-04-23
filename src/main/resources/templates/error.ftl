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
                    <h2 class="display-5 animated fadeIn mb-4">에러발생</h2>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/header.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Search Start -->
        <#include "/common/common_search.ftl">
        <!-- Search End -->
        <!-- 404 Start -->
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1">ERROR</h1>
                        <h1 class="mb-4">알수없는 오류로 에러가 발생 하였습니다.</h1>
                        <p class="mb-4">죄송합니다. 신속히 처리하겠습니다. 조금만 기다려주시면 그에 맞는 정보로 보답해드리겠습니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 404 End -->
        <#include "/common/common_footer.ftl">
    </div>


    <#include "/common/common_js.ftl">
</body>

</html>