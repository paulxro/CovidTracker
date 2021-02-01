import LegendItem from './LegendItem';

const legendItems = [
    new LegendItem(
        "5,000,000 +",
        "#26225c",
        (cases) => cases >= 5_000_000,
        "white",
        "white"
    ),
    new LegendItem(
        "1,000,000 - 4,999,999",
        "#3b3775",
        (cases) => cases >= 1_000_000 && cases < 5_000_000,
        "white",
        "white",
    ),
    new LegendItem(
        "500,000 - 999,999",
        "#5e5a94",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "rgb(38, 38, 51)",
        "rgb(38, 38, 51)",

    ),
    new LegendItem(
        "100,000 - 499,999",
        "#8582b0",
        (cases) => cases >= 100_000 && cases < 500_000,
        "rgb(38, 38, 51)",
        "rgb(38, 38, 51)",
    ),
    new LegendItem(
        "0 - 100,000",
        "#a5a3c7",
        (cases) => cases > 0 && cases < 100_000,
        "rgb(38, 38, 51)",
        "rgb(38, 38, 51)",
    ),
    new LegendItem(
        "No Data",
        "#d5d5db",
        (cases) => true,
        "rgb(38, 38, 51)",
        "rgb(38, 38, 51)",
    )

];

export default legendItems;