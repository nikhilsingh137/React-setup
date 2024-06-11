export interface IHeader {
  Header: [
    {
      id: 1;
      url: "/";
      title: "Home";
      subTitle: true;
      subMenu?: [
        {
          id: 1;
          title: "file";
        },
        {
          id: 2;
          title: "data";
        },
        {
          id: 3;
          title: "content";
        },
        {
          id: 4;
          title: "detail";
        }
      ];
    }
  ];
  Content: [
    {
      id: 1;
      img: "https://st2.depositphotos.com/1579454/10057/i/450/depositphotos_100579796-stock-photo-machine-code-languages.jpg";
      title: "PHP DATA";
    }
  ];
  Accordian: [
    {
      id: 1;
      title: "JavaScript Introduction";
      paragraph: "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.";
      img: "file:///C:/Users/Dell/Downloads/11-1-removebg-preview.png";
    }
  ];
  Tab: [
    {
      id: 1;
      title: "HTML";
      paragraph: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.";
      img: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/09/HTML-Effects-Featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5";
    }
  ];
  Data: [
    {
      shortUrl: "/html/introduction/news/iran-israel-conflict-2024-explained-origins-cyber-attacks-assassinations-132884407.html";
      data: {
        id: 1;
        category: {
          id: 1;
          displayName: "Html Introduction";
          color: "#0f86f5";
          listingUrl: "/html/introduction/";
          img: "https://images.bhaskarassets.com/web2images/521/2021/11/16/ipl15989555741599046844115991331121634106872_1637060692.png";
        };
        header: {
          title: "HTML is the standard markup language for creating Web pages.";
          slug: "HTML is easy to learn - You will enjoy it!";
          containsVideo: true;
          media: [
            {
              type: "image";
              url: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.webp";
              size: {
                w: 730;
                h: 548;
              };
            }
          ];
        };
      };
    }
  ];
  SideData: [
    {
      id: 1;
      title: "HTML Intoduction";
      listingUrl: "/html/introduction/";
      img: "https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_1280.png";
    }
  ];
  Footer: [
    {
      logo: "http://localhost:3000/static/media/nikhil-logo-removebg-preview.508ea91bf36431e4f2a8.png";
      title: "The coding system used in text-marking establishes the purpose for reading a text.";
      nav?: [];
    },
    {
      title: "Pages";
      logo?: "http://localhost:3000/static/media/nikhil-logo-removebg-preview.508ea91bf36431e4f2a8.png";
      nav: [
        {
          id: 1;
          content: "About Us";
        },
        {
          id: 2;
          content: "About Us";
        },
        {
          id: 3;
          title: "Pages";
          content: "About Us";
        },
        {
          id: 4;
          title: "Pages";
          content: "About Us";
        },
        {
          id: 5;
          title: "Pages";
          content: "About Us";
        }
      ];
    }
  ];
  HtmlData: [
    {
      shortUrl: "/html/introduction/news/iran-israel-conflict-2024-explained-origins-cyber-attacks-assassinations-132884407.html";
      id: 1;
      paragraph: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.Some of the most common HTML elements that make up a webpage are text elements. All the text you read on this website, for example, whether it's the titles at the top of the page, the section headers, or this very text, is made from HTML text elements.";
      title: "Html Content";
    }
  ];
}

export interface IAbout {
  title: "Intermediate HTML and CSS";
  img: "https://www.theodinproject.com/assets/badge-html-css-91bc8d9c7ebb2e2f73eeb302c38a92d9ba6f182301dbd1868d7198fcc8376aeb.svg";
}

export interface IService {
  service: [
    {
      title?: "Advantages of A Corporate Website";
      Data: [
        {
          id: 1;
          img: "https://logowik.com/content/uploads/images/aws-api-gateway.jpg";
          title: "AI/ML";
          paragraph: "Creative mantra is here to help you create a strong and visible presence online. We design based on a keen understanding of your business, goals, and ideas.";
          button: "Learn More";
        }
      ];
    }
  ];
}

export interface IPricing {
  data: [
    {
      id: 1;
      button: "Monthly";
      data: [
        {
          id: 1;
          basic: "BASIC";
          rate: "$ 30 /YR";
          account: "5 Email Accounts";
          style: "1 Template Style";
          product: "25 Products Loaded";
          image: "1 Image per Product";
          band: "Unlimited Bandwidth";
          support: "24/7 Support";
          sign: "Sign Up";
        }
      ];
    }
  ];
}
