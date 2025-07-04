import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: "ICICI Bank",
    type: "bank",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8mXBusladp4eop5YLbiGOpipboZcpsGylw&s",
  },
  {
    name: "HDFC Bank",
    type: "bank",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqsArzAWLjYk1ONmMt4kOGbtAtH10B61Xaw&s",
  },
    {
    name: "AU Bank",
    type: "bank",
    imageUrl:
      "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-13634,resizemode-75,msid-118714061/markets/stocks/news/growing-focus-on-secured-loans-crucial-for-au-sfb-amid-rising-unsecured-loan-stress.jpg",
  },
  {
    name: "Suryodhaya Small Finance Bank",
    type: "bank",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsurs-F_YT7kqmRaUi6EVi75_zh-pJ3EKEw&s",
  },
  {
    name: "Axis Bank",
    type: "bank",
    imageUrl:
      "https://cdn.brandfetch.io/axisbank.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
  },
  {
    name: "YES Bank",
    type: "bank",
    imageUrl:
      "https://brandlogos.net/wp-content/uploads/2022/07/yes_bank-logo_brandlogos.net_84zyr.png",
  },
  {
    name: "IndusInd Bank",
    type: "bank",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhv54BCIZTc_imhpq7Us0LQwuEYVuWKTDEA&s",
  },
  {
    name: "IDFC FIRST Bank",
    type: "bank",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ULj--55S7mBPE8d4q6rxh9kL_1YFZsNJLg&s",
  },
  {
    name: "Kotak Mahindra",
    type: "bank",
    imageUrl:
      "https://www.dsource.in/sites/default/files/styles/mini_responsivecustom_user_moblie_1x/public/resource/logo-design/logos/contemporary-logos/minigallery/17321/11-Kotak.jpg?itok=J0x89afn&timestamp=1502454041",
  },
    {
    name: "SBI Bank",
    type: "bank",
    imageUrl:
      "https://www.eqimg.com/images/2025/1920x1080/02072025-image6-equitymaster.jpg",
  },
  {
    name: "Bandhan Bank",
    type: "bank",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBumMRTPYanZLsg8qrYq8SZILsqPuIq8RvQ&s",
  },
  {
    name: "TATA Capital",
    type: "nbfc",
    imageUrl:
      "https://content.jdmagicbox.com/v2/comp/barbil/e7/9999p6766.6766.230920143725.q3e7/catalogue/tata-capital-bata-chowk-road-barbil-financial-institutions-kibwg13yam.jpg",
  },
  {
    name: "Bajaj Finserv",
    type: "nbfc",
    imageUrl:
      "https://play-lh.googleusercontent.com/DbepofsHLK7fTQmiQi9KurqbL1VvVJEAJ0AOX8CejdsgygCTH_0K4kG9JLmcKl3MkN0K=s256-rw",
  },
  {
    name: "Cholamandalam",
    type: "nbfc",
    imageUrl:
      "https://content.jdmagicbox.com/comp/guntur/a2/9999px863.x863.140207144631.l8a2/catalogue/cholamandalam-investment-and-finance-company-limited-arundalpet-guntur-personal-loans-htoydf6.jpg",
  },
  {
    name: "TVS Credit",
    type: "nbfc",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_atX1I-Z_S9G1G9aUDTP3mi25h3x9MWzAg&s",
  },
  {
    name: "Hero FinCorp",
    type: "nbfc",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSispWMZu2lf3fTszQHEk8xcoLj5S9QKYODzw&s",
  },
  {
    name: "Poonawalla Finance",
    type: "nbfc",
    imageUrl:
      "https://www.financialexpress.com/wp-content/uploads/2022/04/Poonawalla-Fincorp-.jpg",
  },
  {
    name: "Sundaram Finance",
    type: "nbfc",
    imageUrl:
      "https://content3.jdmagicbox.com/comp/guntur/dc/9999px863.x863.090627081249.z8a6dc/catalogue/sundaram-finance-ltd-guntur-finance-companies-uu76ecl.jpg",
  },
  {
    name: "Piramal Finance",
    type: "nbfc",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1808033298628988928/oB0TLxbX_400x400.jpg",
  },
  {
    name: "Equitas SFB",
    type: "nbfc",
    imageUrl:
      "https://portfolio.investmentguruindia.com/investmentguruimages/upload/post/2023/05/624dfeadba1f6d79d4f280de9a357457.jpg",
  },

];

export const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      gridRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              Trusted Partners
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Partnered with 20+ leading banks and NBFCs to offer you the best
            deals
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {partners.map((partner, index) => {
            const gradients = [
              "from-blue-500 to-indigo-600",
              "from-cyan-500 to-teal-600",
              "from-orange-500 to-rose-600",
              "from-rose-500 to-pink-600",
              "from-purple-500 to-indigo-600",
            ];
            const gradient =
              partner.type === "bank"
                ? gradients[index % 2]
                : gradients[2 + (index % 3)];

            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-600"
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br`}
                  >
                    <img
                      src={partner.imageUrl}
                      alt={partner.imageUrl}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">
                    {partner.type === "bank" ? "Bank" : "NBFC"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            And many more financial institutions to serve you better
          </p>
        </div>
      </div>
    </section>
  );
};
