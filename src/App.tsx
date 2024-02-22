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
  const {isTablet,isMobile} = useResponsive()
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
            colorPrimary: "#2563eb",
            colorText: "var(--gray-700)",
            borderRadius: 6,
            fontFamily: "'Inter', sans-serif",
          },
          components: {
            Layout: {
              bodyBg: "url('/without-icon-bg.png')",
              headerBg: "white",
            },
          },
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <div className={`header-wrapper ${headerChange}`}>
              <Layout.Header>
                <div className={`header`}>
                  <img src="https://via.placeholder.com/60" alt="" />
                  {isTablet || isMobile ? 
                    <>
                      <Hamburger toggled={menuOpen} size={24} color={"var(--gray-800)"} onToggle={handleToggleMenu}/>
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
                          <Button block className="book_btn" style={{ margin: 0 }} type={"primary"} >Book an appointment</Button>
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
                      <Button className="book_btn" style={{ margin: 0 }} type={"primary"} >Book an appointment</Button>
                    </>
                  }
                </div>
              </Layout.Header>
            </div>
            <Layout.Content>
              <Outlet />
            </Layout.Content>
            <Layout.Footer>
              <div className="footer">
                  <div className="footerContent">
                    <div className="col-lg-3 col-md-6">
                      <h3 className="footerHeader">Company</h3>
                      <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Specialists</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h3 className="footerHeader">Services</h3>
                      <ul>
                        <li>Cardiology</li>
                        <li>Dentistry</li>
                        <li>Neurology</li>
                        <li>Orthopedics</li>
                        <li>Urology</li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h3 className="footerHeader">Specialists</h3>
                      <ul>
                        <li>Dr. John Doe</li>
                        <li>Dr. Jane Doe</li>
                        <li>Dr. Richard Roe</li>
                        <li>Dr. Sarah Roe</li>
                        <li>Dr. Michael Smith</li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h3 className="footerHeader">Contact</h3>
                      <ul>
                        <li>Address: 1234 Street Name, City Name, United States</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Email: test@gmail.com</li>
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
