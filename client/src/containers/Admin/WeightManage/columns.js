import React from "react";
import EditDeleteCell from "./WeightEditDeleteCell";

export const columns = [
  {
    name: "ProductId",
    selector: "id",
    sortable: true,
  },
  {
    name: "Product",
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
];
