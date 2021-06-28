import React from "react";
import EditDeleteCell from './WeightEditDeleteCell';

export const columns = [
  {
    name: "ProductID",
    selector: "id",
    sortable: true
  },
  {
    name: "Product",
    selector: "product",
    sortable: true
  },
  {
    name: "Origin",
    selector: "origin",
    sortable: true,
  },
  {
    name: "Date",
    selector: "date",
    sortable: true
  },
  {
    name: "Weight",
    selector: "weight",
    sortable: true
  },
  {
    name: "Function",
    selector: "function",
    cell: (data)=> (<EditDeleteCell data={data} />)
  }
];

export const data = [
  {
    id: "w001",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "530",
  },
  {
    id: "w002",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "534",
  },
  {
    id: "w003",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "540",
  },
  {
    id: "w004",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "552",
  },
  {
    id: "w005",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "554",
  },
  {
    id: "w006",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "533",
  },
  {
    id: "w007",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "526",
  },
  {
    id: "w008",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "540",
  },
  {
    id: "w009",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "567",
  },
  {
    id: "w010",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "580",
  },
  {
    id: "w011",
    product: "Orange",
    origin: "Long An",
    date: "20/04/2021",
    weight: "520",
  },
];
