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
                    <h1 class="display-5 animated fadeIn mb-4">부분청소</h1>
                    <p class="mb-4">
                        고객님께서 지정해 주시는 원하는 공간만 <span class="text-primary">경제적으로 서비스</span> 받아보세요.
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/cleantype4_l.png" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->


        <!-- Search Start -->
        <#include "/common/common_search.ftl">
        <!-- Search End -->


        <!-- Contact Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="">
                    <h2 class="mb-3">작업내용</h2>
                    <p>
                        부분 청소 서비스는 건물과 고객의 상황에 따라 이용하게 되는 유용한 서비스입니다.
                        생활중 또는 건물 사용중 일상적으로 어느정도 청소를 하지만 오랜세월 누적되면서 일반이 처리하기 어려운 부분들이 생기기 마련이라서 청소 전문가를 필요하게 됩니다.
                        또한, 소파청소, 침대청소, 물탱크 청소, 에어컨/세탁기/냉장고 청소처럼 어느 기구를 별도로 청소를 해야하거나 싱크대 청소, 화장실 청소처럼 건물의 한 부분만 청소를 맡기고 싶은때도 있습니다.
                        <span class="text-primary">전문가의 솜씨로서 일반인이 하시는 것과는 다르게 확실한 청소를 마쳐드리는 부분청소서비스는 이사할 때나 또는 거주중에도 효과적인 쾌적한 환경을 만드는데 도움이 됩니다.</span>
                    </p>
                </div>

            </div>
        </div>
        <!-- Contact End -->

        <#include "/common/common_footer.ftl">
     </div>
    <#include "/common/common_js.ftl">
</body>
<script type="text/javascript">
    $(document).ready(function() {
        $("#eazyOrderSvc").val('부분청소')
    });
</script>
</html>