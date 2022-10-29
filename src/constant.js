import AcUnitIcon from "@mui/icons-material/AcUnit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const sidebarArr = [
  { label: "Home", route: "../" },
  { label: "Typography", route: "../typography" },
  { label: "Loader", route: "../loader" },
  { label: "Snakebar", route: "../snakebar" },
  {
    label: "Button",
    route: "../button",
    ExpandLess: ExpandLess,
    ExpandMore: ExpandMore,
    childs: [
      { label: "Child Button", route: "../button" },
      {
        label: "Button",
        route: "../button",
        ExpandLess: ExpandLess,
        ExpandMore: ExpandMore,
        childs: [
          { label: "Child Button", route: "../button" },
          {
            label: "Button",
            route: "../button",
            ExpandLess: ExpandLess,
            ExpandMore: ExpandMore,
            childs: [{ label: "Child Button", route: "../button" }],
          },
        ],
      },
    ],
  },
  // { label: "Color", route: "../color" },
  { label: "InputBox", route: "../inputbox" },
  { label: "Otp Screen", route: "../otp" },
  { label: "Select Box", route: "../selectbox" },
  { label: "UploadBox", route: "../uploadbox" },
  { label: "Modal", route: "../Modal" },
  { label: "Tab", route: "../tabs" },
  { label: "Example1", route: "../example" },
];
// https://github.com/Digiappstores/reactcompokit/blob/master/src/Pages/inputbox.js
// https://github.com/Digiappstores/reactcompokit/blob/master/src/Components/TextField/index.js
export const sourceRoute = [
  {
    route: "/typography",
    pageSource: "Pages/typography.js",
    componentSource: null,
  },
  {
    route: "/button",
    pageSource: "Pages/button.js",
    componentSource: "Components/Button/index.js",
  },
  {
    route: "/inputbox",
    pageSource: "Pages/inputbox.js",
    componentSource: "Components/TextField/index.js",
  },
  {
    route: "/otp",
    pageSource: "Pages/otp.js",
    componentSource: "Components/Otp/index.js",
  },
  {
    route: "/selectbox",
    pageSource: "Pages/selectbox.js",
    componentSource: null,
  },
  {
    route: "/uploadbox",
    pageSource: "Pages/uploadbox.js",
    componentSource: null,
  },
  { route: "/Modal", pageSource: "Pages/modal.js", componentSource: null },
  {
    route: "/tabs",
    pageSource: "Pages/tabs.js",
    componentSource: "Components/customTabs/index.js",
  },
  { route: "/example", pageSource: "Pages/Example", componentSource: null },
  {
    route: "/accordian",
    pageSource: "Pages/accordion.js",
    componentSource: "Components/Accordion/index.js",
  },
  {
    route: "/datepicker",
    pageSource: "Pages/datepicker",
    componentSource: "Components/DatePicker/index.js",
  },
  {
    route: "/checkboxes",
    pageSource: "Pages/checkboxes.js",
    componentSource: "Components/Checkbox/index.js",
  },
  {
    route: "/checkbox-as-button",
    pageSource: "Pages/checkboxAsButton.js",
    componentSource: "Components/CheckboxAsButton/index.js",
  },
  {
    route: "/slider",
    pageSource: "Pages/slider.js",
    componentSource: "Components/Slider/index.js",
  },
  {
    route: "/radio-buttons",
    pageSource: "Pages/radioButtons.js",
    componentSource: "Components/RadioButtons/index.js",
  },
  {
    route: "/inline-edit",
    pageSource: "Pages/nameInline.js",
    componentSource: "Components/InlineValueEdit/index.js",
  },
  {
    route: "/quantity",
    pageSource: "Pages/quantity.js",
    componentSource: "Components/Quantity/index.js",
  },
  {
    route: "/map",
    pageSource: "Pages/googleMap.js",
    componentSource: "Components/GoogleMap/index.js",
  },
  {
    route: "/social-icons",
    pageSource: "Pages/socialIcons.js",
    componentSource: "Components/SocialIcons/index.js",
  },
  {
    route: "/offline-online",
    pageSource: "Pages/onlineOffline.js",
    componentSource: "Components/OnlineOffline/index.js",
  },
  {
    route: "/image-card-view",
    pageSource: "Pages/imageCardView.js",
    componentSource: "Components/ImageCardView/index.js",
  },
];

export const getPageUrl = (type, routeName) => {
  const currrentObj = sourceRoute.filter((option) => option.route == routeName);
  var githubUrl =
    "https://github.com/Digiappstores/reactcompokit/blob/master/src/";

  return currrentObj.length > 0
    ? type == "componentSource" && currrentObj[0]["componentSource"] == null
      ? null
      : githubUrl + currrentObj[0][type]
    : null;
};

// talib component

export const defaultImage =
  "https://images.unsplash.com/photo-1663834191004-4e23be2710b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
