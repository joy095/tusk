import SimpleImageSlider from "react-simple-image-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import starIcon from "../assets/icons/star.svg";
import btnArrowIcon from "../assets/icons/btn-arrow.svg";

import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";

import "./Home.css";
import SideSocialLinks from "../components/SideSocialLinks";

const Home = () => {
  const sliderImages = [
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      url: "https://miro.medium.com/v2/resize:fit:1024/1*T505OJvjtLwCa8soWr_zRw.jpeg",
    },
    {
      url: "https://jpeg.org/images/jpeg-home.jpg",
    },
    {
      url: "https://calipia.files.wordpress.com/2020/03/jpegls-home.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
    },
    {
      url: "https://media.istockphoto.com/id/184266033/photo/forest.jpg?s=612x612&w=0&k=20&c=NxnOuxGeg2IPP9qz9bpTkcQaHufGnGBmUOXPllKJ4Lk=",
    },
    {
      url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="text-transparent">{i + 1}</div>,
  };

  return (
    <>
      <section className="relative z-0">
        <div className="absolute container max-w-[1020px] mx-auto z-10 left-0 right-0  top-[20%]">
          <div className="max-w-[475px] flex flex-col justify-between items-start gap-8 p-5">
            <h1 className="text-[40px] md:text-[57px] text-white font-bold">
              Prioritizing Your Mental Wellness
            </h1>
            <p className="text-[21px] font-[500] text-white">
              Discover Resources and Support From Our Professionals
            </p>
            <button className="btn">Book An Appointment</button>
          </div>
        </div>

        <SimpleImageSlider
          width="100%"
          height="calc(100vh - 70px)"
          autoPlay={true}
          autoPlayDelay={5}
          images={sliderImages}
        />
      </section>

      <section className="max-w-[1140px] mx-auto flex md:flex-row justify-between flex-col py-16 bottom-image">
        <div className="md:w-[50%] md:max-h-[500px] relative">
          <div className="flex flex-row justify-center md:justify-end flex-nowrap gap-3 h-[486px] pt-5 pb-10 pr-5 right-10 relative after:absolute after:top-0 after:bottom-0 after:left-[66%] after:w-[200px] after:h-full after:bg-[#ACDCFE] after:-z-10">
            <div className="">
              <img
                className="w-[227px] h-[40%] object-cover"
                src="https://jpeg.org/images/jpeg-home.jpg"
                alt=""
              />

              <img
                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg"
                alt=""
                className="pt-3 w-[227px] h-[60%] object-cover"
              />
            </div>
            <div className="">
              <img
                className="w-[227px] h-[60%] object-cover"
                src="https://media.istockphoto.com/id/184266033/photo/forest.jpg?s=612x612&w=0&k=20&c=NxnOuxGeg2IPP9qz9bpTkcQaHufGnGBmUOXPllKJ4Lk="
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="pt-3 w-[227px] h-[40%] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col justify-between gap-6 items-start p-5">
          <h6 className="text-[20px] font-[300]">What We Offer</h6>
          <h1 className="text-[42px] font-[400] md:max-w-[455px]">
            Precision treatment{" "}
            <span className="bg-image-color">tailored to the individual</span>
          </h1>
          <p className="md:max-w-[454px] text-justify">
            We provide licensed therapists, online counseling, self-help tools
            (e.g., mindfulness exercises), educational materials, and support
            groups for mental health support. Our goal is to promote mental
            wellness, develop healthy coping mechanisms, and meet individuals’
            unique needs through personalized support.
          </p>
          <button className="btn">Click Here</button>
        </div>
      </section>

      <section className="bg-image relative">
        <div className="max-w-[1020px] mx-auto py-3 z-10 relative p-5">
          <h1 className="max-w-fit mx-auto text-[42px] font-[400] text-center bg-image-color">
            What We Do
          </h1>

          <div className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-5 pt-[30px]">
            <div className="card">
              <img
                src="https://firstmentalhealth.co.uk/wp-content/uploads/2023/05/children-1.png"
                alt=""
              />
              <h5>For Children </h5>
              <p>
                Mental health support for children, therapy, counseling,
                self-help tools, and support groups available.
              </p>
              <button className="btn">Learn more </button>
            </div>
            <div className="card">
              <img
                src="https://firstmentalhealth.co.uk/wp-content/uploads/2023/05/children-1.png"
                alt=""
              />
              <h5>For Children </h5>
              <p>
                Mental health support for children, therapy, counseling,
                self-help tools, and support groups available.
              </p>
              <button className="btn">Learn more </button>
            </div>{" "}
            <div className="card">
              <img
                src="https://firstmentalhealth.co.uk/wp-content/uploads/2023/05/children-1.png"
                alt=""
              />
              <h5>For Children </h5>
              <p>
                Mental health support for children, therapy, counseling,
                self-help tools, and support groups available.
              </p>
              <button className="btn">Learn more </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-image-1">
        <div className="md:max-w-[1020px] mx-auto p-5">
          <div className="box-card md:top-[115px] w-auto p-1 md:p-5 pt-[30%]">
            <span className="text-center text-[21px] font-[300]">
              Book Consultation
            </span>

            <h1 className="text-[24px] sm:text-[32px] md:text-[42px] font-[400] text-center">
              Transform Your Mental Health:
              <br />
              Effective
              <span className="bg-image-color">
                Treatment for a Happier Life
              </span>
            </h1>

            <button className="btn px-2 py-1 sm:px-[10px] sm:py-[6px] md:py-[15px] md:px-[30px] flex items-center gap-1">
              Click Here{" "}
              <span>
                <img className="w-5" src={btnArrowIcon} alt="" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1020px] mx-auto md:flex md:flex-row py-16 p-5">
        <div className="md:w-[40%] relative after:absolute after:top-0 after:bottom-0 after:left-0 after:w-[200px] after:h-full after:bg-[#ACDCFE] after:-z-10">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/6_0-three_four.jpg?VersionId=1QZHYclbfWXoLF9Lz8plZ1WtfTn3eFUk"
            alt=""
            className="rounded-[30px] p-5"
          />
        </div>
        <div className="md:pl-10 md:w-[60%]">
          <h6 className="text-[20px] font-[300] pb-2">What We Offer</h6>
          <span className="text-[42px] font-[400] max-w-fit bg-image-color">
            What member are saying.
          </span>
          <div className="px-10">
            <Slider {...settings}>
              <div className="!flex flex-col items-center justify-center pt-[50px] p-6 box-shadow bg-white gap-5">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="w-[70px] h-[70px] rounded-full object-cover"
                />
                <strong>Will Smith</strong>
                <div className="flex items-center gap-1">
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                </div>
                <p className="text-[rgba(0,0,0,.5)] text-center w-[80%] pb-[40px]">
                  I&#39;ve struggled with anxiety for years, but I never felt
                  comfortable talking about it with anyone. They provided a safe
                  space for me to connect with others who understand what
                  I&#39;m going through. I finally feel like I&#39;m not alone.
                </p>
              </div>

              <div className="!flex flex-col items-center justify-center pt-[50px] p-6 box-shadow bg-white gap-5">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="w-[70px] h-[70px] rounded-full object-cover"
                />
                <strong>Will Smith</strong>
                <div className="flex items-center gap-1">
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                  <img className="h-[20px]" src={starIcon} alt="" />
                </div>
                <p className="text-[rgba(0,0,0,.5)] text-center w-[80%] pb-[40px]">
                  I&#39;ve struggled with anxiety for years, but I never felt
                  comfortable talking about it with anyone. They provided a safe
                  space for me to connect with others who understand what
                  I&#39;m going through. I finally feel like I&#39;m not alone.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <SideSocialLinks />
    </>
  );
};

export default Home;
