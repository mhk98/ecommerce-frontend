import { useStatus } from "@/context/contextStatus";
import { hostname } from "@/lib/config";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Cart from "../Cart";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbar from "./Navbar/Navbar";
import ResLeftMenu from "./RsLeftMenu/RsLeftMenu";
import SideProfileMenu from "./SideProfileMenu/SideProfileMenu";
import CountUp from "react-countup";
import request from "@/lib/request";
import Head from "next/head";
import parse from "html-react-parser";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  const [total, settotal] = useState(0);
  const [pixel, setPixel] = useState(null);

  const {
    cartItems,
    setCartItems,
    loading,
    renderMe,
    setLoading,
    popUpImage,
    popupShow,
    setPopupShow,
    bannerText,
    flag,
    setIsCartOpen,
    primaryColor,
    setIsScrolled,
  } = useStatus();

  useEffect(() => {
    const totalPrice = cartItems?.reduce(
      (a, b) =>
        a +
        (b?.sellingPrice
          ? b?.sellingPrice * b?.quantity
          : b?.sellingPrice * b?.quantity),
      0
    );
    settotal(totalPrice);
  }, [cartItems, renderMe]);

  useEffect(() => {
    const getData = async () => {
      if (typeof document !== "undefined") {
        const res = await request(`home/site-color`);
        const root = document.documentElement;
        root.style.setProperty("--color-primary", res?.data?.colors?.primary);
        root.style.setProperty(
          "--color-secondary",
          res?.data?.colors?.secondary
        );
      }
    };

    getData();
  }, []);

  useEffect(() => {
    let getData = async () => {
      let res = await request(`setting/fetch-fb-pixel`);
      if (res?.success) {
        // console.log("res",res?.data?.script);
        setPixel(res?.data?.script);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (router?.pathname !== "/products/[slug]") {
      setIsScrolled(true);
    }
  }, [router?.pathname]);

  /* const pagesWithoutSideCategory = ["/landing/[slug]"];
  const shouldHideSideCategory = pagesWithoutSideCategory.includes(
    router.pathname
  ); */
  const shouldHideSideCategory = router.pathname.startsWith("/landing/");

  return (
    <>
      {pixel !== null ? <Head>{parse(pixel)}</Head> : null}

      <div className="font-body bg-white">
        <Header />
        {!shouldHideSideCategory ? <Navbar /> : null}

        <ResLeftMenu />
        <SideProfileMenu />
        <Fragment>{children}</Fragment>
        {!shouldHideSideCategory ? <BottomNavbar /> : null}
        {!shouldHideSideCategory ? <Footer /> : null}

        {!shouldHideSideCategory ? (
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        ) : null}

        {!shouldHideSideCategory ? (
          <div className="fixed bottom-2/4 right-0 z-10 w-20 text-center cursor-pointer  border border-primary shadow-lg xls:hidden xms:hidden xs:hidden sm:hidden">
            <div className="bg-white" onClick={() => setIsCartOpen(true)}>
              <div>
                <Image
                  height={30}
                  width={80}
                  src="/image/CompleteShallowFlyingsquirrel-size_restricted.gif"
                  alt="category"
                />
              </div>
              <div className="border-b border-primary">
                <p className="text-sm mt-[6px] font-semibold text-black">
                  ৳
                  <CountUp
                    start={0}
                    end={total}
                    duration={5}
                    delay={1}
                    suffix=""
                    className="pl-1"
                  />
                </p>
              </div>
              <p className="text-sm text-white bg-primary font-semibold">
                {" "}
                {cartItems?.length} items
              </p>
            </div>
          </div>
        ) : null}

        {popUpImage?.web && popUpImage?.isShow == true && (
          <div
            className={`${styles.modal} ${
              popupShow ? styles.displayBlock : styles.displayNone
            }`}
          >
            <section className={styles.mainModal}>
              {popUpImage?.url == "" ? (
                <>
                  <img
                    src={`${hostname}/${popUpImage?.web}`}
                    className="h-96 w-full object-fill"
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    height={25}
                    width={25}
                    style={{
                      position: "fixed",
                      top: "3",
                      right: "5",
                      cursor: "pointer",
                    }}
                    color="white"
                    onClick={() => setPopupShow(false)}
                  />
                </>
              ) : (
                <>
                  <Link href={`${popUpImage?.url}`} target="__blank">
                    <img
                      src={`${hostname}/${popUpImage?.web}`}
                      className="h-96 w-full object-fill"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTimes}
                    height={25}
                    width={25}
                    style={{
                      position: "fixed",
                      top: "3",
                      right: "5",
                      cursor: "pointer",
                    }}
                    color="white"
                    onClick={() => setPopupShow(false)}
                  />
                </>
              )}
            </section>
          </div>
        )}
        {popUpImage?.web && popUpImage?.isShow == true && (
          <div
            className={`${styles.modal} ${
              popupShow ? styles.displayMobileBlock : styles.displayNone
            }`}
          >
            <section className={styles.mainMobileModal}>
              {popUpImage?.url == "" ? (
                <>
                  <img
                    src={`${hostname}/${popUpImage?.web}`}
                    className="h-96 w-full object-fill"
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    height={25}
                    width={25}
                    style={{
                      position: "fixed",
                      top: "3",
                      right: "5",
                      cursor: "pointer",
                    }}
                    color="white"
                    onClick={() => setPopupShow(false)}
                  />
                </>
              ) : (
                <>
                  <Link href={`${popUpImage?.url}`} target="__blank">
                    <img
                      src={`${hostname}/${popUpImage?.web}`}
                      className="h-96 w-full object-fill"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTimes}
                    height={25}
                    width={25}
                    style={{
                      position: "fixed",
                      top: "3",
                      right: "5",
                      cursor: "pointer",
                    }}
                    color="white"
                    onClick={() => setPopupShow(false)}
                  />
                </>
              )}
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
