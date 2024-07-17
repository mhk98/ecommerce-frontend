import DetailSection from '@/Components/ProductDetails/DetailSection';
import ImageGallery from '@/Components/ProductDetails/ImageGallery';
import request from '@/lib/request';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import BreadCrumbs from '@/Components/Common/BreadCrumbs';
import ProductPolicy from '@/Components/ProductDetails/ProductPolicy';
import ProductCard from '@/Components/ProductSection/ProductCard';
import { SiSimilarweb } from 'react-icons/si';
import { hostname, link, project_name } from '@/lib/config';




const ProductDetails = ({data}) => {


const router = useRouter();
  
  const [selectImage, setSelectImage] = useState([])
  const [imageSelect, setImageSelect] = useState(null);
  const [size, setSize] = useState(null);
  const [richDetials, setRichDetails] = useState(null);
  const [totalStock, setTotalStock] = useState(null);
  const [stock, setStock] = useState(null);
  const [regularPrice,setRegularPrice] = useState(null);
  const [sellingPrice,setSellingPrice] = useState(null);
  const [deliveryData, setDeliveryData] = useState({});
  const [activeYoutubeVideo, setActiveYoutubeVideo] = useState(data?.videoUrl);
  const [socialLinks,setSocialLinks] = useState(null);
  const [userPhone,setUserPhone] = useState(null);

    const [selected, setSelected] = useState(false);

   const [AllAttrList, setAllAttrList] = useState([]);

   const [showingVariantList, setShowingVariantList] = useState([]);

   const [selectedVariation, setSelectedVariation] = useState(null);

  


    useEffect(() => {
     
      if (data && data?.isVariant && data.variations.length > 0) {
        let primaryAttr = data?.variations[0].attributeOpts[0]?.attributeName;
        let updateAllAttrList = [];

        let updatePrimaryAttrList = [];
        data?.variations?.forEach((variant) => {
          variant.attributeOpts.forEach((opt) => {
            if (opt.attributeName == primaryAttr) {
              updatePrimaryAttrList.push(opt.name);
            }
            updateAllAttrList.push({
              ...opt,
              variationId: variant._id,
            });
          });
        });

        setAllAttrList(updateAllAttrList);

        let showingVariants = [
          {
            name: primaryAttr,
            values: [...new Set(updatePrimaryAttrList)],
            selectedValue: "",
            variationIds: [],
            nextAttr: data?.variations[0].attributeOpts[1]
              ? data?.variations[0].attributeOpts[1]?.attributeName
              : "",
          },
        ];

        data?.variations[0].attributeOpts?.forEach((opt, index) => {
          if (opt.attributeName !== primaryAttr) {
            showingVariants.push({
              name: opt.attributeName,
              values: [],
              selectedValue: "",
              variationIds: [],
              nextAttr:
                data?.variations[0].attributeOpts.length - 2 >= index
                  ? data?.variations[0].attributeOpts[index + 1]?.attributeName
                  : "",
            });
          }
        });

        setShowingVariantList(showingVariants);
      }
    }, [data]);

    const handleAttribute = (item, value) => {
      let checkVariantIds = [];
      AllAttrList?.forEach((attr) => {
        if (attr.name == value) {
          checkVariantIds.push(attr.variationId);
        }
      });

      let sizeValues = [];
      let dummyArr = [];
      AllAttrList?.forEach((attr) => {
        if (
          attr.attributeName == item?.nextAttr &&
          checkVariantIds.includes(attr.variationId)
        ) {
          sizeValues.push(attr.name);
          dummyArr.push(attr);
        }
      });
      const selectIndex = showingVariantList.findIndex((x) => x == item);

      setShowingVariantList(
        showingVariantList?.map((val, index) => {
          if (val?.name == item?.nextAttr) {
            return {
              ...val,
              values: [...new Set(sizeValues)],
              selectedValue: "",
            };
          } else if (index > selectIndex) {
            return {
              ...val,
              values: [],
              selectedValue: "",
            };
          } else {
            if (val?.name == item?.name) {
              return {
                ...val,
                selectedValue: value,
              };
            } else {
              return val;
            }
          }
        })
      );
    };

    useEffect(() => {
      if (showingVariantList?.length > 0) {
        let isNotValid = showingVariantList.find(
          (val) => val.selectedValue === ""
        );
        if (!isNotValid) {
          let selectedAttr = showingVariantList?.map(
            (val) => val.selectedValue
          );
          setSelected(false);
          const checkArrays = data?.variations.map((item) => {
            if (item.attributeOpts) {
              const attributeNames = item.attributeOpts.map(
                (attr) => attr.name
              );
              // console.log("attributeNames", attributeNames);
              if (
                selectedAttr.sort().join("-") ===
                attributeNames.sort().join("-")
              ) {
                setSelectedVariation(item);
              }
            }
          });
        } else {
          //  console.log("isNotValid...", isNotValid);
        }
      }
    }, [showingVariantList]);



   useEffect(() => {
     if (selectImage?.length > 0) {
       setImageSelect(selectImage[0]);
     }
   }, [selectImage]);

  //  console.log("selectImage...", selectImage);


 useEffect(() => {
   if (data?.isVariant == false) {
     if (data?.galleryImage?.length > 0) {
       setImageSelect(data?.galleryImage[0]);
     }
   } else {
     if (selectedVariation == null) {
       setImageSelect(data?.variations[0]?.images[0]);
     } else {
       setImageSelect(selectedVariation?.images[0]);
     }
     // setSelectImage(data?.variations[0]?.images[0]);
   }
 }, [data, selectedVariation]);

 useEffect(() => {
   const getData = async () => {
     const res = await request(`setting/view`);
     setSocialLinks(res?.data?.socialLinks);
     setRichDetails(res?.data?.deliveryCharge?.longDescription);
     setDeliveryData(res?.data?.deliveryCharge);
     setUserPhone(res?.data?.phone);
   };
   getData();
 }, []);



  const breadCumbs = [
    { name: "Home", url: "/" },
    {
      name: `${data?.categories[0]?.name}`,
      url: `${data?.categories[0]?.slug}`,
      cat: "cat",
    },
    { name: `${data?.name}`, url: `${data?.slug}` },
  ];



useEffect(() => {
  if (data?.isFlashDeal) {
    if (data?.isVariant) {
      setStock(data?.variations[0]?.stock);
      setSellingPrice(data?.variations[0]?.flashPrice);
      setRegularPrice(data?.variations[0]?.regularPrice);
    } else {
      setStock(data?.nonVariation?.stock);
      setSellingPrice(data?.nonVariation?.flashPrice);
      setRegularPrice(data?.nonVariation?.regularPrice);
    }
  } else {
    if (data?.isVariant) {
      setStock(data?.variations[0]?.stock);
      setSellingPrice(data?.variations[0]?.sellingPrice);
      setRegularPrice(data?.variations[0]?.regularPrice);
    } else {
      setSellingPrice(data?.nonVariation?.sellingPrice);
      setRegularPrice(data?.nonVariation?.regularPrice);
      setStock(data?.nonVariation?.stock);
    }
  }
}, [data]);

  return (
    <>
      <Head>
        <title>{project_name}/product-details</title>
        <meta name="description" content={project_name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Custom SEO */}
        <meta property="og:title" content={data?.name?? "Product details"}/>
        <meta property="og:description" content={data?.name?? "Product details"}/>
        <meta property="og:url" content={`${link}/products/${data?.slug}`}/>
        <meta property="og:image" content={`${hostname}/${imageSelect}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#ddd] pt-14 sm:pt-4 xls:pt-4 xms:pt-4 xs:pt-4">
        <div className="max-w-7xl md:max-w-[62rem] sm:max-w-[46rem] xls:max-w-[25rem] xms:max-w-[22rem] xs:max-w-[19rem] mx-auto min-h-[600px]  pb-3">
          <BreadCrumbs breadCumbs={breadCumbs} />
          <div className=" pl-4 xls:pl-3 xms:pl-3 xs:pl-3 bg-white  shadow-md rounded-md">
            <div className="grid grid-cols-12 sm:grid-cols-2 xls:grid-cols-1 xms:grid-cols-1 xs:grid-cols-1 gap-x-5 sm:gap-x-2 xls:gap-x-[15px] xms:gap-x-[15px] xs:gap-x-[15px]">
              <ImageGallery
                image={data}
                selectImage={selectImage}
                setSelectImage={setSelectImage}
                imageSelect={imageSelect}
                setImageSelect={setImageSelect}
                activeYoutubeVideo={activeYoutubeVideo}
                setActiveYoutubeVideo={setActiveYoutubeVideo}
                selectedVariation={selectedVariation}
              />

              <DetailSection
                data={data}
                size={size}
                setSize={setSize}
                selectImage={selectImage}
                setSelectImage={setSelectImage}
                totalStock={totalStock}
                stock={stock}
                setStock={setStock}
                regularPrice={regularPrice}
                setRegularPrice={setRegularPrice}
                sellingPrice={sellingPrice}
                setSellingPrice={setSellingPrice}
                selected={selected}
                setSelected={setSelected}
                showingVariantList={showingVariantList}
                selectedVariation={selectedVariation}
                handleAttribute={handleAttribute}
                imageSelect={imageSelect}
              />
             
                <ProductPolicy
                  deliveryData={deliveryData}
                  socialLinks={socialLinks}
                  userPhone={userPhone}
                />
            
            </div>
          </div>

          <div className="shadow-md w-full rounded-md bg-white mb-5 mt-4 p-5 xls:p-3 xms:p-3 xs:p-3">
            <Tabs>
              <div className="tab">
                <TabList>
                  <Tab>
                    {" "}
                    <span className="text-black">Description</span>
                  </Tab>
                  <Tab>
                    {" "}
                    <span className="text-black">Guideline</span>{" "}
                  </Tab>
                  {/* <Tab>
                    <span className="text-black">Delivery charge</span>{" "}
                  </Tab> */}
                  <Tab>
                    <span className="text-black">Chart title</span>{" "}
                  </Tab>
                </TabList>
              </div>

              <TabPanel>
                <div className="pt-3">
                  <span
                    className="text-black"
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  ></span>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pt-3">
                  <span
                    className="text-black"
                    dangerouslySetInnerHTML={{ __html: data?.guideline }}
                  ></span>
                </div>
              </TabPanel>
              {/* <TabPanel>
                <div
                  className="pt-3 text-black"
                  dangerouslySetInnerHTML={{
                    __html: richDetials,
                  }}
                ></div>
              </TabPanel> */}
              <TabPanel>
                <div className="table__container">
                  <table>
                    {data?.chartList[0][0] !== "" ? (
                      data?.chartList?.map((item, index) => (
                        <tr
                          className={`${
                            size == item[1]
                              ? "single__variation"
                              : "single__variation"
                          }`}
                          key={index}
                        >
                          {index === 0
                            ? item?.map((i, ind) => <>{<th>{i}</th>}</>)
                            : item?.map((i, ind) => <>{<td>{i}</td>}</>)}
                        </tr>
                      ))
                    ) : (
                      <div className="text-black text-center font-semibold">
                        There is no chart list available
                      </div>
                    )}
                  </table>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          <div className="border border-gray-100 mt-5 pb-4 bg-white rounded-md p-3 xls:p-0 xms:p-0 xs:p-0">
            <div className="flex justify-between p-2">
              <div className="flex items-center">
                <button className="font-semibold text-white px-1 py-1 bg-primary rounded-md text-sm tracking-wider flex items-center space-x-2">
                  <SiSimilarweb color="#fff" size={20} />
                </button>

                <span className="font-bold pl-2 text-lg xls:text-sm xms:text-sm xs:text-xs tracking-wider capitalize text-black">
                  Similar products
                </span>
              </div>
            </div>

            <div className="grid grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xls:grid-cols-2 xms:grid-cols-2 xs:grid-cols-1 gap-5 xms:gap-3 xs:gap-2 xls:gap-3 p-2">
              {data?.similarProducts?.map((item, index) => (
                <div
                  className="overflow-hidden items-center justify-center h-full cardFull"
                  key={index}
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;


export async function getServerSideProps(context) {
  let products = await request(
    `product/single-product/${context.query.slug}`,
    ""
  );
  return {
    props: {
      data: products?.data || null,
    },
  };
}
