import {
  OuterContainer,
  Container,
  InnerContainer,
  ImageContainer,
  DescriptionContainer,
  Title,
  TitleContainer,
  Category,
  PriceContainer,
  PriceBody,
  PriceTag,
  Price,
  DiscountContainer,
  Discount,
  ProductDetailContainer,
  Head,
  Description,
  WishListContainer,
  SaveProductContainer,
  WishListText,
  AddToCartContainer,
  CartText,
  AddToCartDiv,
  AddedToCartDiv,
  LeftContainer,
  ImageBody,
  ImageDivision,
  ReviewContainer,
  ReviewBody,
  AllReviewContainer,
  MyReviewContainer,
  AboveDiv,
  UserName,
  DateTime,
  BelowDiv,
  Comment,
  Rating,
  Heading,
  HeadingDiv,
  InputDiv,
  Input,
  ButtonDiv,
  RatingDiv,
  MyReviewBody,
  NotComment,
} from "./ProductDetailStyle";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { saveProductById } from "../../store/action/productAction";
import ButtonComponent from "../Commons/ButtonComponent/ButtonComponent";
import { getToken } from "@/utils/localStorage";
import { saveProductToAddToCartAction } from "../../store/action/cartAction";
import { toast } from "react-toastify";
import {
  addProductInWhishlistAction,
  removeProductFromWhishlistAction,
} from "../../store/action/whishlistAction";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
  getAllReviewOfAProductAction,
  createReviewOfAProductAction,
} from "../../store/action/reviewAction";
import SmallFooterComponent from "../SmallFooterComponent/SmallFooterComponent";
import LoaderComponent from "../Commons/LoaderComponent/LoaderComponent";

const ProductDetailComponent = (props) => {
  // console.log("propssssssss<<<<>>>>", props)
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectImage, setSelectImage] = useState("");
  const [cartLoader, setCartLoader] = useState(false);
  // const [allReviews, setAllReviews] = useState([])
  const [input, setInput] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const selector = useSelector((state) => state.products.productDetails);
  const userCart = useSelector((state) => state.cart.cartDetails);
  const whishlistSelector = useSelector((state) => state.whishlist);
  let users = useSelector((state) => state.users.userDetail);
  const review = useSelector((state) => state.review.allReview);
  const order = useSelector((state) => state.order.orderDetail);

  // console.log("xxxxxxxxxXXXX", selector)
  const productId = router.query["id"];
  const checkProduct = () => {
    return userCart?.products?.find((e) => e.pId._id == productId)
      ? true
      : false;
  };
  checkProduct();
  // console.log("uuuuxxx", checkProduct())
  const whishlistProducts = whishlistSelector?.whishlistDetails?.map(
    (e) => e?.pId?._id
  );
  // console.log("qqqqqq", whishlistProducts)
  useEffect(() => {
    setSelectImage(selector[0]?.images[0]);
  }, [selector]);
  useEffect(() => {
    if (router.isReady) {
      const fun = async () => {
        const response = await fetch(
          `https://novbahaar-backend.onrender.com/product/` + productId,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const result = await response.json();
        // console.log("xxxxxxxxxxxxx", result)
        dispatch(saveProductById(result.response));
      };
      fun();
    }
  }, [productId]);
  useEffect(() => {
    const fun = async () => {
      const response = await fetch(
        `https://novbahaar-backend.onrender.com/review/` + productId,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const result = await response.json();
      // console.log("review result==>", result,)
      dispatch(getAllReviewOfAProductAction(result.response));
    };
    fun();
  }, [productId]);
  const addToCartHandler = async (id) => {
    try {
      // console.log("inside  addToCartHandler ", users)
      // console.log("inside  addToCartHandler ", users.token)
      if (!Object.keys(users).length) {
        return router.push("/login");
      }
      setCartLoader(true);
      const response = await fetch(
        "https://novbahaar-backend.onrender.com/cart/to-add",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "x-access-token": getToken(),
          },
          body: JSON.stringify({ productId: id }),
        }
      );

      const result = await response.json();
      if (response.status >= 400) {
        setCartLoader(false);
        return toast.error("Product is Already in Cart!.");
      }
      // console.log("add to cart result====>", result)
      dispatch(saveProductToAddToCartAction(result.response));
      setCartLoader(false);
      toast.success("Product added In Cart!.");
      router.push("/cart");
    } catch (error) {
      setCartLoader(false);
      console.log({ error });
    }
  };
  const saveProductHandler = async (id) => {
    // console.log("saveProductHandler=====>", id)
    try {
      if (!Object.keys(users).length) {
        return router.push("/login");
      }
      const response = await fetch(
        "https://novbahaar-backend.onrender.com/whishlist/add-product",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "x-access-token": getToken(),
          },
          body: JSON.stringify({ productId: id }),
        }
      );
      if (response.status >= 400) {
        return toast.error("Something Went Wrong!.");
      }
      const result = await response.json();
      // console.log("whishlist list====", result.response)
      dispatch(addProductInWhishlistAction(result.response));
      toast.success("Product Whishlisted Successfully!.");
    } catch (error) {
      console.log({ error });
    }
  };
  const removeProductHandler = async (id) => {
    // console.log("remove ProductHandler=====>", id)
    try {
      const response = await fetch(
        "https://novbahaar-backend.onrender.com/whishlist/remove-product",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "x-access-token": getToken(),
          },
          body: JSON.stringify({ productId: id }),
        }
      );
      if (response.status >= 400) {
        return toast.error("Something Went Wrong!.");
      }
      const result = await response.json();
      // console.log("DELETE whishlist list====", result.response)
      dispatch(removeProductFromWhishlistAction(result.response));
      toast.warning("Product Removed from Whishlist!.");
    } catch (error) {
      console.log({ error });
    }
  };
  const selectImageHandler = (id) => {
    // console.log("selectImageHandler===>", id)
    setSelectImage(id);
  };
  const inputHandler = (e) => {
    // console.log("inputHandler", e.target.value)
    setInput(e.target.value);
  };
  const handleStarClick = (index) => {
    // When a star is clicked, update the selected rating
    setSelectedRating(index + 1);
  };
  const renderStars = () => {
    const maxRating = 5; // Maximum number of stars
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        // Use AiOutlineStar or AiFillStar based on the selected rating
        selectedRating >= i + 1 ? (
          <AiFillStar
            key={i}
            onClick={() => handleStarClick(i)}
            style={{ cursor: "pointer", color: "goldenrod" }}
          />
        ) : (
          <AiOutlineStar
            key={i}
            onClick={() => handleStarClick(i)}
            style={{ cursor: "pointer", color: "goldenrod" }}
          />
        )
      );
    }

    return stars;
  };
  const submitMyReview = async () => {
    // console.log("submitMyReview===", input, selectedRating)
    // fetch(`https://novbahaar-backend.onrender.com/review/create/` + productId, {
    //     method: "POST",
    //     headers: {
    //         "x-access-token": getToken(),
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({ productId, comment: input, rating: selectedRating })
    // })
    //     .then((response) => response.json())
    //     // .then((result) => console.log("iii", result.response[0]))
    //     .then((result) => dispatch(createReviewOfAProductAction(result.response[0])))

    // toast.success("Comment Added Successfully!.")
    // setInput("")
    // setSelectedRating(0)
    const response = await fetch(
      `https://novbahaar-backend.onrender.com/review/create/` + productId,
      {
        method: "POST",
        headers: {
          "x-access-token": getToken(),
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          productId,
          comment: input,
          rating: selectedRating,
        }),
      }
    );
    const result = await response.json();
    console.log("resultt==>", result);

    if (response.status == 400) {
      return toast.warning("You are not eligible to commit!.");
    }

    dispatch(createReviewOfAProductAction(result?.response[0]));
    if (response.status >= 400) {
      return toast.warning("Something went wrong!.");
    }
    if (response.status == 200) {
      setInput("");
      setSelectedRating(0);
      return toast.success("Comment Added Successfully!.");
    }
    // if(response)
  };
  return (
    <>
      <OuterContainer>
        <Container>
          <LeftContainer>
            <ImageBody>
              {
                // selector.map((e) => {
                // console.log("xxxxxxxxxxxx", e.images)
                // <ImageDivision key={e._id}>
                selector.length
                  ? selector[0].images.map((f) => {
                      return (
                        <ImageDivision
                          key={f}
                          onClick={selectImageHandler.bind(this, f)}
                        >
                          <img src={f} alt="" />
                        </ImageDivision>
                      );
                    })
                  : null
                // </ImageDivision>
                // })
              }
            </ImageBody>
          </LeftContainer>
          {selector.map((e) => {
            return (
              <InnerContainer key={e._id}>
                <ImageContainer>
                  <img src={selectImage} alt="" />
                </ImageContainer>
                <DescriptionContainer>
                  <TitleContainer>
                    <Title> {e.title}</Title>
                    <Category> Womens Fashion Bag</Category>
                  </TitleContainer>
                  <PriceContainer>
                    <PriceBody>
                      <PriceTag> MRP :</PriceTag>
                      <Price> ₹{e.price}</Price>
                    </PriceBody>
                    <DiscountContainer>
                      <Discount> 12.50% off</Discount>
                    </DiscountContainer>
                  </PriceContainer>
                  <ProductDetailContainer>
                    <Head>Product Details</Head>
                    <Description>{e.description}</Description>
                  </ProductDetailContainer>
                  <WishListContainer>
                    {whishlistProducts?.includes(productId) ? (
                      <SaveProductContainer
                        onClick={removeProductHandler.bind(this, e._id)}
                      >
                        <>
                          <ButtonComponent
                            className="whishlisted"
                            title="Whishlisted"
                          />
                          <AiTwotoneHeart
                            className="filled-heart"
                            disabled={true}
                          />
                        </>
                      </SaveProductContainer>
                    ) : (
                      <SaveProductContainer
                        onClick={saveProductHandler.bind(this, e._id)}
                      >
                        <>
                          <ButtonComponent
                            className="whishlist"
                            title="Whishlist"
                          />
                          <AiOutlineHeart className="empty-heart" />
                        </>
                      </SaveProductContainer>
                    )}
                    <AddToCartContainer>
                      {checkProduct() ? (
                        <AddedToCartDiv>
                          <>
                            <ButtonComponent
                              title="In Cart"
                              className="already-in-cart-btn"
                              click={addToCartHandler.bind(this, e._id)}
                              disabled={true}
                            />
                            <BsCartPlus className="disable-icon" />
                          </>
                        </AddedToCartDiv>
                      ) : (
                        <AddToCartDiv>
                          <>
                            <ButtonComponent
                              title={
                                cartLoader ? <LoaderComponent /> : "Add to Cart"
                              }
                              className="cart-btn"
                              click={addToCartHandler.bind(this, e._id)}
                            />
                            {!cartLoader && <BsCartPlus />}
                          </>
                        </AddToCartDiv>
                      )}
                    </AddToCartContainer>
                  </WishListContainer>
                </DescriptionContainer>
              </InnerContainer>
            );
          })}
        </Container>
        <ReviewContainer>
          <ReviewBody>
            {review.length ? (
              review?.map((e) => {
                // console.log("ooooo", e.createdAt)
                const t = e.createdAt;
                // console.log("tt", t)
                // Assuming t is a string or undefined (not null)
                const [datePart] = (t || "").split("T");

                // console.log("ff", datePart)
                // Or, if t can be null as well
                // const [datePart] = (t || "").split("T");
                console.log("d", datePart);
                const starsArray = Array.from(
                  { length: e.rating },
                  (_, index) => <AiOutlineStar key={index} />
                );
                return (
                  <AllReviewContainer key={e._id}>
                    <AboveDiv>
                      <UserName>{e.userId?.name}</UserName>
                      <DateTime>{datePart}</DateTime>
                    </AboveDiv>
                    <BelowDiv>
                      <Comment>{e.comment}</Comment>
                      <Rating>{starsArray}</Rating>
                    </BelowDiv>
                  </AllReviewContainer>
                );
              })
            ) : (
              <AllReviewContainer>
                <NotComment>
                  <div>
                    {" "}
                    No Comments Yet,
                    <br />
                    You are first to comment
                  </div>
                </NotComment>
              </AllReviewContainer>
            )}
          </ReviewBody>

          {Object.keys(users).length ? (
            <MyReviewContainer>
              <HeadingDiv>
                <Heading>Add My Review</Heading>
              </HeadingDiv>
              <MyReviewBody>
                <RatingDiv>{renderStars()}</RatingDiv>
                <InputDiv>
                  <Input placeholder="Add my review" onChange={inputHandler} />
                </InputDiv>

                <ButtonDiv>
                  <ButtonComponent
                    title="Submit"
                    className="btn"
                    click={submitMyReview}
                  />
                </ButtonDiv>
              </MyReviewBody>
            </MyReviewContainer>
          ) : (
            <MyReviewContainer>
              <MyReviewBody>
                <NotComment>
                  <div> You are not Eligible to comment</div>
                </NotComment>
              </MyReviewBody>
            </MyReviewContainer>
          )}
        </ReviewContainer>
      </OuterContainer>
      {/* <SmallFooterComponent /> */}
    </>
  );
};
export default ProductDetailComponent;
