export const users = [
  {
    name: "user-1",
    standard: "-",
    productionTime: 80,
    guarantee: 24,
    paymentPercent: 30,

    cost: {
      currentPrice: 2500000,
      tax: 25000,
      futurePrice: 3700000,
    },
  },
  {
    name: "user-2",
    productionTime: 80,
    guarantee: 24,
    paymentPercent: 30,
    standard: "-",
    cost: {
      currentPrice: 2500000,
      tax: 25000,
      futurePrice: 3700000,
    },
  },
  {
    name: "user-3",
    productionTime: 80,
    guarantee: 24,
    paymentPercent: 30,
    standard: "-",
    cost: {
      currentPrice: 2500000,
      tax: 25000,
      futurePrice: 3700000,
    },
  },
];

export const labelsTable = [
  ["step", "ход"],
  ["name", "параметры и требования"],
  [
    "standard",
    "Наличие комплекса мероприятий, повышающих стандарты качества изготовления",
  ],
  ["productionTime", "Срок изготовления лота, дней"],
  ["guarantee", "Гарантийные обязательства, мес"],
  ["paymentPercent", "Условия оплаты"],
  ["cost", "Стоимость изготовления лота, руб. (без НДС)"],
  ["actions", "Действия"],
];
