import React from "react";
import EditDeleteCell from "./WeightEditDeleteCell";

export const columns = [
  {
    name: "Product Id",
    selector: "id",
    sortable: true,
  },
  {
    name: "Product Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "SKU",
    selector: "sku",
    sortable: true,
  },
  {
    name: "Origin",
    selector: "origin",
    sortable: true,
  },
  {
    name: "Date",
    selector: "importDate",
    sortable: true,
  },
  {
    name: "Weight",
    selector: "weight",
    sortable: true,
    cell: (data) => `${data.weight} (g)`
  },
  {
    name: "QR Code",
    selector: "qrCode",
    cell: (data)=> <img style={{"height":100, "width":100}} src={data.qrCode} alt="QR code" />
  },
  {
    name: "Function",
    selector: "function",
    cell: (data) => <EditDeleteCell data={data} />,
  },
];

export const data = [
  // {
  //   id: 1,
  //   name: "Orange",
  //   sku: "O001",
  //   origin: "Long An",
  //   weight: 530,
  //   importDate: "20/06/2021",
  //   qrCode:
  //     "data:image/png;base64,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",
  // },
  // {
  //   id: "w001",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "530",
  // },
  // {
  //   id: "w002",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "534",
  // },
  // {
  //   id: "w003",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "540",
  // },
  // {
  //   id: "w004",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "552",
  // },
  // {
  //   id: "w005",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "554",
  // },
  // {
  //   id: "w006",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "533",
  // },
  // {
  //   id: "w007",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "526",
  // },
  // {
  //   id: "w008",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "540",
  // },
  // {
  //   id: "w009",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "567",
  // },
  // {
  //   id: "w010",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "580",
  // },
  // {
  //   id: "w011",
  //   product: "Orange",
  //   origin: "Long An",
  //   date: "20/04/2021",
  //   weight: "520",
  // },
  {
    id: 82,
    name: 'Orange',
    sku: 'O001',
    origin: 'Long An',
    weight: 530,
    importDate: '20/06/2021',
    qrCode: 'data:image/png;base64,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'
  },
  {
    id: 83,
    name: 'Grapefruit',
    sku: 'G002',
    origin: 'Ninh Thuan',
    weight: 844,
    importDate: '20/06/2021',
    qrCode: 'data:image/png;base64,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'
  },
];
