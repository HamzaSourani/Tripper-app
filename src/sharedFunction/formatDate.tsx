const formatDate = (date: string) => {
  switch (date.slice(5, 7)) {
    case "01":
      return { mounth: "كانون الثاني", day: date.slice(8, 10) } as const;
    case "02":
      return { mounth: "شباط", day: date.slice(8, 10) } as const;
    case "03":
      return { mounth: "آذار", day: date.slice(8, 10) } as const;
    case "04":
      return { mounth: "نيسان", day: date.slice(8, 10) } as const;
    case "05":
      return { mounth: "ايار", day: date.slice(8, 10) } as const;
    case "06":
      return { mounth: "حزيران", day: date.slice(8, 10) } as const;
    case "07":
      return { mounth: "تموز", day: date.slice(8, 10) } as const;
    case "08":
      return { mounth: "آب", day: date.slice(8, 10) } as const;
    case "09":
      return { mounth: "ايلول", day: date.slice(8, 10) } as const;
    case "10":
      return { mounth: "تشرين الأول", day: date.slice(8, 10) } as const;
    case "11":
      return { mounth: "تشرين الثاني", day: date.slice(8, 10) } as const;
    case "12":
      return { mounth: "كانون الأول", day: date.slice(8, 10) } as const;
    default:
      return { mounth: "كانون الأول", day: date.slice(8, 10) } as const;
  }
};

export default formatDate;
