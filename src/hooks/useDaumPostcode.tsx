import { useEffect, useRef } from "react";

type Daum = {
  Postcode: any; // 혹은 Postcode 타입 정확한 타입으로 대체
};

declare global {
  interface Window {
    daum: Daum;
  }
}

type onCompleteProps = {
  address: string;
  addressEnglish: string;
  addressType: string;
  apartment: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  bcode: string;
  bname: string;
  bname1: string;
  bname1English: string;
  bname2: string;
  bname2English: string;
  bnameEnglish: string;
  buildingCode: string;
  buildingName: string;
  hname: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  noSelected: string;
  postcode: string;
  postcode1: string;
  postcode2: string;
  postcodeSeq: string;
  query: string;
  roadAddress: string;
  roadAddressEnglish: string;
  roadname: string;
  roadnameCode: string;
  roadnameEnglish: string;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguCode: string;
  sigunguEnglish: string;
  userLanguageType: string;
  userSelectedType: string;
  zonecode: string;
};

function useDaumPostcode({
  onComplete,
  onFail,
}: {
  onComplete: (data: onCompleteProps) => void;
  onFail?: () => void;
}) {
  const daumRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      console.log(!!(window.daum && window.daum.Postcode));
      if (window.daum && window.daum.Postcode) {
        const daumPostcode = new window.daum.Postcode({
          oncomplete: onComplete,
        });
        daumRef.current = daumPostcode;
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [onComplete]);

  return {
    open: () => {
      if (!daumRef.current) {
        onFail && onFail();
        return;
      }

      daumRef.current.open();
    },
  };
}

export default useDaumPostcode;
