import FooterFacebook from "../assets/icons/footer-facebook.svg";
import FooterEmail from "../assets/icons/footer-email.svg";
import FooterLocation from "../assets/icons/footer-location.svg";
import FooterPhone from "../assets/icons/footer-phone.svg";

const Footer = () => {
  return (
    <footer className="bg-[#2bb2ed] pt-[48px] pb-[32px] block mt-[50px] p-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 h-[100px] bg-[#54c1f0]">
          <div className="footer-social-wrap">
            <div className="footer-social-icon">
              <img src={FooterFacebook} alt="" />
            </div>
            <div>
              <p className="text-white"> Consultantion </p>
              <a className="text-white" href="tel:+021-0000-0009">
                +021-0000-0009
              </a>
            </div>
          </div>
          <div className="footer-social-wrap">
            <div className="footer-social-icon">
              <img src={FooterPhone} alt="" />
            </div>
            <div>
              <p className="text-white">Telephone </p>
              <a className="text-white" href="tel:+021-0000-0009">
                +021-0000-0009
              </a>
            </div>
          </div>

          <div className="footer-social-wrap">
            <div className="footer-social-icon">
              <img src={FooterEmail} alt="" />
            </div>
            <div>
              <p className="text-white">Email </p>
              <a className="text-white" href="mailto:Info@domain.com">
                Info@domain.com
              </a>
            </div>
          </div>
          <div className="footer-social-wrap">
            <div className="footer-social-icon">
              <img src={FooterLocation} alt="" />
            </div>
            <div>
              <p className="text-white">Location </p>
              <p className="text-white">Jl. Soekarno-hatta</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap lg:pt-[60px] sm:pt-[140px] pt-[350px]">
          <div className="md:w-[34%] w-[100%] md:pr-[50px]">
            <h6 className="font-[700] text-white">About Mental Health Pro</h6>
            <div className="hr" />
            <p className="text-white">
              We offer a wide range of resources for individuals seeking mental
              health support. We provides access to licensed therapists, online
              counseling, and self-help tools such as mindfulness exercises and
              relaxation techniques.
            </p>
          </div>
          <div className="md:w-[33%] w-[50%] flex flex-col items-start justify-between">
            <h6 className="font-[700] text-white">Services</h6>
            <div className="hr" />
            <a className="text-white" href="">
              Depression
            </a>
            <a className="text-white" href="">
              Anxiety
            </a>

            <a className="text-white" href="">
              Biopolar
            </a>

            <a className="text-white" href="">
              Attention
            </a>

            <a className="text-white" href="">
              View All
            </a>
          </div>
          <div className="md:w-[33%] w-[50%] flex flex-col items-start justify-between">
            <h6 className="font-[700] text-white">Quick Links</h6>
            <div className="hr" />

            <a className="text-white" href="">
              About
            </a>
            <a className="text-white" href="">
              Services
            </a>

            <a className="text-white" href="">
              Blogs
            </a>

            <a className="text-white" href="">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
