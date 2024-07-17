import { useStatus } from "@/context/contextStatus";
import { useRouter } from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { useEffect, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import postRequest from "@/lib/postRequest";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";

const DetailSection = ({
  data,
  selectImage,
  stock,
  setStock,
  regularPrice,
  sellingPrice,
  selected,
  setSelected,
  showingVariantList,
  selectedVariation,
  handleAttribute,
  imageSelect,
}) => {
  const {
    setPromoDiscount,
    setIsRenderMe,
    renderMe,
    setShakeAnimation,
    token,
    wishCall,
    setWishCall,
    wishData,
    orderBtn,
    cartBtn,
  } = useStatus();

  const router = useRouter();

  const [arr, setArr] = useState([]);

  const { cartItems, setCartItems } = useStatus();

  const [activeVariation, setActiveVariation] = useState(null);

  const [count, setCount] = useState(1);

  const [variation, setVariation] = useState({});

  const [isExist, setIsExist] = useState(null);
  const [isVariant, setIsVariant] = useState(false);
  const handleVariant = () => setIsVariant(!isVariant);

  useEffect(() => {
    if (data) {
      setSelected(false);
      setActiveVariation(null);
      setStock(null);
    }
  }, [data]);

  const handleCart = () => {
    if (data?.isVariant) {
      let isNotValid = showingVariantList.find(
        (val) => val.selectedValue === ""
      );
      if (selectedVariation !== null && !isNotValid) {
        setCount(1);
        let item = {
          _id: data?._id,
          name: data?.name,
          // image: selectImage?.length > 0 ? selectImage : data?.galleryImage[0],
          image:
            data?.isVariant == false
              ? data?.galleryImage[0]
              : data?.isVariant == true && selectImage?.length == 0
              ? imageSelect
              : selectImage,
          sellingPrice: data?.isFlashDeal
            ? selectedVariation?.flashPrice
            : selectedVariation?.sellingPrice,
          isVariant: data?.isVariant,
          quantity: count,
          variation: selectedVariation,
          stock: stock,
        };

        const is_exist = cartItems.find(
          (variation) => variation?.variation?._id == item.variation._id
        );

        if (is_exist) {
          const index = cartItems.findIndex(
            (variation) => variation?.variation == is_exist?.variation
          );

          cartItems[index].quantity += count;
          setCartItems(cartItems);
          setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          setPromoDiscount(null);
          destroyCookie({}, "promoDiscount", {
            path: "/",
          });
          setShakeAnimation(true);
          setTimeout(() => {
            setShakeAnimation(false);
          }, 2000);
          setIsRenderMe(!renderMe);
        }

        if (is_exist === undefined) {
          setCartItems((cartItems) => [...cartItems, item]);
          setCookie(null, "lazmaCart", JSON.stringify([...cartItems, item]), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          setPromoDiscount(null);
          destroyCookie({}, "promoDiscount", {
            path: "/",
          });
          setShakeAnimation(true);
          setTimeout(() => {
            setShakeAnimation(false);
          }, 2000);
          setIsRenderMe(!renderMe);
        }
      } else {
        setSelected(true);
      }
    } else {
      setCount(1);
      let item = {
        _id: data?._id,
        name: data?.name,
        image:
          data?.isVariant == false
            ? data?.galleryImage[0]
            : data?.isVariant == true && selectImage?.length == 0
            ? imageSelect
            : selectImage,
        sellingPrice: data?.isFlashDeal
          ? data?.nonVariation?.flashPrice
          : data?.nonVariation?.sellingPrice,
        isVariant: data?.isVariant,
        quantity: count,
        variation: selectedVariation,
        stock: stock,
      };

      const is_exist = cartItems.find(
        (variation) => variation?._id == item?._id
      );

      if (is_exist) {
        const index = cartItems.findIndex(
          (variation) => variation?._id == is_exist?._id
        );

        cartItems[index].quantity += count;
        setCartItems(cartItems);
        setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setPromoDiscount(null);
        destroyCookie({}, "promoDiscount", {
          path: "/",
        });
        setShakeAnimation(true);
        setTimeout(() => {
          setShakeAnimation(false);
        }, 2000);
        setIsRenderMe(!renderMe);
      }

      if (is_exist === undefined) {
        setCartItems((cartItems) => [...cartItems, item]);
        setCookie(null, "lazmaCart", JSON.stringify([...cartItems, item]), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setPromoDiscount(null);
        destroyCookie({}, "promoDiscount", {
          path: "/",
        });
        setShakeAnimation(true);
        setTimeout(() => {
          setShakeAnimation(false);
        }, 2000);
        setIsRenderMe(!renderMe);
      }
    }
  };

  const handleBuyNow = () => {
    if (data?.isVariant) {
      let isNotValid = showingVariantList.find(
        (val) => val.selectedValue === ""
      );
      if (selectedVariation !== null && !isNotValid) {
        setCount(1);
        let item = {
          _id: data?._id,
          name: data?.name,
          image:
            data?.isVariant == false
              ? data?.galleryImage[0]
              : data?.isVariant == true && selectImage?.length == 0
              ? data?.variations[0]?.images[0]
              : selectImage,
          sellingPrice: data?.isFlashDeal
            ? selectedVariation?.flashPrice
            : selectedVariation?.sellingPrice,
          isVariant: data?.isVariant,
          quantity: count,
          variation: selectedVariation,
          stock: stock,
        };

        const is_exist = cartItems.find(
          (variation) => variation?.variation?._id == item?.variation?._id
        );

        if (is_exist) {
          const index = cartItems.findIndex(
            (variation) => variation?.variation == is_exist?.variation
          );

          cartItems[index].quantity += count;
          setCartItems(cartItems);
          setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          setPromoDiscount(null);
          destroyCookie({}, "promoDiscount", {
            path: "/",
          });
          setIsRenderMe(!renderMe);

          router.push(`/checkout`);
        }

        if (is_exist === undefined) {
          setCartItems((cartItems) => [...cartItems, item]);
          setCookie(null, "lazmaCart", JSON.stringify([...cartItems, item]), {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          setPromoDiscount(null);
          destroyCookie({}, "promoDiscount", {
            path: "/",
          });
          setIsRenderMe(!renderMe);

          router.push(`/checkout`);
        }
      } else {
        setSelected(true);
      }
    } else {
      setCount(1);
      let item = {
        _id: data?._id,
        name: data?.name,
        image:
          data?.isVariant == false
            ? data?.galleryImage[0]
            : data?.isVariant == true && selectImage?.length == 0
            ? data?.variations[0]?.images[0]
            : selectImage,
        sellingPrice: data?.isFlashDeal
          ? data?.nonVariation?.flashPrice
          : data?.nonVariation?.sellingPrice,
        isVariant: data?.isVariant,
        quantity: count,
        variation: selectedVariation,
        stock: stock,
      };

      const is_exist = cartItems.find(
        (variation) => variation?._id == item?._id
      );

      if (is_exist) {
        const index = cartItems.findIndex(
          (variation) => variation?._id == is_exist?._id
        );

        cartItems[index].quantity += count;
        setCartItems(cartItems);
        setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setPromoDiscount(null);
        destroyCookie({}, "promoDiscount", {
          path: "/",
        });

        setIsRenderMe(!renderMe);
        router.push(`/checkout`);
      }

      if (is_exist === undefined) {
        setCartItems((cartItems) => [...cartItems, item]);
        setCookie(null, "lazmaCart", JSON.stringify([...cartItems, item]), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setPromoDiscount(null);

        setIsRenderMe(!renderMe);
        router.push(`/checkout`);
      }
    }
  };

  useEffect(() => {
    const is_exist = wishData.find((product) => product?._id == data?._id);
    setIsExist(is_exist);
  }, [wishData, data]);

  console.log(data);
  console.log(cartItems);

  return (
    <div className="dark:text-black col-span-5 sm:col-span-1 pb-7 xls:pb-3 xms:pb-3 xs:pb-3 xls:pr-2 xms:pr-2 xs:pr-1 pt-7 xls:pt-0 xms:pt-0 xs:pt-0">
      <div>
        {data?.isFlashDeal == true && (
          <button className="font-semibold text-white px-4 py-1 bg-red-500 rounded-full text-sm tracking-wider flex items-center space-x-2 mb-3">
            <div>
              <AiOutlineThunderbolt color="#fff" size={20} />{" "}
            </div>
            <p>Flash Deal</p>
          </button>
        )}{" "}
        <p className="font-semibold text-xl xls:text-lg xms:text-lg xs:text-base dark:text-black col-span-10 pb-2">
          {data?.name}
        </p>
        {data?.isVariant == true ? (
          <div className="mt-3 ">
            {isVariant && (
              <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xls:w-[90%] xms:w-[70%] xs:w-[60%] sm:w-[80%] md:w-[70%] xl:w-[50%] lg:w-[40%] z-10  p-4 bg-white shadow">
                <div className=" text-right">
                  <button onClick={handleVariant}>
                    <RxCross2 />
                  </button>
                </div>
                {showingVariantList?.map((item, Mainindex) => (
                  <>
                    <div className="xls:flex xms:flex xs:flex hidden">
                      {item?.values?.length > 0 ? (
                        <div className="w-[70px]">{item?.name}</div>
                      ) : null}
                      <div className="grid grid-cols-4  gap-4 mb-3">
                        {item?.values.map((col, index) => (
                          <>
                            {item?.selectedValue == col ? (
                              <button
                                className="px-2 py-2 text-xs text-white bg-gray-800"
                                onClick={() => handleAttribute(item, col)}
                              >
                                {col}
                              </button>
                            ) : (
                              <button
                                className="px-1 py-2 text-xs border border-black"
                                onClick={() => handleAttribute(item, col)}
                              >
                                {col}
                              </button>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="xxl:block xl:block lg:block md:block sm:block hidden">
                      {item?.values?.length > 0 ? (
                        <div>{item?.name}</div>
                      ) : null}
                      <div className="grid grid-cols-5  gap-4 mb-3">
                        {item?.values.map((col, index) => (
                          <>
                            {item?.selectedValue == col ? (
                              <button
                                className="px-2 py-2 text-xs text-white bg-gray-800"
                                onClick={() => handleAttribute(item, col)}
                              >
                                {col}
                              </button>
                            ) : (
                              <button
                                className="px-1 py-2 text-xs border border-black"
                                onClick={() => handleAttribute(item, col)}
                              >
                                {col}
                              </button>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
                <div>
                  {data?.isVariant && selectedVariation !== null ? (
                    <h2 className="font-semibold">
                      {selectedVariation?.regularPrice ==
                      selectedVariation?.sellingPrice ? null : (
                        <span className="line-through text-sm text-black">
                          ৳ {selectedVariation?.regularPrice * count}
                        </span>
                      )}

                      <span className="text-red-600 text-2xl">
                        ৳ {selectedVariation?.sellingPrice * count}
                      </span>
                    </h2>
                  ) : data?.isVariant && selectedVariation == null ? (
                    <h2 className="font-semibold ">
                      {data?.variations[0]?.regularPrice ==
                      data?.variations[0]?.sellingPrice ? null : (
                        <span className="line-through text-sm text-black">
                          ৳ {data?.variations[0]?.regularPrice * count}
                        </span>
                      )}

                      <span className="text-red-600 text-2xl">
                        ৳ {data?.variations[0]?.sellingPrice * count}
                      </span>
                    </h2>
                  ) : (
                    <h2 className="font-semibold ">
                      {data?.nonVariation?.regularPrice ==
                      data?.nonVariation.sellingPrice ? null : (
                        <span className="line-through text-sm text-black">
                          ৳ {data?.nonVariation?.regularPrice * count}
                        </span>
                      )}

                      <span className="text-red-600 text-2xl">
                        ৳ {data?.nonVariation?.sellingPrice * count}
                      </span>
                    </h2>
                  )}
                  <button onClick={() => handleCart()}>Add to Cart</button>
                </div>
              </div>
            )}
          </div>
        ) : null}
        {selected == false ? null : (
          <div className="flex items-center space-x-1 mt-2">
            <p className="text-red-500 text-sm">Must select all variations</p>
            <BsArrowUpShort className="text-red-500" size={18} />
          </div>
        )}
        <div className="my-3 xls:my-0 xms:my-0 xs:my-0 sm:my-2 xls:py-2 xms:py-2 xs:py-2 xls:flex xms:flex xs:flex justify-between items-center xls:border-t xms:border-t xs:border-t xls:border-b xms:border-b xs:border-b border-[#d1d5db]">
          <div>
            {data?.isFlashDeal ? (
              <>
                {data?.isVariant && selectedVariation !== null ? (
                  <h2 className="font-semibold">
                    {selectedVariation?.regularPrice ==
                    selectedVariation?.sellingPrice ? null : (
                      <span className="line-through text-sm text-black">
                        ৳ {selectedVariation?.regularPrice * count}
                      </span>
                    )}

                    <span className="text-red-600 text-2xl">
                      ৳ {selectedVariation?.flashPrice * count}
                    </span>
                  </h2>
                ) : data?.isVariant && selectedVariation == null ? (
                  <h2 className="font-semibold ">
                    {data?.variations[0]?.regularPrice ==
                    data?.variations[0].flashPrice ? null : (
                      <span className="line-through text-sm text-black">
                        ৳ {data?.variations[0]?.regularPrice * count}
                      </span>
                    )}

                    <span className="text-red-600 text-2xl">
                      ৳ {data?.variations[0].flashPrice * count}
                    </span>
                  </h2>
                ) : (
                  <h2 className="font-semibold ">
                    {data?.nonVariation?.regularPrice ==
                    data?.nonVariation.flashPrice ? null : (
                      <span className="line-through text-sm text-black">
                        ৳ {data?.nonVariation?.regularPrice * count}
                      </span>
                    )}

                    <span className="text-red-600 text-2xl">
                      ৳ {data?.nonVariation.flashPrice * count}
                    </span>
                  </h2>
                )}
              </>
            ) : data?.isVariant && selectedVariation !== null ? (
              <h2 className="font-semibold">
                {selectedVariation?.regularPrice ==
                selectedVariation?.sellingPrice ? null : (
                  <span className="line-through text-sm text-black">
                    ৳ {selectedVariation?.regularPrice * count}
                  </span>
                )}

                <span className="text-red-600 text-2xl">
                  ৳ {selectedVariation?.sellingPrice * count}
                </span>
              </h2>
            ) : data?.isVariant && selectedVariation == null ? (
              <h2 className="font-semibold ">
                {data?.variations[0]?.regularPrice ==
                data?.variations[0]?.sellingPrice ? null : (
                  <span className="line-through text-sm text-black">
                    ৳ {data?.variations[0]?.regularPrice * count}
                  </span>
                )}

                <span className="text-red-600 text-2xl">
                  ৳ {data?.variations[0]?.sellingPrice * count}
                </span>
              </h2>
            ) : (
              <h2 className="font-semibold ">
                {data?.nonVariation?.regularPrice ==
                data?.nonVariation.sellingPrice ? null : (
                  <span className="line-through text-sm text-black">
                    ৳ {data?.nonVariation?.regularPrice * count}
                  </span>
                )}

                <span className="text-red-600 text-2xl">
                  ৳ {data?.nonVariation?.sellingPrice * count}
                </span>
              </h2>
            )}
          </div>
          <div className="hidden  xls:flex xms:flex xs:flex items-center space-x-2">
            <p className="font-semibold col-span-2 xms:col-span-2 xls:col-span-2 xs:col-span-2 sm:col-span-1 xls:text-sm xms:text-sm xs:text-sm">
              Qty:{" "}
            </p>
            <div className="col-span-6 xls:col-span-6  xms:col-span-6 sm:col-span-1 xs:col-span-4 flex justify-end xls:justify-start xms:justify-start xs:justify-start  items-center">
              <div
                className="bg-gray-100 px-3 py-3 cursor-pointer"
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
              >
                <BiMinus size={15} color="#000" className="font-semibold" />
              </div>
              <input
                type="text"
                value={count}
                className="border-2 border-gray-100 p-[5px] w-[50px] text-center dark:bg-white"
                readOnly
              />

              <div
                className="bg-gray-100 px-3  py-[12px] cursor-pointer"
                onClick={() =>
                  count < 10
                    ? setCount((c) => c + 1)
                    : toast.error(
                        "You can add a maximum of 10 products at one time."
                      )
                }
              >
                <BiPlus size={15} color="#000" className="font-semibold" />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12 sm:grid-cols-2 xls:hidden xms:hidden xs:hidden xls:border-b xms:border-b xs:border-b border-[#d1d5db] xls:pb-2 xms:pb-2 xs:pb-2">
          <p className="font-semibold col-span-2 xms:col-span-2 xls:col-span-2 xs:col-span-2 sm:col-span-1">
            Quantity:{" "}
          </p>
          <div className="col-span-6 xls:col-span-6  xms:col-span-6 sm:col-span-1 xs:col-span-4 flex justify-end xls:justify-start xms:justify-start xs:justify-start  items-center">
            <div
              className="bg-gray-100 px-3 py-2 cursor-pointer"
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
            >
              <BiMinus size={15} color="#000" className="font-semibold" />
            </div>
            <input
              type="text"
              value={count}
              className="border-2 border-gray-100 p-[1px] w-[50px] text-center dark:bg-white"
              readOnly
            />

            <div
              className="bg-gray-100 px-3  py-[8px] cursor-pointer"
              onClick={() =>
                count < 10
                  ? setCount((c) => c + 1)
                  : toast.error(
                      "You can add a maximum of 10 products at one time."
                    )
              }
            >
              <BiPlus size={15} color="#000" className="font-semibold" />
            </div>
          </div>
        </div>
        <div className="mt-6 xls:mt-3 xls:pr-2 xms:mt-3 xs:mt-2 sm:mt-2">
          <div className="flex space-x-5 xls:justify-center xms:justify-center xs:justify-center">
            <button
              className="px-7 xls:px-[25px] xls:w-2/4 xls:text-base xms:px-6   xs:px-6 py-2  bg-green-500 text-white  font-semibold tracking-wide md:text-base text-sm"
              onClick={() =>
                data?.isVariant == true ? handleVariant() : handleCart()
              }
            >
              {cartBtn ?? "Add to Cart"}
            </button>

            <button
              className="px-7 xls:px-[25px] xls:w-2/4 xls:text-base xms:px-6 xs:px-6 py-2 bg-primary text-white  font-semibold tracking-wide md:text-base text-sm"
              onClick={() => handleBuyNow()}
            >
              {orderBtn ?? "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
