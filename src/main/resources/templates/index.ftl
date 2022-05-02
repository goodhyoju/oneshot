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
                <div class="col-md-7 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4"><span class="text-primary">이사청소 한방</span>은 이사,청소분야에서 국내 최고의 전문기업입니다. </h1>
                    <p class="animated fadeIn mb-4 pb-2">도서 산간지역, 일부 섬지역을 제외하고 국내 전지역에서 이사와 더불어 청소까지 한방으로 해결이 가능한 대행 서비스를 제공하고 있습니다.</p>
                </div>
                <div class="col-md-5 animated fadeIn">
                    <div class="owl-carousel header-carousel">
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="img/index-5.jpg" alt="">
                        </div>
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="img/index-1.jpg" alt="">
                        </div>
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="img/index-2.jpg" alt="">
                        </div>
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="img/index-3.jpg" alt="">
                        </div>
                        <div class="owl-carousel-item">
                            <img class="img-fluid" src="img/index-4.jpg" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->

        <!-- Search Start -->
        <#include "/common/common_search.ftl">
        <!-- Search End -->

        <!-- About Start -->
        <div class="container-xxl py-5" style="margin-top: 50px;">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="about-img position-relative overflow-hidden p-5 pe-0">
                            <img class="img-fluid w-100" src="img/about.jpg">
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.8s">
                        <h2 class="mb-4">고객만족도가 우수한 기업 <span class="text-primary">이사청소 한방</span></h2>
                        <p class="mb-4">이사청소한방은 직영마스터팀(출장기사) 제도를 운영하여 고객님께서 안전하고 편한 마음으로
                            이사와 청소에 관련한 모든 서비스를 이용하실 수 있도록 최선을 다하고 있는 이사와 청소 전문
                            기업으로 여러 현장의 특성과 상황별로 많은 경험을 바탕으로 현장에 대한 이해와 고객님들의
                            요구에 대한 이해도가 높아 고객만족도가 아주 우수한 기업입니다.
                        </p>
                        <p><i class="fa fa-check text-primary me-3"></i>직영마스터팀(출장기사) 제도를 운영</p>
                        <p><i class="fa fa-check text-primary me-3"></i>15년 이상 축적된 풍부하고 우수하 고객서비스 노하우</p>
                        <p><i class="fa fa-check text-primary me-3"></i>개인고객이 활용하기 힘든 최첨단/친환경 장비를 이용하여 위생적인 서비스를 제공</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->


        <!-- Property List Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-12">
                        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h2 class="mb-3">다양한 서비스 제공</h2>
                            <p>15년 이상 축적된 풍부하고 우수하 고객서비스 노하우를 바탕으로 개인고객이 활용하기 힘든 최첨단/친환경 장비를 이용하여 위생적인 서비스를 제공</p>
                        </div>
                    </div>

                </div>
                <div class="tab-content">
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="movetype1"><img class="img-fluid" src="img/movetype1_s.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">이사</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">가정이사</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="movetype1">전문적인 포장이사</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                    <div class="d-flex border-top">
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-box text-primary me-2"></i>포장</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-truck-moving text-primary me-2"></i>이동</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-shower text-primary me-2"></i>정리</small>
                                        <small class="flex-fill text-center py-2"><i class="fa fa-check text-primary me-2"></i>마무리</small>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="movetype2"><img class="img-fluid" src="img/movetype2_s.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">이사</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">원룸이사</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="movetype2">소규모 이사</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                    <div class="d-flex border-top">
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-box text-primary me-2"></i>포장</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-truck-moving text-primary me-2"></i>이동</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-shower text-primary me-2"></i>정리</small>
                                        <small class="flex-fill text-center py-2"><i class="fa fa-check text-primary me-2"></i>마무리</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="movetype3"><img class="img-fluid" src="img/movetype3_s.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">이사</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">보관이사</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="movetype3">보관 서비스</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                    <div class="d-flex border-top">
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-truck-moving text-primary me-2"></i>이사</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-campground text-primary me-2"></i>보관</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-shield text-primary me-2"></i>보안</small>
                                        <small class="flex-fill text-center py-2"><i class="fa fa-home text-primary me-2"></i>보장</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="movetype4"><img class="img-fluid" src="img/movetype4_s.jpg" alt=""></a>
                                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">이사</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">기업이사</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="movetype3">기업 맞춤형</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                    <div class="d-flex border-top">
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar text-primary me-2"></i>계획수립</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-suitcase text-primary me-2"></i>특수포장</small>
                                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-truck-movin text-primary me-2"></i>운송</small>
                                        <small class="flex-fill text-center py-2"><i class="fa fa-shower  text-primary me-2"></i>정리</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="cleantype1"><img class="img-fluid" src="img/cleantype1_s.jpg" alt=""></a>
                                        <div class="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">청소</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">입주청소</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="cleantype1">고객중심의 청소</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="cleantype2"><img class="img-fluid" src="img/cleantype2_s.jpg" alt=""></a>
                                        <div class="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">청소</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">이사청소</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="cleantype2">위생적인 청소</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="cleantype3"><img class="img-fluid" src="img/cleantype3_s.jpg" alt=""></a>
                                        <div class="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">청소</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">거주청소</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="cleantype3">소중한 우리집의 대청소</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.38s">
                                <div class="property-item rounded overflow-hidden">
                                    <div class="position-relative overflow-hidden">
                                        <a href="cleantype4"><img class="img-fluid" src="img/cleantype4_s.png" alt=""></a>
                                        <div class="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">청소</div>
                                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">부분청소</div>
                                    </div>
                                    <div class="p-4 pb-0">
                                        <a class="d-block h5 mb-2" href="cleantype4">지정공간 청소</a>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>전국 가능(일부지역 제외)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Property List End -->


        <!-- Call to Action Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="bg-light rounded p-3">
                    <div class="bg-white rounded p-4" style="border: 1px dashed rgba(0, 185, 142, .3)">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img class="img-fluid rounded w-100" src="img/call-to-action.jpg" alt="">
                            </div>
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div class="mb-4">
                                    <h2 class="mb-3">깨끗함을 지향하는 고객중심의 이사/청소를 약속드립니다.</h2>
                                    <p>안녕하십니까,<br/>
                                        이사청소한방를 방문해 주신 여러분께 진심으로 감사드립니다.
                                        차별화된 기술과 청소매니아만의 노하우로 아무로 작은 일이라도 고객님이 만족할때까지 내 가족의 집을 다루듯이 최선을 다해 성심성의껏 작업에 임할 것을 약속드립니다.
                                        아름답고 청결한 환경을 위해 이사청소한방은 매일 끊임없이 연구하고 노력합니다.
                                        문의사항이 있으시면 언제든지 주저말고 연락바랍니다. 감사합니다.
                                    </p>
                                </div>
                                <a href="tel:1899-2455" class="btn btn-primary py-3 px-4 me-2 " style="float: right;"><i class="fa fa-phone-alt me-3"></i> 전화문의</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Call to Action End -->
        <#include "/common/common_footer.ftl">
    </div>

    <#include "/common/common_js.ftl">
</body>

</html>