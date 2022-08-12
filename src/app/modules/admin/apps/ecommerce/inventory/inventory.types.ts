export interface InventoryProduct2
{
    id: string;
    category?: string;
    name: string;
    description?: string;
    tags?: string[];
    sku?: string | null;
    barcode?: string | null;
    brand?: string | null;
    vendor: string | null;
    stock: number;
    reserved: number;
    cost: number;
    basePrice: number;
    taxPercent: number;
    price: number;
    weight: number;
    thumbnail: string;
    images: string[];
    active: boolean;
}

export interface InventoryProduct
{
    application: {},
    data: {
      content: String,
      image: String,
      source: String,
      sourceIcon: String,
      subTitle: String,
      title: String
    },
    firebaseNotificationId: String,
    language: String,
    sent: boolean,
    tags?: string[],
    id: string
}

export interface InventoryProduct2
{
    application: {},
    data: {
      content: String,
      image: String,
      source: String,
      sourceIcon: String,
      subTitle: String,
      title: String
    },
    firebaseNotificationId: String,
    language: String,
    sent: boolean,
}

export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}



export interface InventoryCategory
{
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand
{
    id: string;
    name: string;
    slug: string;
}

export interface InventoryTag
{
    id?: string;
    title?: string;
}

export interface InventoryVendor
{
    id: string;
    name: string;
    slug: string;
}
