import React from "react";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import ShopHeader from "Components/ShopHeader";
import ShopPresentation from "Components/ShopPresentation";
import PromotionalPackagesPreviewSection from "Components/WebRoutes/Products/components/PromotionalPackagesPreviewSection";
import ReusableStorytellingSection from "ReusableThemes/ReusableStorytellingSection";
import Products from "Components/PreviewComponents/Products";
import Categories from "Components/PreviewComponents/Categories";
import Gallery from "Components/PreviewComponents/Gallery";
import FullScreenLoader from "Components/FullScreenLoader";
import Banner from "Components/PreviewComponents/Banner";
import ThemesFooter from "Components/ThemesFooter";

const FeaturedProductsList = dynamic(() => import("Components/FeaturedProductsList"), {
  loading: () => <FullScreenLoader />,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.page,
  },
  main: {
    flex: 1,
    overflow: "hidden",
  },
  copyrightText: {
    color: theme.palette.colors.white,
  },
  copyrightLink: {
    color: theme.palette.colors.white,
  },
  storytellingImg: {
    borderRadius: 0,
  },
  storytellingTitle: theme.title(),
}));

const Layout = (props) => {
  const classes = useStyles();
  const { shop = {}, t, showPromotionalPackages = true, storytelling, mayFetch, producsProps = {}, deviceType, featuredProduct } = props;
  const { key, categories } = shop;
  return (
    <div className={classes.root}>
      <ShopHeader {...props} />
      <main className={classes.main}>
        <ShopPresentation shop={shop} t={t} />
        {/* //*? this is for safekeeping ;)
         {showPromotionalPackages && (
          <PromotionalPackagesPreviewSection shop={shop} shopKey={key} t={t} />
        )}
        {storytelling && storytelling.enabled && (
          <ReusableStorytellingSection
            storytelling={storytelling}
            customClasses={{
              img: classes.storytellingImg,
              title: classes.storytellingTitle,
            }}
          />
        )}
        <Products
          t={t}
          mayFetch={mayFetch}
          limit={8}
          shop={shop}
          {...producsProps}
        >
          <Categories categories={categories} shopKey={key} limit={4} t={t} />
        </Products>
        <Gallery t={t} limit={3} shop={shop} />
        <FeaturedProductsList
          shopKey={key}
          deviceType={deviceType}
          t={t}
          featuredProduct={featuredProduct}
        />
        <Banner shop={shop} shopKey={key} t={t} /> */}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  t: "ƒ fixedT() {}",
  mayFetch: true,
  webshopFooterFlag: true,
  shop: {
    id: 825,
    name: "Generic Business",
    key: "Generic Business",
    email: "ltd7@gmail.com",
    description: "Generic Description",
    whatsapp_number: "380123123123",
    facebook_url: "https://stanton.com/quidem-ut-beatae-facere-voluptas.html",
    instagram_url: "https://stanton.com/quidem-ut-beatae-facere-voluptas.html",
    address: "aaa",
    civic_number: "22",
    city: "ccc",
    phone: "380123123123",
    zipcode: "12322",
    province: "43",
    region: "",
    currency: "USD",
    category: { id: 7, name: "Arte" },
    billing_vat: "",
    other_info:
      '{"blocks":[{"key":"995hr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    opening_days_info:
      '{"blocks":[{"key":"8jelt","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    delivery_zones_info: "",
    health_measures_info: "",
    terms_conditions: "",
    terms_conditions_new:
      '{"blocks":[{"key":"67jt3","text":"Title","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"849ir","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4vhqg","text":"Some members are members of the urn, which need a lot of integer policies.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aq066","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8mkpa","text":"Item 1","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7dgrq","text":"Item 2","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bv1l0","text":"Item 3","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    privacy_cookie_policy:
      '{"blocks":[{"key":"67jt3","text":"This document describes the methods of processing the personal data of users who visit the website https://dev.vetrinalive.lastingdynamics.net/ltd7-gmail-com-1 . Therefore, this is a disclosure also made pursuant to art. 13 and 14 of Regulation (EU) 2016/679 - General Data Protection Regulation (\\"GDPR\\") - for those who simply surf the site and for users who spontaneously send communications to the contact details of Privacy.it made public on the site","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"35v0d","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9d3n3","text":"Holder of the treatment","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":23,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"63h4f","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f5spd","text":"The owner of the processing of personal data is the ltd7@gmail.com based in aaa, 22, ccc, 43, 12322 . ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"540pe","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8l0er","text":"Place of data processing - Subjects who can process or access them - Recipients","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"da0dq","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f3i3a","text":"The treatments connected to the web services offered by this site (physically hosted on the territory of the European Union) are carried out at the headquarters of the Data Controller and are only handled by personnel authorized to process them. Occasionally, third-party suppliers may be granted temporary access to the site\'s memories for exclusive technical assistance reasons, in compliance with the provisions of the law and under the supervision of the Owner. The data is not disclosed abroad. In addition to this, no data deriving from the interaction with the site is disclosed to third parties or disseminated.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"261dc","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"61kuf","text":"Type of data processed","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":22,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"277rh","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8iuj5","text":"The computer systems and software procedures used to operate this website acquire, during their normal operation, some personal data whose transmission is implicit in the use of Internet communication protocols. This information is not collected to be associated with identified interested parties, but which by their very nature could, through processing and association with data held by third parties, allow users to be identified.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f0113","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aai6e","text":"This category of data includes the IP addresses or domain names of the computers used by users who connect to the site, the addresses in the Uniform Resource Identifier (URI) notation of the requested resources, the time of the request, the method used to submit the request to the server, the size of the file obtained in response, the numerical code indicating the status of the response given by the server (successful, error, etc.) and other parameters relating to the operating system and the user\'s IT environment.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"deaur","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"p0u1","text":"The navigation data will be collected exclusively in the legitimate interest of allowing the user to use the contents published on the Owner\'s websites and their proper administration and management. These data are used for the sole purpose of obtaining anonymous statistical information on the use of the site and to check its correct functioning and are deleted immediately after processing. The data in question could be used to ascertain responsibility in the event of any computer crimes against our site: except for this possibility, generally the data on web contacts are not stored for more than seven days.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dhqad","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b8viq","text":"Management of Cookies","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"41sdb","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9hmm","text":"The cookies used on this site may fall into the categories described below.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eqtv5","text":"Activities strictly necessary for operation","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":43,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"9s1qs","text":"These cookies are of a technical nature and allow the site to function properly. For example, they keep the user connected while browsing, preventing the site from requesting to log in several times to access subsequent pages.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8rtc1","text":"Activity for saving preferences","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":31,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"70htq","text":"These cookies allow you to remember the preferences selected by the user while browsing, for example, they allow you to set the language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fd7r2","text":"Statistical and audience measurement activities (eg: Google Analytics and Facebook Pixel)","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":89,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"e70qu","text":"These cookies help us to monitor, through the data collected, how users interact with the website by providing information relating to the sections visited, the time spent on the site, conversions, purchases.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dup57","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f699g","text":"Data provided voluntarily by the user","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":37,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"4tl4b","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8769i","text":"The optional, explicit and voluntary sending of e-mails or instant messages (eg Whatsapp) to the e-mail addresses and telephone numbers of ltd7@gmail.com indicated on this site, involves by its very nature the subsequent acquisition of the e-mail address and the sender\'s telephone number, necessary to respond to requests, as well as any other personal data included in the message. The legal bases of the processing are, therefore, the legitimate interest of the Data Controller to respond to the communications received or the need to process pre-contractual requests made by the interested party. The data will be kept for the time necessary to satisfy any requests from the sender or issues submitted therein to the Data Controller and, in any case, for the time imposed by specific provisions of the law. In any case, the sender has the right to request cancellation of the same according to the methods, conditions and limits provided for by art. 17 of the GDPR.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d9tfk","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d58sa","text":"We invite our users not to send in their communications the names or other personal data of third parties that are not strictly necessary; Instead, the use of fictional names appears much more appropriate.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bsg6h","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8o30s","text":"Optional supply of data","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":23,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"1kpdn","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"brli5","text":"Apart from what is specified for navigation data, the user is free to spontaneously provide personal data to request information or services. Failure to provide them may make it impossible to obtain what is requested.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1afau","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2qh62","text":"Data collection and purpose of processing","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":41,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"7fbk5","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cpo4g","text":"The data will be collected without your express consent (according to art.6.1 letter b), G.D.P.R.) and will be used for the purpose of selling products. The data collected is necessary for the completion of the desired service, therefore failure to provide the data will result in the failure to perform the service.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"77kka","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7t4ir","text":"Methods of processing","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"6okvi","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"qpac","text":"The personal data collected are processed by the data controller and by the managers appointed for the correct fulfillment of the requested service. The data is processed using electronic tools and paper archives, adopting security measures to guarantee the confidentiality of personal data and to avoid undue access to unauthorized parties.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dcbpd","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fjqt7","text":"Data retention","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"bmt8t","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e227f","text":"The Data Controller will process personal data for the time necessary to fulfill the purposes of a contractual nature and also for the purposes of an accounting and tax nature and in any case for no more than 2 years from the termination of the contractual relationship.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3fgjk","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e3udp","text":"Rights of interested parties","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":28,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"avb9o","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9djmo","text":"Pursuant to articles 15 and following of the GDPR, the user has the right to request at any time, access to his personal data, the correction or cancellation of the same, the limitation of processing in the cases provided for by art. 18 of the Regulation, obtain the data concerning him in a structured format, commonly used and readable by an automatic device, in the cases provided for by art. 20 of the GDPR. At any time, the user can revoke pursuant to art. 7 of the GDPR the consent given (where consent has been requested); propose a complaint to the competent supervisory authority pursuant to art. 77 of the GDPR (Guarantor for the Protection of Personal Data), if you believe that the processing of your data is contrary to the legislation in force. The user can also make a request for opposition to the processing of his personal data pursuant to art. 21 of the GDPR in which to give evidence of the reasons justifying the opposition: the Data Controller reserves the right to evaluate the request, which may not be accepted where there are obligations or legitimate reasons prevailing over the interests, rights and freedoms of the user and which impose or justify the continuation of the treatment. Requests relating to the exercise of the aforementioned rights must be addressed to the attention of ltd7@gmail.com based in aaa, 22, ccc, 43, 12322 or to the e-mail address: ltd7@gmail.com . ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5uhhv","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7q8id","text":"Updates to this Privacy and Cookie Policy","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":41,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"ao3rv","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fof3p","text":"The information given here may be subject to revision. Users are kindly invited to periodically visit this Policy in order to be constantly updated on the characteristics of the treatment.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    delivery_cost: 0,
    fb_pixel_id: "fdj",
    google_analytics_id: "",
    gtm_id: "",
    fb_page_id: "",
    timezone: "Europe/Rome",
    timeformat: "HH:mm",
    is_on: true,
    color: "#FF647C",
    logo_url: null,
    banner_url:
      "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1386&q=80",
    banner_meta: {
      banner_url:
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1386&q=80",
      top_bar: { is_enabled: false },
    },
    delivery_options: [
      {
        id: 3038,
        name: "Delivery at home",
        is_enabled: true,
        costs: [
          {
            id: 3151,
            name: "Nearby",
            cost: 2,
            type: 1,
            ranges: [],
            is_payed_online: false,
          },
        ],
      },
      {
        id: 3039,
        name: "Pickup in store",
        is_enabled: true,
        costs: [
          {
            id: 3152,
            name: "No additional cost",
            cost: 0,
            type: 1,
            ranges: [],
            is_payed_online: false,
          },
        ],
      },
      {
        id: 3040,
        name: "Courier Shipment",
        is_enabled: false,
        costs: [
          {
            id: 3153,
            name: "Standard shipment",
            cost: 10,
            type: 1,
            ranges: [],
            is_payed_online: false,
          },
        ],
      },
      {
        id: 3041,
        name: "Order at table",
        is_enabled: false,
        costs: [
          {
            id: 3154,
            name: "No additional cost",
            cost: 0,
            type: 1,
            ranges: [],
            is_payed_online: false,
          },
        ],
      },
    ],
    preferences: {
      adult_content: false,
      related_products: true,
      checkout_fiscal_code: false,
      variable_product_color: true,
      variable_product_price: true,
      variable_product_weight: false,
      show_categories_alternative_way: false,
    },
    on_free_trial: false,
    products_allowed: 500,
    gallery: [
      {
        "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/shops/922/gallery/VRNmrNYsws6XEiUEqJTM0fqrSajhJnjChPniE4WN.jpeg",
        id: "VRNmrNYsws6XEiUEqJTM0fqrSajhJnjChPniE4WN",
        order: 2,
      },
      {
        "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/shops/922/gallery/5br1llG9ZEvSe6mNlUKCTcsuex85IhrfxxN8Dg6u.jpeg",
        id: "5br1llG9ZEvSe6mNlUKCTcsuex85IhrfxxN8Dg6u",
        order: 1,
      },
    ],
    categories: [
      { id: 465, title: "category 5", color: "#2196f3", order: 5 },
      { id: 464, title: "category 4", color: "#f57c00", order: 4 },
      { id: 463, title: "category 3", color: "#673ab7", order: 3 },
      { id: 462, title: "category 2", color: "#e91e63", order: 2 },
      { id: 461, title: "category 1", color: "#00bcd4", order: 1 },
    ],
    country_code: "UA",
    fiscal_code: "123123",
    locale: "en",
    owner_id: 830,
    payments: {
      offline: { is_enabled: false },
      wire_transfer: { is_enabled: false, owner_name: "", iban: "" },
      paypal: { is_enabled: true, client_id: "" },
      stripe: { is_enabled: true, account_id: "" },
      razorpay: { is_enabled: true, key_id: "123123" },
    },
  },
  topBanner: {
    is_enabled: false,
    message: "Spedizioni gratuite per ordini superiori a 90€",
  },
  logoUrl: null,
  children: "<ForwardRef />",
  storytelling: {
    enabled: true,
    id: 10,
    layout: 1,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.cs  https://www.youtube.com/watch?v=ETOt7-a0MjM`,
    title: "storytelling test",
    picture:
      "https://images.unsplash.com/photo-1635398500586-6d2c1887eeff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80",
    video: "",
  },
  producsProps: {
    products: [
      {
        id: 12798,
        name: "Test new product",
        key: "Test+new+product-12798",
        description:
          '{"blocks":[{"key":"75ff5","text":"gdfahsgrhgfsh","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        shop_id: 922,
        shop_key: "new-rafio-test",
        category: { id: 581, title: "cat 1", color: "#009688" },
        quantity: 203,
        price: 10,
        current_price: 2,
        discounted_price: 2,
        discounted_price_enabled: true,
        promo_discount: null,
        promo_discount_starts_at: null,
        promo_discount_ends_at: null,
        promo_discount_enabled: false,
        order: 1,
        is_published: true,
        is_price_variable: false,
        weights: "",
        colors: "",
        variants: [],
        featured: true,
        sku: "18914982165498",
        pictures: [
          {
            id: "21M1F76MFeVmy0UrwTcMwNzOKagEFoA7MZZzBykx",
            "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/EwnNsctRyq6TCpUu0tZjxWJP7vYngketDQySQZby.jpeg",
            "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/21M1F76MFeVmy0UrwTcMwNzOKagEFoA7MZZzBykx.jpeg",
            "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/21M1F76MFeVmy0UrwTcMwNzOKagEFoA7MZZzBykx.jpeg",
          },
          {
            id: "5yRUcL5uTVmzr4iKnGjgyc9xJq8eGFHcbSV1zPiD",
            "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/I4kQ3br2lQej4cNp8EBEj5Zo7moCrXxgS3Rcfo3k.jpeg",
            "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/5yRUcL5uTVmzr4iKnGjgyc9xJq8eGFHcbSV1zPiD.jpeg",
            "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/5yRUcL5uTVmzr4iKnGjgyc9xJq8eGFHcbSV1zPiD.jpeg",
          },
          {
            id: "zxjRKdI1f7gDI19dwRocCZ8ZrjxDwWD9nYIVgJXc",
            "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/8wTDu2vMwsXFJ02H4QEyVra5mqNwHBZsg8tpwuLC.png",
            "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/zxjRKdI1f7gDI19dwRocCZ8ZrjxDwWD9nYIVgJXc.png",
            "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/zxjRKdI1f7gDI19dwRocCZ8ZrjxDwWD9nYIVgJXc.png",
          },
        ],
        video: [
          {
            url: "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/tahFPCwCuxfeMuWKLBoQkjydegAgXiaIY1DRCEW2.mp4",
            thumbnail_url: "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/uVOrJfutSvjn8I9MwlyXA5uFdaMFhTfHLgjH6bYf.jpg",
          },
        ],
      },
    ],
    total: 1,
    has_next_page: false,
  },
  featuredProduct: {
    id: 12798,
    name: "Test new product",
    key: "Test+new+product-12798",
    description:
      '{"blocks":[{"key":"75ff5","text":"gdfahsgrhgfsh","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    shop_id: 922,
    shop_key: "new-rafio-test",
    category: { id: 581, title: "cat 1", color: "#009688" },
    quantity: 203,
    price: 10,
    current_price: 2,
    discounted_price: 2,
    discounted_price_enabled: true,
    promo_discount: null,
    promo_discount_starts_at: null,
    promo_discount_ends_at: null,
    promo_discount_enabled: false,
    order: 1,
    is_published: true,
    is_price_variable: false,
    weights: "",
    colors: "",
    variants: [],
    featured: true,
    sku: "18914982165498",
    pictures: [
      {
        id: "21M1F76MFeVmy0UrwTcMwNzOKagEFoA7MZZzBykx",
        "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/EwnNsctRyq6TCpUu0tZjxWJP7vYngketDQySQZby.jpeg",
        "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/21M1F76MFeVmy0UrwTcMwNzOKagEFoA7MZZzBykx.jpeg",
        "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/21M1F76MFeVmy0UrwTcMwNzOKagEFoA7MZZzBykx.jpeg",
      },
      {
        id: "5yRUcL5uTVmzr4iKnGjgyc9xJq8eGFHcbSV1zPiD",
        "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/I4kQ3br2lQej4cNp8EBEj5Zo7moCrXxgS3Rcfo3k.jpeg",
        "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/5yRUcL5uTVmzr4iKnGjgyc9xJq8eGFHcbSV1zPiD.jpeg",
        "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/5yRUcL5uTVmzr4iKnGjgyc9xJq8eGFHcbSV1zPiD.jpeg",
      },
      {
        id: "zxjRKdI1f7gDI19dwRocCZ8ZrjxDwWD9nYIVgJXc",
        "50x50": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/8wTDu2vMwsXFJ02H4QEyVra5mqNwHBZsg8tpwuLC.png",
        "500x600": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/zxjRKdI1f7gDI19dwRocCZ8ZrjxDwWD9nYIVgJXc.png",
        "1000x1200": "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/zxjRKdI1f7gDI19dwRocCZ8ZrjxDwWD9nYIVgJXc.png",
      },
    ],
    video: [
      {
        url: "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/tahFPCwCuxfeMuWKLBoQkjydegAgXiaIY1DRCEW2.mp4",
        thumbnail_url: "https://vetrinalive-test.s3.eu-central-1.amazonaws.com/products/12798/uVOrJfutSvjn8I9MwlyXA5uFdaMFhTfHLgjH6bYf.jpg",
      },
    ],
  },
};

export default Layout;
