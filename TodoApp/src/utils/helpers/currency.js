const compactFormatter = Intl.NumberFormat("en", {
  maximumFractionDigits: 2,
  notation: "compact",
});
export function getCurrencyValue(value, currencyVars, showCompact = false) {
  value = parseFloat(value);
  if (isNaN(value)) {
    value = 0;
  }

  if (!currencyVars || currencyVars == "undefined") {
    return "$" + number_format(value, 2, ".", "");
  } else {
    if (!currencyVars.symbol_left) {
      currencyVars.symbol_left = "";
    }
    const decimalSymbol = currencyVars.price_format === 0 ? "." : ",";
    const space = currencyVars.symbol_left.length > 2 ? "  " : "";
    const thousandSep = currencyVars.price_format === 0 ? "," : "";
    if (value >= 0) {
      if (showCompact) {
        return (
          currencyVars.symbol_left + space + compactFormatter.format(value)
        );
      }
      return (
        currencyVars.symbol_left +
        space +
        number_format(
          value,
          currencyVars.decimal_places,
          decimalSymbol,
          thousandSep
        )
      );
    } else {
      value = -1 * value;
      if (showCompact) {
        return (
          "-" +
          currencyVars.symbol_left +
          space +
          compactFormatter.format(value)
        );
      }
      return (
        "-" +
        currencyVars.symbol_left +
        space +
        number_format(
          value,
          currencyVars.decimal_places,
          decimalSymbol,
          thousandSep
        )
      );
    }
    // if (decimalSymbol === "," && value.toString().length >= 4){
    //   return currencyVars.symbol_left + space + comma_seperated(value, currencyVars.decimal_places)
    // } else {
    //   return currencyVars.symbol_left + space + number_format(value, currencyVars.decimal_places, decimalSymbol, "")
    // }
  }
}

function number_format(number, decimals, dec_point, thousands_sep) {
  number = number * 1; //makes sure `number` is numeric value
  const str = number
    .toFixed(decimals ? decimals : 0)
    .toString()
    .split(".");
  const parts = [];
  for (let i = str[0].length; i > 0; i -= 3) {
    parts.unshift(str[0].substring(Math.max(0, i - 3), i));
  }
  str[0] = parts.join(
    typeof thousands_sep != "undefined" ? thousands_sep : ","
  );
  return str.join(dec_point ? dec_point : ".");
}

function comma_seperated(number, decimal) {
  const result = Number(parseFloat(number).toFixed(2)).toLocaleString("en", {
    minimumFractionDigits: decimal,
  });
  return result;
}
