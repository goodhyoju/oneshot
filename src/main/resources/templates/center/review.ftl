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
                    <h2 class="display-5 animated fadeIn mb-4">고객후기</h2>
                    <p class="mb-4">
                        이사청소한방을 이용해주신 모든 고객님 감사드립니다. <span class="text-primary">고객 한분 한분의 후기를 소중히 간직하겠습니다.</span>
                    </p>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/review-main.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- Header End -->
        <!-- Testimonial Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 20px;padding: 25px;border-top: solid 2px #00d1b2;">
                    <h2 class="mb-3">이용해주셔서 감사드립니다.</h2>
                    <button class="btn btn-outline-primary" id="addReviewBtn"><i class="fa fa-edit"></i>이용후기 남기기</button>
                </div>
                <div class="row g-2">
                    <div class="col-md-12">
                        <!-- table start -->
                        <table id="reviewTable" class="ui celled table hover" style="width:100%">
                            <thead>
                            <tr>
                                <th>작성일</th>
                                <th>종류</th>
                                <th>내용</th>
                                <th>작성자</th>
                                <th>별점</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <!-- table end -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->
        <#include "/common/common_footer.ftl">
    </div>

    <!-- Modal start -->
    <div class="modal fade" id="addReviewModal" tabindex="-1" role="dialog" aria-labelledby="addReviewModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addReviewModalLabel">고객후기 남기기</h5>
                    <a id="addReviewCloseBtn"><span class="text-dark fw-bold">x</span> </a>
                </div>
                <div class="modal-body" style="z-index: 1">
                    <div class="col-md-12">
                        <div class="row g-2">
                            <div class="col-md-12">
                                <label for="reviewType"><i class="fa fa-check"></i>이용서비스</label>
                                <select class="form-select border-1 py-3" id="reviewType">
                                    <option value="이사청소" selected>이사청소</option>
                                    <option value="이사">이사</option>
                                    <option value="청소">청소</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label for="reviewWriter"><i class="fa fa-check"></i>작성자<small style="font-size: 10px;">(기본으로 랜덤이름이 생성됩니다. 작성자 이름을 입력해주세요.)</small></label>
                                <input type="text" class="form-control border-1 py-3" id="reviewWriter" />
                            </div>
                            <div class="col-md-12">
                                <label for="reviewStart"><i class="fas fa-check"></i>별점</label>
                                <div id="reviewStart" ></div>
                                <input type="hidden" id="reviewScope" class="form-control border-1 py-3" cols="3">
                            </div>
                            <div class="col-md-12">
                                <label for="reviewComment"><i class="fas fa-edit"></i>후기</label>
                                <textarea type="text" id="reviewComment" class="form-control border-1 py-3" cols="3"> </textarea>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-success" id="addReviewSaveBtn"><i class="fa fa-check"></i>저장</button>
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal" id="addReviewCancelBtn"><i class="fa fa-close"></i>취소</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal end -->



    <#include "/common/common_js.ftl">
    <script src="page/review.js"></script>
</body>

</html>