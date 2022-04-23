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
                    <h2 class="display-5 animated fadeIn mb-4">손없는날</h2>
                    <p class="mb-4">
                        우리 기사님들이 <span class="text-primary">충전하는 날</span>을 미리 알려드립니다.
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/free-main.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Testimonial Start -->
        <div class="container-xxl py-5" style="margin-top: 20px;padding: 25px;border-top: solid 2px #00d1b2;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-12">
                        <div id='calendar'></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->
        <#include "/common/common_footer.ftl">
    </div>


    <#include "/common/common_js.ftl">
    <script src="page/free.js"></script>
</body>

</html>