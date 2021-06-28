import React from "react";
import UserEditDeleteCell from './UserEditDeleteCell';

export const columns = [
  {
    name: "UserID",
    selector: "id",
    sortable: true
  },
  {
    name: "Name",
    selector: "name",
    sortable: true
  },
  {
    name: "Password",
    selector: "password",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true
  },
  {
    name: "Function",
    selector: "function",
    cell: (data)=> (<UserEditDeleteCell data={data} />)
  }
];

export const data = [
  {
    id: "u1",
    name: "Beetle John",
    password: "acjdkfadf",
    email: "beetlejohn@nimon.com",
  },
  {
    id: "u2",
    name: "Lillian Burgess",
    password: "8984hfedh",
    email: "lillianburgess@luxuria.com",
  },
  {
    id: "u3",
    name: "Kristie Cole",
    password: "uifnd",
    email: "kristiecole@quadeebo.com",
  },
  {
    id: "u4",
    name: "Leonor Cross",
    password: "19884567",
    email: "leonorcross@gronk.com2",
  },
  {
    id: "u5",
    name: "Marsh Mccall",
    password: "125521252",
    email: "marshmccall@ultrimax.com",
  },
  {
    id: "u6",
    name: "John Smith",
    password: "doaklfjlakd",
    email: "johnsmith@ultrimax.com",
  },
  {
    id: "u7",
    name: "Jack Brown",
    password: "551dafaf",
    email: "jackbrowm@company.com",
  },
  {
    id: "u8",
    name: "Martin Potter",
    password: "lkf902jdc",
    email: "martinpotter@hcmuy.com",
  },
  {
    id: "u9",
    name: "Jess May",
    password: "jsldujan76",
    email: "jessmay@htx.com",
  },
  {
    id: "u10",
    name: "Poly Max",
    password: "poweundm123",
    email: "polymax@homic.com",
  },
  {
    id: "u11",
    name: "Ren Sue",
    password: "q134i43ojf",
    email: "rensue@jktx.com",
  },
  {
    id: "u12",
    name: "Ben Jacob",
    password: "23sdaskd",
    email: "benjacob@hdoc.com",
  }
];
