import React from "react";

import { Hidden, Box, Button } from '@mui/material';

import Book from '../assets/img/Price/book.png'
function Price1920() {
    return (
      <div>
        <Box className="price-top">
          <div className="price-top-content">
              <div>
                  <p className="c-f-white f-b30b">초이의 소설맛집 초특급 세일!</p>
                  <p className="c-f-white f-b16">가격은 0원, 성능은 무한!</p>
              </div>
              <img src={Book} />
          </div>
        </Box>
        <Box className="price-center">
          <div className="price-center-title">
              <p className="f-b25b">정기구독</p>
              <p className="f-b16 c-f-c666">10만권의 전자책, 오디오북 등 모든 콘텐츠를 무한으로</p>
          </div>
          <div className="price-center-choice">
              <input className="check1" type='radio' id='check1' name='radio' checked/>
              <input className="check2" type='radio' id='check2' name='radio' />
              <label for='check1'>
                  <Box className="price-center-choice-box">
                      <div >
                          <div className="price-center-choice-box-check"/>
                          <p className="f-b20b">개인 6개월 정기구독권</p>
                          <p className="f-b14 c-f-c666"> 첫달 무료 + 9,900원 특가 6개월 “개인 무제한 독서" </p>
                      </div>
                      <div className="flex align-bottom ">
                          <p className="c-f-c444 f-b14b"> 6개월 <span className="f-b20b">9,900</span>원 </p>
                      </div>
                  </Box>
              </label>
              <label for='check2'>
                  <Box className="price-center-choice-box">
                      <div >
                          <div className="price-center-choice-box-check"/>
                          <p className="f-b20b">개인 월 정기구독권</p>
                          <p className="f-b14 c-f-c666"> 첫달 무료 + 5,900원 특가 30일 “개인 무제한 독서" </p>
                      </div>
                      <div className="flex align-bottom ">
                          <p className="c-f-c444 f-b14b"> 월 <span className="f-b20b">5,900</span>원 </p>
                      </div>
                  </Box>
              </label>
          </div>
          <div className="price-center-guide">
              <p className="">유의사항</p>
              <p className="">• 구독 결제는 구독기간 마지막 날 진행되며 결제 후 구독기간은 자동 갱신됩니다.</p>
              <p className="">• 구독 결제 갱신을 중단하고자 할 경우 구독기간 종료 하루 전까지 구독을 해지하셔야 합니다.</p>
              <p className="">• 모든 정기구독은 결제 후 7일간 미사용 시 취소할 수 있습니다.</p>
              <p className="">• 전자책 월 정기구독 중 전자책 연 정기구독 또는 종이책 월/연 정기구독으로 전환 시 남은 이용기간을 연장해드립니다.</p>
          </div>
          <div className="price-center-guide">
              <p className="">무료체험 유의사항</p>
              <p className="">• 무료 체험 후 위약금이나 약정 없이 언제든지 쉽게 해지할 수 있습니다.</p>
              <p className="">• 무료 체험 중 해지할 경우 서비스가 즉시 종료되고 구독 결제가 이루어지지 않습니다.</p>
          </div>
        </Box>
        <Button color="primary" variant="conatined" disableElevation className="price-button">
          <div>
              0원으로 시작하기
          </div>
        </Button>
      </div>
    );
}

function Price600() {
    return (
      <div>
        <Box className="price600-top">
          <div className="price600-top-content">
              <div>
                  <p className="c-f-white f-b30b">초이 초특급 세일!</p>
                  <p className="c-f-white f-b16">가격은 0원, 성능은 무한!</p>
              </div>
              <img src={Book} />
          </div>
        </Box>
        <Box className="price600-center">
          <div className="price600-center-title">
              <p className="f-b25b">정기구독</p>
              <p className="f-b16 c-f-c666">모든 콘텐츠를 무한으로</p>
          </div>
          <div className="price600-center-choice">
              <input className="check1" type='radio' id='check1' name='radio' checked/>
              <input className="check2" type='radio' id='check2' name='radio' />
              <label for='check1'>
                  <Box className="price600-center-choice-box">
                      <div >
                          <div className="price600-center-choice-box-check"/>
                          <p className="f-b20b">개인 6개월 정기구독권</p>
                          <p className="f-b14 c-f-c666"> 첫달 무료 + 9,900원 특가 6개월 </p>
                      </div>
                      <div className="flex align-bottom ">
                          <p className="c-f-c444 f-b14b"> 6개월 <span className="f-b20b">9,900</span>원 </p>
                      </div>
                  </Box>
              </label>
              <label for='check2'>
                  <Box className="price600-center-choice-box">
                      <div >
                          <div className="price600-center-choice-box-check"/>
                          <p className="f-b20b">개인 월 정기구독권</p>
                          <p className="f-b14 c-f-c666"> 첫달 무료 + 5,900원 특가 30일  </p>
                      </div>
                      <div className="flex align-bottom ">
                          <p className="c-f-c444 f-b14b"> 월 <span className="f-b20b">5,900</span>원 </p>
                      </div>
                  </Box>
              </label>
          </div>
          <div className="price600-center-guide">
              <p className="">유의사항</p>
              <p className="">• 구독 결제는 구독기간 마지막 날 진행되며 결제 후 구독기간은 자동 갱신됩니다.</p>
              <p className="">• 구독 결제 갱신을 중단하고자 할 경우 구독기간 종료 하루 전까지 구독을 해지하셔야 합니다.</p>
              <p className="">• 모든 정기구독은 결제 후 7일간 미사용 시 취소할 수 있습니다.</p>
              <p className="">• 전자책 월 정기구독 중 전자책 연 정기구독 또는 종이책 월/연 정기구독으로 전환 시 남은 이용기간을 연장해드립니다.</p>
          </div>
          <div className="price600-center-guide">
              <p className="">무료체험 유의사항</p>
              <p className="">• 무료 체험 후 위약금이나 약정 없이 언제든지 쉽게 해지할 수 있습니다.</p>
              <p className="">• 무료 체험 중 해지할 경우 서비스가 즉시 종료되고 구독 결제가 이루어지지 않습니다.</p>
          </div>
        </Box>
        <Button color="primary" variant="conatined" disableElevation className="price600-button">
          <div>
              0원으로 시작하기
          </div>
        </Button>
      </div>
    );
}

function Price() {
return (
    <div>
        <Hidden smDown>
            <Price1920 />
        </Hidden>
        <Hidden smUp>
            <Price600 />
        </Hidden>
    </div>
);
}

export default Price;
