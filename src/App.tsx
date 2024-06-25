import { Button, ConfigProvider, Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import useResponsive from "./utils/useResponsive";
import { Squash as Hamburger } from "hamburger-react";

function App() {
  const [headerChange, setHeaderChange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  const { isTablet, isMobile } = useResponsive()
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 96; // Change this value to your header height
      if (window.scrollY > headerHeight) {
        setHeaderChange(true);
      } else {
        setHeaderChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2B3846",
            colorText: "var(--gray-700)",
            borderRadius: 6,
            fontFamily: "'Inter', sans-serif",
          },
          components: {
            Layout: {
              bodyBg: "url('/without-icon-bg.png')",
              headerBg: "#2B3846",
            },
          },
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <div className={`header-wrapper ${headerChange}`}>
              <Layout.Header>
                <div className={`header`}>
                  <img src="apexbeat.svg" alt="logo" width={50} height={50} />
                  {isTablet || isMobile ?
                    <>
                      <Hamburger toggled={menuOpen} size={24} color={menuOpen ? "var(--gray-800)" : "white"} onToggle={handleToggleMenu} />
                      <div className={`sider_menus ${menuOpen ? 'menu_open' : 'menu_close'}`}>
                        <ul className="menus">
                          <Link to="/">
                            <li>
                              Home
                            </li>
                          </Link>
                          <a href="#about">
                            <li>
                              About
                            </li>
                          </a>
                          <a href="#services">
                            <li>
                              Services
                            </li>
                          </a>
                          <a href="#specialists">
                            <li>
                              Specialists
                            </li>
                          </a>
                          <a href="#testimonials">
                            <li>
                              Testimonials
                            </li>
                          </a>
                          <a href="#contact">
                            <li>
                              Contact
                            </li>
                          </a>
                        </ul>
                        <div className="sider_btn">
                            <a href='tel:+917439789989'>
                          <Button block className="book_btn" style={{ margin: 0 }} type={"primary"} >

                            Book an appointment
                          </Button>
                            </a>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <ul className="menus">
                        <Link to="/">
                          <li>
                            Home
                          </li>
                        </Link>
                        <a href="#about">
                          <li>
                            About
                          </li>
                        </a>
                        <a href="#services">
                          <li>
                            Services
                          </li>
                        </a>
                        <a href="#specialists">
                          <li>
                            Specialists
                          </li>
                        </a>
                        <a href="#testimonials">
                          <li>
                            Testimonials
                          </li>
                        </a>
                        <a href="#contact">
                          <li>
                            Contact
                          </li>
                        </a>
                      </ul>
                      <a href='tel:+917439789989'>
                        <Button className="book_btn" style={{ margin: 0 }} type={"default"} >Book an appointment</Button>
                        </a>
                    </>
                  }
                </div>
              </Layout.Header>
            </div>
            <Layout.Content>
              <Outlet />
              <div className="wp-wrapper">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/7439789989">
                    <img src="./wplogo.png" alt="Chat in WhatsApp" />
                </a>
              </div>
            </Layout.Content>
            <Layout.Footer>
              <div className="footer">
                <div className="footerContent">
                  <div className="col-lg-4 col-md-6">
                    <h3 className="footerHeader">Company</h3>
                    <ul>
                      <li>
                        <a href="#about">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#services">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#specialists">
                          Specialists
                        </a>
                      </li>
                      <li>
                        <a href="#testimonials">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <h3 className="footerHeader">Services</h3>
                    <ul>
                      <li>
                        Gynaecologist
                      </li>
                      <li>General Medicine
                      </li>
                      <li>Orthopedics</li>
                      <li>Dermetology</li>
                      <li>Pediatrics</li>
                    </ul>
                  </div>
                  {/* <div className="col-lg-4 col-md-6">
                      <h3 className="footerHeader">Specialists</h3>
                      <ul>
                        <li>Dr. John Doe</li>
                        <li>Dr. Jane Doe</li>
                        <li>Dr. Richard Roe</li>
                        <li>Dr. Sarah Roe</li>
                        <li>Dr. Michael Smith</li>
                      </ul>
                    </div> */}
                  <div className="col-lg-4 col-md-6">
                    <h3 className="footerHeader">Contact</h3>
                    <ul>
                      <li><b>Address:</b> 20, Sarat Chatterjee Rd, near HIRALAL PAUL GIRLS HIGH SCHOOL, Nabagram, Konnagar, Nabagram Colony, West Bengal 712246</li>
                      <li><b>Phone:</b> <a href='tel:+917439789989'>+91 7439789989</a></li>
                      <li><b>Email:</b> <a href='mailto:apexbeat.clinic@gmail.com'>apexbeat.clinic@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="footerCopy">
                  <p>© {new Date().getFullYear()} Your Company. All Rights Reserved</p>
                </div>
              </div>
            </Layout.Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default App;
