<div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
    <div class="container">
        <h5 class="mb-4 text-white"><i class="fa fa-comment-alt me-3"></i>상담신청<small class="text-warning" style="margin-left: 9px;font-size: 15px;"><i class="fa fa-info-circle" aria-hidden="true"></i> 이름과 전화번호가 같은 상담은 등록되지 않습니다.</small></h5>
        <div class="row g-2">
            <div class="col-md-12">
                <div class="row g-2">
                    <div class="col-md-4">
                        <label for="orderSvc" class="text-white"><i class="fa fa-check"></i> 서비스</label>
                        <select class="form-select border-0 py-2" id="orderSvc">
                            <option value="청소+이사" selected>청소+이사(할인적용)</option>
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
                        <label for="orderHomeSize" class="text-white"><i class="fas fa-edit"></i>분양평수</label>
                        <input type="number" id="orderHomeSize" class="form-control border-0 py-2" />
                    </div>
                    <div class="col-md-10 p-4 text-center">
                        <input type="checkbox" id="checkShareInfo" />
                        <label for="checkShareInfo" style="display: inline-block;"></label>
                        <p id="privacyView" class="d-inline text-white fs-6" style="color: white;position: relative;top: -3px;">개인정보수집 및 이용, 제3자 제공 동의 <i class="fa fa-search"></i></p>
                    </div>

                </div>
            </div>

            <div class="col-md-12">
                <label for="orderBtn"></label>
                <button class="btn btn-primary border-0 w-100 py-2" id="orderBtn"><i class="fa fa-check me-3"></i> 신청하기</button>
            </div>
        </div>
        <#--<div class="row g-2">
            <div class="col-md-10">
                <div class="row g-2">
                    <div class="col-md-4">
                        <label for="orderSvc" class="text-white"><i class="fa fa-check"></i>서비스</label>
                        <select class="form-select border-0 py-2" id="eazyOrderSvc">
                            <option value="청소+이사" selected>청소+이사(할인적용)</option>
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
                        <label for="eazyOrderName" class="text-white"><i class="fas fa-edit"></i>이름</label>
                        <input type="text" id="eazyOrderName" class="form-control border-0 py-2" placeholder="김한방">
                    </div>
                    <div class="col-md-4">
                        <label for="eazyOrderPhone" class="text-white"><i class="fas fa-edit"></i>휴대폰번호</label>
                        <input type="text" id="eazyOrderPhone" class="form-control border-0 py-2" placeholder="000-0000-0000">
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <label for="orderBtn"></label>
                <a href="tel:0000-0000" class="btn btn-primary border-0 w-100 py-2" id="eazyOrderBtn"><i class="fa fa-phone-alt me-3"></i>무료 상담요청하기</a>
            </div>
        </div>-->
    </div>
</div>