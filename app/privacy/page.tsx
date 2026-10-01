import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "ConnectX 웹사이트의 개인정보 처리 방침입니다.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-cx-bg">
      <div className="mx-auto max-w-3xl break-keep text-left px-6 py-24 sm:py-28">
        <h1 className="text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
          개인정보처리방침
        </h1>
        <p className="mt-4 text-sm text-cx-dim">시행일: 2026년 9월 30일</p>

        <div className="mt-10 flex flex-col gap-8 text-[15px] leading-[1.7] text-cx-muted">
          <p>
            ConnectX(이하 &ldquo;회사&rdquo;)는 이용자의 개인정보를 소중히 다루며, 웹사이트
            (connectx.kr) 운영과 관련해 다음과 같이 개인정보를 처리합니다.
          </p>

          <section>
            <h2 className="text-lg font-bold text-white">1. 수집하는 개인정보 항목 및 수집 방법</h2>
            <p className="mt-3">
              이 웹사이트는 별도의 회원가입 절차나 서버 저장 없이, 이용자가 사이트 내 &ldquo;상담
              신청&rdquo;, &ldquo;문의하기&rdquo; 등 버튼을 통해 본인의 이메일 프로그램으로 직접
              작성해 보내는 내용만을 수집합니다. 문의 양식에는 성함, 연락처, 회사명(해당 시), 문의
              내용 등이 포함될 수 있으며, ConnectX Wellness 문의의 경우 원활한 상담을 위해 나이대·
              성별, 건강 관련 고민 등을 선택적으로 포함할 수 있습니다.
            </p>
            <p className="mt-3">
              이 웹사이트는 별도의 서버나 데이터베이스에 개인정보를 저장하지 않으며, 회원가입,
              쿠키를 통한 자동 수집, 방문자 추적을 하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">2. 개인정보의 이용 목적</h2>
            <p className="mt-3">
              수집된 정보는 문의·상담 요청에 대한 답변 및 서비스 안내 목적으로만 이용하며,
              이용자의 동의 없이 목적 외 용도로 사용하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">3. 개인정보의 제3자 제공 및 위탁</h2>
            <p className="mt-3">
              회사는 이용자의 개인정보를 외부에 제공하거나 위탁하지 않습니다. 다만 ConnectX
              Wellness의 제품 구매는 네이버 스마트스토어를 통해 이루어지며, 이 경우 네이버의
              개인정보처리방침이 별도로 적용됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">4. 개인정보의 보유 및 파기</h2>
            <p className="mt-3">
              이메일로 수신한 문의 내용은 답변 완료 후 합리적인 기간 내에 파기하며, 이용자가
              삭제를 요청할 경우 지체 없이 삭제합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">5. 민감정보(건강정보) 관련 안내</h2>
            <p className="mt-3">
              ConnectX Wellness 상담을 위해 건강 관련 정보를 자발적으로 제공하시는 경우, 해당
              정보는 오직 맞춤 상담 목적으로만 이용되며 해당 항목의 제공은 선택 사항입니다. 제공을
              원하지 않으실 경우 해당 항목을 비워두고 문의하실 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">6. 이용자의 권리</h2>
            <p className="mt-3">
              이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제를 요청할 수 있으며, 아래
              연락처로 문의해 주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">7. 문의처</h2>
            <p className="mt-3">이메일: fortunecho@naver.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
