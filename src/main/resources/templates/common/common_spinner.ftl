<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</div>
<input type="hidden" id="myip" value="${myip}" />
<input type="hidden" id="pagename" value="${page}" />



<!-- Modal start -->
<div class="modal fade" id="privacyContentModal" tabindex="-1" role="dialog" aria-labelledby="privacyContentLabel" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="privacyContentLabel">개인정보 필수적 수집, 이용에 관한 사항</h5>
                <a id="privacyContentCloseBtn"><span class="text-dark fw-bold">x</span> </a>
            </div>
            <div class="modal-body" style="z-index: 1">
                <div class="col-md-12">
                    <h5 class="mb-2">
                        이사청소한방과의 거래와 관련하여 이사청소한방이 본인의 개인정보를 수집·이용 하고자 하는 경우 [개인정보 보호법]제15조 및 제22조, 제24조, [신용정보의 이용 및 보호에 관한 법률]제32조, 제33조 및 제34조에 따라 동의를 얻어야 합니다. 이에 본인은 이사청소한방이 아래의 내용과 같이 본인의 개인정보를 수집·이용 하는데 동의합니다.
                    </h5>
                    <p class="text-primary fw-bold">1. 개인(신용)정보의 수집·이용 목적</p>
                    <p><i class="fa fa-check"></i>계약의 체결·유지·이행·관리·개선, 신청 상품서비스 제공, 신청 서비스 제공에 따른 요금정산 컨텐츠 제공, 청구서 등 발송, 법령상 의무이행, 분쟁처리, 전화상담업무, 민원처리, 본인여부 확인, 구매 및 요금결제, 요금추심</p>
                    <p><i class="fa fa-check"></i>회원 관리 서비스 이용에 따른 본인확인, 개인식별, 불햘회원의 부정 이용 방지와 비인가 사용방지, 가입의사 확인</p>
                    <p><i class="fa fa-check"></i>마케팅 및 광고의 활용접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>

                    <p class="text-primary fw-bold">2. 수집·이용할 개인정보의 내용</p>
                    <p><i class="fa fa-check"></i>개인식별정보 : 성명, 주민등록번호, 주민등록증 발급일. 연락처(휴대폰, 자택, 직장), 주소(자택, 직장), 이메일, 직장명, 부서, 직위, 성별, 국적, 운전면허번호, 여권번호, 외국인등록번호, 음성Data</p>
                    <p><i class="fa fa-check"></i>계약 및 서비스의 체결·유지·이행·관리·개선 등과 관련하여 본인이 제공한 정보 이하에서는 개인식별정보에 해당하는 각각의 개별정보 명칭은 생략합니다.</p>
                    <p><i class="fa fa-check"></i>로그인ID, 패스워드, 별명, 이메일, 서비스이용기록, 접속로그, 쿠키, 접속IP정보, 결제기록</p>

                    <p class="text-primary fw-bold">3. 개인(신용)정보의 보유 및 이용기간</p>
                    <p><i class="fa fa-check"></i>거래 종료(서비스 이용 종료, 회원 탈퇴 또는 분쟁 종료)일로부터 3년(단, 관련법령의 별도 규정이 명시되어 있는 경우 그 기간에 따름)</p>
                    <p><i class="fa fa-check"></i>개인정보 수집 및 이용목적이 달성된 후에는 해당정보를 지체없이 파기하나, 관계법령의 규정에 의하여 보존할 필요하 있는 경우 회사는 관계법령에서 정한 일정한 기간동안 회원정보를 보관합니다.</p>

                    <p class="text-primary fw-bold">4. 개인정보의 파기절차 및 방법</p>
                    <p><i class="fa fa-check"></i>회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부방침 및 기타 관련법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기 되어집니다.</p>
                    <p><i class="fa fa-check"></i>별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.</p>
                    <p><i class="fa fa-check"></i>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>

                    <p class="text-primary fw-bold">5. 개인정보 제공</p>
                    <p><i class="fa fa-check"></i>회원님(이용자)이 사전에 동의한 경우</p>
                    <p><i class="fa fa-check"></i>법령 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>

                    <p class="text-primary fw-bold">6. 수집한 개인정보의 위탁</p>
                    <p><i class="fa fa-check"></i>회사는 회원님(이용자)의 동의없이 회원님(이용자)의 정보를 외부업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁업무 내용에 대해 회원님(이용자)께 통지하고 필요한 경우 사전 동의를 받겠습니다.</p>

                    <p class="text-primary fw-bold">7. 이용자 및 법정대리인의 권리와 그 행사방법</p>
                    <p><i class="fa fa-check"></i>회원님(이용자)은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 가입해지를 요청할 수도 있습니다.
                        회원님(이용자)들의 개인정보 조회·수정을 위해서는 ‘개인정보변경’[또는 ‘회원정보수정’ 등]을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인확인 절차를 거친 후 직접 열람·정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
                        회원님(이용자)가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
                        회사는 회원님(이용자)의 요청에 의해 해지 또는 삭제된 개인정보는 “개인(신용)정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>

                    <p class="text-primary fw-bold">8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</p>
                    <p>회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 회사의 홈페이지를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
                    <p><i class="fa fa-check"></i>쿠키 등 사용목적 : 회원과 비회원의 접속빈도나 방문시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취추적, 각종 이벤트 참여 정도 및 방문 횟수 파악 등을 통한 타켓 마케팅 및 개인 맞춤 서비스 제공</p>
                    <p><i class="fa fa-check"></i>회원님(이용자)는 쿠키설치에 대한 선택권을 가지고 있습니다. 따라서, 회원님(이용자)께서는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                    <p><i class="fa fa-check"></i>쿠키 설정 거부 방법 : 쿠키설정을 거부하는 방법으로는 회원님(이용자)이 사용하시는 웹브라우저 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>

                    <p class="text-primary fw-bold">9. 개인(신용)정보 선택적 동의</p>
                    <p><i class="fa fa-check"></i>
                        이사청소한방 이벤트·행사 안내, 상품 안내 및 이용 권유를 위한 수집 및 이용
                        가. 개인(신용)정보의 수집.이용 목적 : 이사청소한방의 행사안내(할인, 이벤트 등), 귀사 및 제휴사 상품·서비스 안내 및 이용권유, 시장조사 및 상품·서비스 연구개발
                        나. 수집.이용할 개인(신용)정보의 내용 : 필수적 수집.이용에 동의한 개인(신용)정보(고유식별정보 제외)
                        다. 개인(신용)정보의 보유 및 이용기간 : 계약 종료 또는 회원 탈퇴 시까지
                    </p>
                    <p><i class="fa fa-check"></i>
                        청소매니아 상품 이외의 부수서비스 안내 등을 위한 수집·이용
                        가. 개인(신용)정보의 수집.이용 목적
                        - 청소매니아의 부수업무와 관련한 마케팅 활동
                        나. 수집.이용할 개인(신용)정보의 내용 : 필수적 수집, 이용에 동의한 개인(신용)정보
                        다. 개인(신용)정보의 보유. 이용기간 : 계약 종료 또는 회원 탈퇴 시까지
                    </p>
                    <p class="text-primary fw-bold">10. 개인정보에 관한 민원서비스</p>
                    <p>회사는 회원님(이용자)의 개인정보를 보호하고 개인정보와 관련한 불한을 처리하기 위하여 아래와 같이 개인정보관리책임자를 지정하고 있습니다.</p>
                    <p><i class="fa fa-check"></i>개인정보관리책임자 : [홈페이지 하단 정보 참고]</p>
                    <p><i class="fa fa-check"></i>이메일 : [홈페이지 하단 정보 참고]</p>
                    <p>귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자에게 신고할 수 있습니다. 회사는 회원님(이용자)들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>
                    <p>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
                    <p><i class="fa fa-check"></i>개인정보보호 침해센터[privacy.kisa.or.kr / 02-405-5118]</p>
                    <p><i class="fa fa-check"></i>정보보호마크인증위원회[www.eprivacy.or.kr / 02-580-9531~2]</p>
                    <p><i class="fa fa-check"></i>대검찰청 사이버범죄신고[spo.go.kr / 02-3480-2000]</p>
                    <p><i class="fa fa-check"></i>경찰청 사이버안전국[www.ctrc.go.kr / 1566-0112]</p>

                    <p class="text-primary fw-bold">11. 기타</p>
                    <p><i class="fa fa-check"></i>홈페이지에 링크되어 있는 웹사이트들이 개인정보를 수집하는 개별적인 행위에 대해서는 본 “개인정보취급방침”이 적용되지 않음을 알려 드립니다.</p>

                    <p class="text-primary fw-bold">12. 고지의 의무</p>
                    <p>현 개인정보취급방침의 내용이 변경될 경우에는 개정 최소 7일전부터 홈페이지의 “공지사항” 또는 “팝업”을 통해 고지 하겠습니다.</p>
                    <p><i class="fa fa-check"></i>공고일자 : 2022년 05월 23일</p>
                    <p><i class="fa fa-check"></i>시행일자 : 2022년 05월 23일</p>

                    <h5 class="mb-2">
                        (주)이사방앤일호차 제3자정보제공동의
                    </h5>
                    <p class="text-primary fw-bold">1. 개인정보를 제공받는 자와 제공 목적</p>
                    <p><i class="fa fa-check"></i>(주)이사방앤일호차로 개인정보를 제공하는자는 다음과 같다. 각 회원사(지점), ㈜텐핑, ㈜마케팅이즈, TP컴퍼니, 애드 마스터, 주식회사 케이앤제이솔루션, (주)일호차 : 주문 처리, 견적 및 계약 서비스방법, VOC 등 서비스판매</p>

                    <p class="text-primary fw-bold">2. 제공대상 개인정보</p>
                    <p><i class="fa fa-check"></i>성명</p>
                    <p><i class="fa fa-check"></i>전화번호 및 팩스번호(집, 사무실, 휴대폰, 팩스 등)</p>
                    <p><i class="fa fa-check"></i>주소 (출발지 및 도착지 주소)</p>
                    <p><i class="fa fa-check"></i>이사일 (서비스일, 출고일, 입고일)</p>
                    <p><i class="fa fa-check"></i>이메일주소</p>
                    <p><i class="fa fa-check"></i>SNS계정 정보</p>
                    <p><i class="fa fa-check"></i>비밀번호(미기입시 제외)</p>
                    <p><i class="fa fa-check"></i>신청서비스(서비스 이용기록의 경우, 이용자가 실제로 이용한 서비스에 관한 이용기록만 생성, 수집됩니다.)</p>

                    <p class="text-primary fw-bold">3. 제공받는 자의 개인정보 보유 및 이용기간</p>
                    <p><i class="fa fa-check"></i>제공 동의일로부터 개인정보의 제공 목적을 달성할 때까지</p>

                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal" id="privacyContentCancelBtn"><i class="fa fa-times"></i> 닫기</button>
            </div>
        </div>
    </div>
</div>
<!-- Modal end -->