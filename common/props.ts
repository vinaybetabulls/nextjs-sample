import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import React from "react";

export enum ROUNDELS {
  ROUNDEL_1 = "roundel1",
  ROUNDEL_2 = "roundel2",
  ROUNDEL_3 = "roundel3",
  ROUNDEL_4 = "roundel4",
  ROUNDEL_5 = "roundel5",
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryDark"
  | "secondaryLight"
  | "tertiary"
  | "tertiaryDark"
  | "tertiaryLight";

export type LinkProps = {
  label: string;
  url?: string;
  icon?: string;
  iconPosition?: "left" | "right" | "top";
  iconFontSize?: "inherit" | "small" | "large";
  highlight?: boolean;
  className?: string;
  nofollow?: boolean;
  noFollow?: boolean;
  newWindow?: boolean;
  onClick?: () => void;
  // Added to support links that appear as buttons
  button?: boolean;
  variant?: ButtonVariant;
  thin?: boolean;
  tabIndex?: number;
  highlightTextMatch?: string;
  id?: string;
  roundel?: ROUNDELS;
};

export type LinkGroup = {
  titleLink: LinkProps;
  links: LinkProps[];
};

export type LinkItem = {
  link: LinkProps;
  linkGroups: LinkGroup[];
  products?: ProductData[];
};

export type MenuItems = LinkItem[];

export type MyAccountMenuItems = {
  icon: string;
  title: string;
  description: string;
  url: string;
};

export type ImageBreakpoint = {
  breakpoint?: Breakpoint;
  query?: "min-width" | "max-width";
  filename: string;
  sizes?: string;
};

export type ImageSize = {
  breakpoint?: Breakpoint;
  query?: "min-width" | "max-width";
  width: string;
};

export type Image = {
  url: string;
  altText: string;
  label?: string;
};
export type Video = {
  url: string;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  preload?: "auto" | "metadata" | "none";
  resize?: boolean;
  snippet?: boolean;
  width?: string;
  height?: string;
  muted?: boolean;
  poster?: string;
};

export type Images = Image[];

export type DaysOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface Attribute<Name = string, Value = any> {
  name: Name;
  value: Value;
}

export type Category = {
  id: string;
  key: string;
  name: string;
  url: string;
  ancestors?: Category[];
};

export type Attributes<Name = string, Value = any> = {
  attributes: Attribute<Name, Value>[];
};

export interface ProductAttribute
  extends Attribute<
    | "sameDay"
    | "daysAvailable"
    | "deliveryTypes"
    | "crossSellProducts"
    | "includeInSiteMap"
    | "promotionalText"
    | "giftDetails"
    | "usps"
    | "containsAlcohol"
    | "productTypeIdentifiers"
    | "isFloristChoice"
    | "arrangementType"
    | "keyProductMessaging",
    string | boolean | Object | null
  > {}

export interface ProductVariantAttribute
  extends Attribute<
    | "variantSize"
    | "variantColor"
    | "occasions"
    | "flowerName"
    | "flowerColor"
    | "contains"
    | "mayContain"
    | "suitableFor"
    | "allergenURL"
    | "giftContents",
    string | string[] | null
  > {}

export type AlgoliaProduct = {
  key: string;
  sku: string;
  productName: string;
  variantName: string;
  description: string;
  promotionalText: string;
  allCategories: string[];
  arrangementType: string;
  containsAlchohol: boolean;
  deliveryTypes: string[];
  flowerName: string[];
  occasions: string[];
  price: number;
  productTypeIdentifiers: string[];
  rotation: string;
  sameDay: boolean;
  specialIndicator: string[];
  flowerColor: string[];
  data: ProductData;
  objectID?: string;
  __position?: string;
  __queryID?: string;
};

export type AlgoliaQueryType =
  | "PDP"
  | "PLP"
  | "Search"
  | "Autocomplete"
  | "GuidedNav";

export type ProductData = {
  id?: string;
  name: string;
  description: string;
  slug: string;
  url: string;
  price: ProductPrice;
  variantColor: string[];
  variantSize: string[];
  images: Images;
  productTypeIdentifiers?: string[];
  promotionalText?: string;
  sameDay?: boolean;
  uniqueServicePropositions?: string[];
  sku?: string;
  key?: string;
  categoryNames?: string[];
  categoryUsps: string[];
  wasPrice?: string;
  queryId?: string;
  queryType?: AlgoliaQueryType;
  objectId?: string;
  position?: string;
  indexName?: string;
  isProductOutOfStock?: boolean;
};

export type ListProduct = {
  id?: string;
  sku?: string;
  key?: string;
  images: Images;
  name: string;
  url: string;
  price: ProductPrice;
  uniqueServicePropositions?: string[];
  variants?: ListProductVariant[];
  description?: string;
  attributes?: ProductAttribute[];
  // Algolia returns attributes directly on product
  sameDay?: boolean;
  promotionalText?: string;
  productTypeIdentifiers?: string[];
  categoryUsps: string[];
};

export type DetailProduct = {
  id?: string;
  name: string;
  url: string;
  variants: DetailProductVariant[];
  price: ProductPrice;
  images: Images;
  key?: string;
  sku?: string;
  slug?: string;
  description?: string;
  metaDescription?: string;
  isFuneral?: boolean;
  attributes?: ProductAttribute[];
  countryCode?: string;
  categoryNames?: string[] | null;
  isInternational?: boolean;
  isOverseas?: boolean;
  wasPrice?: string;
  isCourierUpgrade?: boolean;
  isProductOutOfStock?: boolean;
  isfloristChoice?: boolean;
  isDropship?: boolean;
};

export type FinishingTouchProduct = Omit<
  ListProduct,
  "sku" | "attributes" | "variants"
> & {
  sku: string;
  description: string;
  variants?: FinishingTouchProductVariant[];
};

export type FinishingTouchProductGroup = {
  categoryName: string;
  products: FinishingTouchProduct[];
};

export type ProductVariant = Attributes;

export interface ListProductVariant
  extends Attributes<"variantColor" | "variantSize"> {}

export interface FinishingTouchProductVariant
  extends Attributes<
    "occasions" | "contains" | "mayContain" | "suitableFor" | "allergenURL"
  > {
  isMaster: boolean;
}

export interface DetailProductVariant extends ProductVariant {
  key?: string;
  sku: string;
  isMaster: boolean;
  name?: string;
  price: ProductPrice;
  images: Images;
}

export type ProductPrice = {
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
  formatted: string;
};

export type DeliverySettings = {
  sameDayCutoff: string;
  deliveryHours: string;
  deliveryCharge: number;
  collectionHours: string;
};

export type FieldValidation = {
  state?: "error" | "success";
  errorMessage?: string;
};

export type ValidationObject = {
  [key: string]: {
    type: "number" | "string" | "date";
    rules: {
      rule: "min" | "max" | "required" | "email";
      params: number[] | string[];
    }[];
  };
};

export type DateSelection = Date | [Date, Date] | null | undefined;

export type Address = {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  isDefaultAddress?: boolean;
  deliveryInstructionNote?: string;
  deliveryInstructionOption?: string;
};

export type LineItem = {
  id: string;
  sku: string;
  productId?: string;
  name: string;
  url: string;
  price: ProductPrice;
  quantity: number;
  images: Images;
  occasion?: string;
  cardMessage?: string;
  deliveryDate?: string;
  deceasedName?: String;
  funeralServiceDate?: Date;
  funeralServiceTime?: String;
  promotionalText?: string;
  deliveryInstructionOption: string;
  deliveryInstructionNote?: string;
  specialInstructions?: string;
  category?: { name: string; ancestors?: { name: string }[] };
  product?: {
    key: string;
    name: string;
    attributes?: ProductAttribute[];
    isInternational?: boolean;
    categoryNames?: string[];
  };
  attributes?: ProductVariantAttribute[];
  isGiftItem?: boolean;
};

export type Recipient = {
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type LineItemGroup = {
  lineItem: LineItem;
  finishingTouchLineItems?: LineItem[];
  recipient?: Recipient;
};

export type Delivery = {
  date?: string;
  address: Address;
  serviceCode: string;
  serviceDescription: string;
  serviceType: string;
  charge: ProductPrice;
};

export type Consignment = {
  id: string;
  orderNumber?: string;
  orderStatus?: OrderStatus;
  rotation: string;
  delivery?: Delivery;
  items: LineItemGroup[];
  isDigital?: boolean;
  isMaxQuantity: boolean;
};

export type BaseOrder = {
  // Adding id will cause apolloClient caching issues if result doesn't have globally unique address id
  // Issue with historic orders query where order is being split into two, id only used on confirmation page
  id?: string;
  billingAddress: Address;
  billingAddressCountrySelector?: string;
  showCountrySelector?: boolean;
  billingAddressSelection?: string;
  useDeliveryAddress: string;
  totalPrice: ProductPrice;
  deliveryCost: ProductPrice;
  deliveryPassType: string | null;
  deliveryPassDiscount: ProductPrice | null;
  totalDeliveryPassDiscount: ProductPrice | null;
  couponCode?: string | null;
  couponDiscount?: ProductPrice | null;
  marketing: { online: boolean; post: boolean };
  totalItems?: number;
  subtotal: ProductPrice;
  consignments: Consignment[];
  isLegacy?: boolean;
};

export type Cart = BaseOrder & {
  cutOff?: { secondsRemaining?: number; day?: string } | null;
  maxCheckoutStep: string;
  worldpayRedirectUrl?: string;
  unavailableItems?: {
    lineItemId: string;
    name: string;
  }[];
  showMarketingPreferences: boolean;
};

export type Order = BaseOrder & {
  orderNumber?: string;
  orderStatus?: OrderStatus;
  createdAt: string;
  customerCanRegister?: boolean;
};

export type OrderStatus = "OR" | "OAM" | "OOD" | "DEL" | "DA" | "DC" | "UKN";

export type GenericGalleryProps = {
  heading?: string;
  body?: string; // markup
  messageBefore?: string;
  linksBefore?: LinkProps[];
  items?: any[]; // Product / Block
  messageAfter?: string;
  linksAfter?: LinkProps[];
  linkStyle?: "TEXT" | "BUTTON";
};

export type Filter = {
  attributeName: string;
  attributeLabel: string;
  isOpen: boolean;
};

export type GenericContentProps = {
  image?: Image;
  imageBefore?: Image;
  imageAfter?: Image;
  heading?: string | React.ReactNode;
  subheading?: string;
  message?: string;
  citation?: string;
  link?: LinkProps;
  links?: LinkProps[];
  linkStyle?: "TEXT" | "BUTTON";
  headingColor?: "JADE" | "COBALT" | "WILD_EXOTIC";
  headingTag?: "DIV" | "H1" | "H2" | "H3" | "H4";
  textAlignment?: "LEFT" | "RIGHT" | "CENTER";
  contentPosition?: "LEFT" | "RIGHT" | "CENTER";
  mobileContentPosition?: "ABOVE" | "BELOW" | "OVER";
  isQuotation?: boolean;
  font?: "AMITHEN" | "GOTHAM";
  darknessLevel?: number;
  minHeight?: "SMALL" | "MEDIUM" | "LARGE" | "BLOG";
  buttonVariant?: ButtonVariant;
  video?: Video;
};

export type Nullable<T> = { [P in keyof T]: T[P] | null };

export type SortConfig = {
  defaultRefinement: string;
  items: {
    value: string;
    label: string;
  }[];
};

export type LooseObject = {
  [key: string]: any;
};

export type HandleRedirectSubmit<Values> = (
  values: Values,
  displayErrors?: (errors: LooseObject) => void
) => Promise<void>;

export type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  marketing: boolean;
};

export type SignInValues = {
  email: string;
  password: string;
};

export type FullNameValues = {
  firstName: string;
  lastName: string;
};

export type PhoneNumberValue = {
  contactNumber: string;
};

export type updatePasswordValues = {
  currentPassword: string;
  newPassword: string;
};
export type preferenceValues = {
  optInEmail: boolean;
  optInPost: boolean;
  optInOnline: boolean;
  optInSms: boolean;
};

export type PrivacyPreferenceValues = {
  email: boolean;
  sms: boolean;
  post: boolean;
  digitalMarketing: boolean;
};

export type EmailAddressValue = {
  email: string;
};

export type PasswordValue = {
  password: string;
};

export type GuestCheckoutValue = {
  guestCheckout: boolean;
};

export type FormattedAddress = (vars: {
  suggestion: string;
  format: string;
}) => Promise<any>;

export type FormattedAddressAndProductAvailability = (values: {
  suggestion: string;
  format: string;
  variantKey?: string;
}) => Promise<any>;

export type ProductAvailability = (values: {
  startDate: string;
  endDate: string;
  variant: string;
  occasion?: string;
  address: ProductAvailabilityMemberAddressInput;
}) => Promise<any>;

export type ProductAvailabilityMemberAddressInput = {
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city: string;
  county: string;
  postalCode: string;
  country: string;
};

export type DeliveryOptions = (vars: {
  variant?: string;
  deliveryDate: string;
  ruleIds?: string[];
  deliveryPassType?: string;
  countryCode?: string;
  address?: Address;
}) => Promise<any>;

export type HandleDeliveryOptionsCall = (
  deliveryDate: string,
  ruleIds: string[],
  formikContext: any,
  queryOnly?: boolean,
  deliveryPassType?: string,
  address?: Address,
  isFromDateChange?: boolean,
  selectedServiceDescription?: string
) => Promise<any>;

export type IsProductFulfillable = (vars: {
  deliveryDate: string;
  deliveryServiceCode: string;
  variant: string;
  address: ProductAvailabilityMemberAddressInput;
  funeralServiceTime?: string;
  funeralServiceDate?: string;
}) => Promise<any>;

export type AvailabilityDay = {
  date: string;
  deliveryServiceTypes: {
    serviceCode: string;
    ruleId: string;
  }[];
};

export type DeliveryOption = {
  title: string;
  price: {
    centAmount: number;
    currencyCode: string;
    fractionDigits: number;
    formatted: string;
  };
  serviceCode?: string;
  serviceType?: string;
  standardRuleId?: string;
  standardDeliveryCharge?: string;
  optionalRuleId?: string | null;
  optionalDeliveryCharge?: string | null;
  isIncludedInDeliveryPass: boolean;
  isCourierOption?: boolean;
};

export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  customerNumber?: string;
  contactNumber?: string;
  email: string;
  defaultShippingAddress?: Address;
  defaultBillingAddress?: Address;
  shippingAddresses?: Address[];
  billingAddresses?: Address[];
  deliveryPass: {
    expiryDate?: string;
    isRenewable?: boolean;
    product?: ProductData;
    availableToPurchase?: ProductData[];
  };
};

export type SvgImage = {
  url: string;
  altText: string;
};

export type ConfirmationRegisterValues = {
  password: string;
  orderId: string;
};

export type postcodeValue = {
  postcode: string;
};

type BlogArticleCategoryValues = {
  url: string;
  name: string;
};

export type AlgoliaBlogLatestArticles = {
  title: string;
  publishedDate: string;
  message: string;
  bannerImage: Image;
  blogCategories: BlogArticleCategoryValues[];
  data: BlogLatestArticle;
};

export type BlogLatestArticle = {
  title: string;
  image: Image;
  categories: BlogArticleCategoryValues[];
  date: string;
  description?: string;
  link?: LinkProps;
  backgroundColor?:
    | "FF_SHARP_YELLOW"
    | "FF_PLUSH_BLUSH"
    | "FF_LAZY_LIME"
    | "FF_WHITE";
};

export type PromotionalCodeValue = {
  promoCodeField: string;
};

export type NewsletterSignUpValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export enum DigitalProductTypes {
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export enum DigitalProductNames {
  INTERFLORA_GOLD = "Interflora Gold",
  INTEFRFLORA_PLATINUM = "Interflora Platinum",
}

export type addressTown = {
  locationName: string;
  postalCode: string;
};

export type CountryList = {
  name: string;
  codeAlpha2: string;
  codeAlpha3: string;
}[];
