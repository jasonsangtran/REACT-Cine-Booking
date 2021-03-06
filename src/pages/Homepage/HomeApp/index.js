import React, { useEffect, useRef } from "react";
import useStyles from "./style";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import { saveBeforeinstallpromptEvent } from "../../../reducers/actions/Movie";

export default function HomeApp() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const textDecoration = { textDecoration: "underline" };
  const classes = useStyles();
  const deferredPrompt = useRef(null);
  const dispatch = useDispatch();
  const event = useSelector(
    (state) => state.movieReducer.saveBeforeinstallpromptEvent
  );

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
    });
    return () => {
      dispatch(saveBeforeinstallpromptEvent(deferredPrompt.current));
    };
  }, []);

  const installPWA = () => {
    const eventPrompt = deferredPrompt.current ?? event;
    eventPrompt.prompt();
    eventPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt.current = null;
    });
  };

  return (
    <div id="ungdung">
      <div className={classes.mobileApp}>
        <div className={classes.mainMaxWidth}>
          <div className="row">
            <div className="col-lg-6 ">
              <div
                className={`${classes.mobileApp__left} text-center text-lg-left`}
              >
                <div>
                  <p className={classes.textLeft}>Super App dành cho</p>
                  <p className={classes.textLeft}>tín đồ điện ảnh</p>
                  <br />
                  <p>
                    Đặt vé, bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
                  </p>
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={() => installPWA()}
                  >
                    Tải App Ngay
                  </button>
                  <br />
                  <p className="py-3">
                    Trên {" "}
                    <span>
                      <a
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={textDecoration}
                      >
                        App Store
                      </a>
                    </span>{" "}
                    và{" "}
                    <span>
                      <a
                        style={textDecoration}
                        href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CH Play
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={classes.mobileApp__right}>
                <img
                  className={classes.bgmobile}
                  src="/img/mobile/mobile.png"
                  alt="mobile"
                />
                <Slider {...settings} className={classes["slick-mobile"]}>
                  <div>
                    <img src="./img/mobile/slide1.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide2.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide3.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide4.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide5.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide6.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide7.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide8.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide9.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide10.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide11.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide12.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide13.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide14.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide15.jpg" alt="" />
                  </div>
                  <div>
                    <img src="./img/mobile/slide16.jpg" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
