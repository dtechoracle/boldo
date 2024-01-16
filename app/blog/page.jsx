import styles from "./index.module.css";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <div className={styles.blog}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <b className={styles.boldo}>Boldo</b>
            <div className={styles.logoShape}>
              <div className={styles.logoShapeChild} />
              <div className={styles.logoShapeItem} />
            </div>
          </div>
          <div className={styles.navigation}>
            <a href="#" className={`${styles.product} ${styles.openSans}`}>
              Product
            </a>
            <a href="#" className={`${styles.product} ${styles.openSans}`}>
              Services
            </a>
            <a href="#" className={`${styles.product} ${styles.openSans}`}>
              About
            </a>
            <button className={styles.startNowWrapper}>
              <b className={styles.startNow}>Log In</b>
            </button>
          </div>
        </div>
        <div className={styles.featuredArticle}>
          <Image
            className={styles.featuredArticleChild}
            alt=""
            src="/head.png"
            width="550"
            height="386"
          />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.categoryParent}>
                <b className={styles.category}>Category</b>
                <div className={styles.november222021}>November 22, 2021</div>
              </div>
              <div className={styles.pitchTermsheetBacking}>
                Pitch termsheet backing validation focus release.
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/head-circle.png"
              />
              <div className={styles.johnDoe}>Chandler Bing</div>
            </div>
          </div>
        </div>
        <div className={styles.heading}>
          <div className={styles.ourBlog}>Blog</div>
          <div
            className={`${styles.valuePropositionAccelerator} ${styles.manrope}`}
          >
            Thoughts and words
          </div>
        </div>
        <div className={styles.articlesRow}>
          <div className={styles.article}>
            <Image
              className={styles.articleChild}
              alt=""
              src="/post1.png"
              height="209"
              width="300"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.categoryParent}>
                  <b className={styles.category}>Category</b>
                  <div className={styles.november222021}>November 22, 2021</div>
                </div>
                <div className={styles.seedRoundDirect}>
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/head-circle.png"
                />
                <div className={styles.johnDoe}>Chandler Bing</div>
              </div>
            </div>
          </div>
          <div className={styles.article1}>
            <Image
              className={styles.articleChild}
              alt=""
              src="/post2.png"
              height="209"
              width="300"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.categoryParent}>
                  <b className={styles.category}>Category</b>
                  <div className={styles.november222021}>November 22, 2021</div>
                </div>
                <div className={styles.seedRoundDirect}>
                  Seed round direct mailing non-disclosure agreement graphical
                  user interface rockstar.
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/post2-circle.png"
                />
                <div className={styles.johnDoe}>Rachel Green</div>
              </div>
            </div>
          </div>
          <div className={styles.article2}>
            <Image
              className={styles.articleChild}
              alt=""
              src="/post3.png"
              height="209"
              width="300"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.categoryParent}>
                  <b className={styles.category}>Category</b>
                  <div className={styles.november222021}>November 22, 2021</div>
                </div>
                <div className={styles.seedRoundDirect}>
                  Beta prototype sales iPad gen-z marketing network effects
                  value proposition
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/post3-circle.png"
                />
                <div className={styles.johnDoe}>Monica Geller</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articlesRow1}>
          <div className={styles.article}>
            <Image
              className={styles.articleChild}
              alt=""
              src="/post.png"
              height="209"
              width="300"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.categoryParent}>
                  <b className={styles.category}>Category</b>
                  <div className={styles.november222021}>November 22, 2021</div>
                </div>
                <div className={styles.seedRoundDirect}>
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/head-circle.png"
                />
                <div className={styles.johnDoe}>Chandler Bing</div>
              </div>
            </div>
          </div>
          <div className={styles.article1}>
            <Image
              className={styles.articleChild}
              alt=""
              src="/post4.png"
              height="209"
              width="300"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.categoryParent}>
                  <b className={styles.category}>Category</b>
                  <div className={styles.november222021}>November 22, 2021</div>
                </div>
                <div className={styles.seedRoundDirect}>
                  Seed round direct mailing non-disclosure agreement graphical
                  user interface rockstar.
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/post2-circle.png"
                />
                <div className={styles.johnDoe}>Rachel Green</div>
              </div>
            </div>
          </div>
          <div className={styles.article2}>
            <Image
              className={styles.articleChild}
              alt=""
              src="/post5.png"
              height="209"
              width="300"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.categoryParent}>
                  <b className={styles.category}>Category</b>
                  <div className={styles.november222021}>November 22, 2021</div>
                </div>
                <div className={styles.seedRoundDirect}>
                  Beta prototype sales iPad gen-z marketing network effects
                  value proposition
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/post3-circle.png"
                />
                <div className={styles.johnDoe}>Monica Geller</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.latestNews}>Latest news</div>
        <button className={styles.buttons}>
          <b className={styles.category}>Load more</b>
        </button>
        <div className={styles.footerCta}>
          <div className={styles.callToAction}>
            <div className={styles.callToActionChild} />
            <Image
              className={styles.maskGroupIcon}
              alt=""
              src="/mask.png"
              width="1200"
              height="391"
            />
            <div className={styles.callToActionInner}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupWrapper}>
                  <div className={styles.anEnterpriseTemplate}>
                    An enterprise template to ramp up your company website
                  </div>
                  <div className={styles.groupParent}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.groupChild} />
                      <input
                        className={styles.yourEmailAddress}
                        placeholder="Enter your email Address"
                      />
                    </div>
                    <button className={styles.buttons1}>
                      <b className={styles.category}>Start now</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerChild} />
            <div className={styles.logo1}>
              <b className={styles.boldo}>Boldo</b>
              <div className={styles.logoShape}>
                <div className={styles.logoShapeChild} />
                <div className={styles.logoShapeItem} />
              </div>
            </div>
            <div className={styles.socialMediaValidation}>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </div>
            <div className={styles.allRightsReserved}>All rights reserved.</div>
            <div className={styles.footerInner}>
              <div className={styles.groupWrapper}>
                <div className={styles.homeProductsServicesContainer}>
                  <span className={styles.homeProductsServicesContainer1}>
                    <p className={styles.home}>Home</p>
                    <p className={styles.home}>&nbsp;</p>
                    <p className={styles.home}>Products</p>
                    <p className={styles.home}>&nbsp;</p>
                    <p className={styles.home}>Services</p>
                  </span>
                </div>
                <b className={styles.landings}>Landings</b>
                <div className={styles.homeCareersServicesContainer}>
                  <span className={styles.homeProductsServicesContainer1}>
                    <p className={styles.home}>Home</p>
                    <p className={styles.home}>&nbsp;</p>
                    <p className={styles.home}>Careers</p>
                    <p className={styles.home}>&nbsp;</p>
                    <p className={styles.home}>Services</p>
                  </span>
                </div>
                <b className={styles.company}>Company</b>
                <div className={styles.blogProductsServicesContainer}>
                  <span className={styles.homeProductsServicesContainer1}>
                    <p className={styles.home}>Blog</p>
                    <p className={styles.home}>&nbsp;</p>
                    <p className={styles.home}>Products</p>
                    <p className={styles.home}>&nbsp;</p>
                    <p className={styles.home}>Services</p>
                  </span>
                </div>
                <b className={styles.resources}>Resources</b>
              </div>
            </div>
            <div className={styles.hiringWrapper}>
              <b className={styles.category}>Hiring!</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
