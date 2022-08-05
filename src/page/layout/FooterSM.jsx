import React from 'react'
import { Stack } from '@mui/material'

//img
import sns1 from "../../assets/img/sns1.png"
import sns2 from "../../assets/img/sns2.png"
import sns3 from "../../assets/img/sns3.png"
import sns4 from "../../assets/img/sns4.png"
import sns5 from "../../assets/img/sns5.png"

function FooterSM() {
    return (
        <div className='sm-footer' >
            <Stack className="sm-footer-box" spacing='30px'>
            <p className='f-b20b'>(주) 초이의 소설맛집 </p>
            <Stack spacing='15px' direction='row'>
                <img className="sm-footer-sns" src={sns1}></img>
                <img className="sm-footer-sns" src={sns2}></img>
                <img className="sm-footer-sns" src={sns3}></img>
                <img className="sm-footer-sns" src={sns4}></img>
                <img className="sm-footer-sns" src={sns5}></img>
            </Stack>
            <Stack spacing="10px" className="f-b12 c-f-c666">
                <p>대표이사 : 최원호</p>
                <p>사업자등록번호 : 000-00-000000 </p>
                <p>호스팅 제공자 : (주) 초이의 소설맛집 </p>
                <p>주소 : 서울특별시 금천구 남부순환로 112길 35</p>
                <p>통신판매업 신고번호 : 2022-서울가산-2022호</p>
                <p>마케팅 제휴 문의 : cube9007@naver.com</p>
                <p>고객정보보호 책임자 : 최원호(cube9007@naver.com)</p>
            </Stack>
            <p className="f-b12 c-f-c666">
                Copyright©2022 초이의 소설맛집 All Rights Reserved.
            </p>
            </Stack>
        </div>
    )
}

export default FooterSM;
